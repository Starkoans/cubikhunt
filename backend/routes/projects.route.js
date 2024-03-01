const Router = require('express');
const router = new Router()
const projectController = require('../controller/project.controller')

router.post("/projects", projectController.createNewProject);
router.get("/projects", projectController.getAllProjects);
router.get("/projects/:id", projectController.getProjectById);
router.get("/projects/:name", projectController.getAllProjectsByName);
router.patch("/projects/:id", projectController.updateProjectEndDate);

router.get("/projects/:id/like", projectController.getProjectLikeStatus);
router.post("/projects/:id/like", projectController.likeProject);
router.delete("/projects/:id/like", projectController.unlikeProject);

module.exports = router;