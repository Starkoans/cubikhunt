const db = require('../db')
class ProjectController{
    async createNewProject(req, res){
        const {
            name,
            current_amount,
            target_amount,
            end_date,
            description = null,
            body = null,
            logo = null,
            video = null,
            created_at = new Date(),
            category = null } = req.body;

        let newProject;
        try {
            newProject = await db.query(
                'INSERT INTO projects values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
                [ name, current_amount, target_amount, end_date, description, body, logo, video, created_at, category ]
            )
            console.log(newProject.rows[0])
        } catch (e) {console.log(e)}
        res.json(newProject.rows[0])
    }
    async getAllProjects(req, res){
        try {
            const {name, isCollects} = req.query
            let dynamicName;
            name? dynamicName = '%'.concat(name.concat('%')) : null
            let projects, likes;
            if ((name !== undefined) && (isCollects !== undefined)){
                projects = await db.query('SELECT * FROM projects WHERE name LIKE $1 AND end_date < now() ORDER BY id DESC', [name])
            } else if (name && (name !== undefined)){
                projects = await db.query('SELECT * FROM projects WHERE name LIKE $1 ORDER BY id DESC', [dynamicName] )
            } else if (isCollects && (isCollects !== undefined)){
                projects = await db.query('SELECT * FROM projects WHERE end_date < now() ORDER BY id DESC')
            }
            else {
                projects = await db.query('SELECT projects.*, COALESCE(likes.likes_count, 0) AS likes_count\n' +
                    'FROM projects\n' +
                    'LEFT JOIN (\n' +
                    '    SELECT id_project, COUNT(id_user) AS likes_count\n' +
                    '    FROM project_likes\n' +
                    '    GROUP BY id_project\n' +
                    ') AS likes ON projects.id = likes.id_project ORDER BY id DESC')
            }
            console.log(name, isCollects)
            res.status(200).json(projects.rows);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
    async getAllProjectsByName(req, res){
        const name = req.params.name
        const projects = await db.query('SELECT * FROM projects WHERE name LIKE $1 ORDER BY id DESC', [name])
        res.json(projects.rows)
    }
    async getProjectById(req, res){
        const id = req.params.id
        const project = await db.query('SELECT * FROM projects WHERE id = $1', [id])
        res.json(project.rows[0])
    }
    async updateProjectEndDate(req,res){
        const end_date = req.params.endDate
        const project = await db.query('UPDATE projects SET end_date = $1', [end_date])
        res.json(project.rows[0])
    }
    async getProjectLikeStatus(req,res){
        const project_id = req.params.id
        const {user_id} = req.query
        let like;
        try{
            like = await db.query('SELECT * FROM project_likes WHERE id_project = $1 AND id_user = $2', [project_id, user_id]);
            res.json(like.rows[0]).status(200)
        } catch (err){
            console.log('backErr: ',err);
            res.status(500).json(err.message);
        }
    }
    async likeProject(req,res){
        const project_id = req.params.id
        const user_id = req.body.user_id //приходит пустым
        console.log('user_id: ', user_id,' project_id: ', project_id)
        let like;
        try{
            like = await db.query('INSERT INTO project_likes (id_project, id_user) VALUES ($1, $2);', [project_id, user_id]);
            res.json(like.rows[0]).status(200)
        } catch (err){
            console.log(err);
            res.status(500).json(err.message);
        }
    }
    async unlikeProject(req,res){
        const project_id = req.params.id
        const user_id = req.body.user_id
        console.log('user_id: ', user_id,' project_id: ', project_id)
        let unlike;
        try{
            unlike = await db.query('DELETE FROM project_likes WHERE id_project = $1 AND id_user = $2', [project_id, user_id]);
            res.json(unlike.rows[0]).status(200)
        } catch (err){
            console.log(err);
            res.status(500).json(err.message);
        }
    }
}
module.exports = new ProjectController();