-- CreateTable
CREATE TABLE "user_usr" (
    "id_usr" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,

    CONSTRAINT "user_usr_pk" PRIMARY KEY ("id_usr")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_usr_email_idx" ON "user_usr"("email");

-- CreateIndex
CREATE INDEX "user_usr_name_idx" ON "user_usr"("name");
