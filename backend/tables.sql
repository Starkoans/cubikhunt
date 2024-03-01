CREATE TABLE "comments"(
                           "id" BIGINT NOT NULL,
                           "id_user" BIGINT NOT NULL,
                           "text" VARCHAR(255) NOT NULL,
                           "reply_to" BIGINT NOT NULL,
                           "id_project" BIGINT NOT NULL,
                           "created_at" DATE
);
ALTER TABLE
    "comments" ADD PRIMARY KEY("id");

CREATE TABLE "participation"(
                                "id" BIGINT NOT NULL,
                                "id_user" BIGINT NOT NULL,
                                "id_project" BIGINT NOT NULL,
                                "role" VARCHAR(255) NOT NULL,
                                "amount_invest" DOUBLE PRECISION NOT NULL,
                                "id_transaction" BIGINT NOT NULL,
                                "created_at" DATE
);
ALTER TABLE
    "participation" ADD PRIMARY KEY("id");

CREATE TABLE "likes"(
                        "id" BIGINT NOT NULL,
                        "id_liked" BIGINT NOT NULL,
                        "id_user" BIGINT NOT NULL
);
ALTER TABLE
    "likes" ADD PRIMARY KEY("id");

CREATE TABLE "subscription"(
                               "id" BIGINT NOT NULL,
                               "id_user" BIGINT NOT NULL,
                               "id_subscription_object" BIGINT NOT NULL
);
ALTER TABLE
    "subscription" ADD PRIMARY KEY("id");

CREATE TABLE "notifications"(
                                "id" BIGINT NOT NULL,
                                "id_user" BIGINT NOT NULL,
                                "status" BOOLEAN NOT NULL,
                                "id_subscription" BIGINT NOT NULL
);
ALTER TABLE
    "notifications" ADD PRIMARY KEY("id");

CREATE TABLE "projects"(
                           "id" BIGINT NOT NULL,
                           "name" VARCHAR(255) NOT NULL,
                           "current_amount" DOUBLE PRECISION NOT NULL,
                           "target_amount" DOUBLE PRECISION NOT NULL,
                           "end_date" DATE NOT NULL,
                           "description" VARCHAR(255) NOT NULL,
                           "body" VARCHAR(255) NOT NULL,
                           "logo" VARCHAR(255) NOT NULL,
                           "video" VARCHAR(255) NOT NULL,
                           "category" VARCHAR(255) CHECK
                               ("category" IN('Медицина', 'Экономика', 'Общество','Образование','Творчество','Наука', 'Интернет')) NOT NULL,
                           "created_at" BIGINT NOT NULL
);
ALTER TABLE
    "projects" ADD PRIMARY KEY("id");

CREATE TABLE "users"(
                        "id" BIGINT NOT NULL,
                        "firstname" VARCHAR(255) NOT NULL,
                        "lastname" VARCHAR(255) NOT NULL,
                        "login" VARCHAR(255) NOT NULL,
                        "password" VARCHAR(255) NOT NULL,
                        "role" VARCHAR(255) NOT NULL,
                        "avatar" VARCHAR(255) NOT NULL,
                        "created_at" DATE NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");

CREATE TABLE "roadmaps"(
                           "id" BIGINT NOT NULL,
                           "id_project" BIGINT NOT NULL,
                           "date" DATE NOT NULL,
                           "content" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "roadmaps" ADD PRIMARY KEY("id");

ALTER TABLE
    "roadmaps" ADD CONSTRAINT "roadmaps_id_project_fk" FOREIGN KEY("id_project") REFERENCES "projects"("id");

ALTER TABLE
    "participation" ADD CONSTRAINT "participation_id_user_fk" FOREIGN KEY("id_user") REFERENCES "users"("id");
ALTER TABLE
    "participation" ADD CONSTRAINT "participation_id_project_fk" FOREIGN KEY("id_project") REFERENCES "projects"("id");


ALTER TABLE
    "notifications" ADD CONSTRAINT "notifications_id_user_fk" FOREIGN KEY("id_user") REFERENCES "users"("id");
ALTER TABLE
    "notifications" ADD CONSTRAINT "notifications_id_subscription_fk" FOREIGN KEY("id_subscription") REFERENCES "subscription"("id");

ALTER TABLE
    "comments" ADD CONSTRAINT "comments_id_project_fk" FOREIGN KEY("id_project") REFERENCES "projects"("id");
ALTER TABLE
    "comments" ADD CONSTRAINT "comments_id_user_fk" FOREIGN KEY("id_user") REFERENCES "users"("id");
ALTER TABLE
    "comments" ADD CONSTRAINT "comments_reply_to_fk" FOREIGN KEY("reply_to") REFERENCES "comments"("id");

ALTER TABLE
    "likes" ADD CONSTRAINT "likes_id_liked_comments_fk" FOREIGN KEY("id_liked") REFERENCES "comments"("id");
ALTER TABLE
    "likes" ADD CONSTRAINT "likes_id_liked_project_fk" FOREIGN KEY("id_liked") REFERENCES "projects"("id");
ALTER TABLE
    "likes" ADD CONSTRAINT "likes_id_user_fk" FOREIGN KEY("id_user") REFERENCES "users"("id");


ALTER TABLE
    "subscription" ADD CONSTRAINT "subscription_id_subscription_projects_fk" FOREIGN KEY("id_subscription_object") REFERENCES "projects"("id");
ALTER TABLE
    "subscription" ADD CONSTRAINT "subscription_id_user_fk" FOREIGN KEY("id_user") REFERENCES "users"("id");
ALTER TABLE
    "subscription" ADD CONSTRAINT "subscription_id_subscription_users_fk" FOREIGN KEY("id_subscription_object") REFERENCES "users"("id");


