/*
  Warnings:

  - You are about to drop the `user_usr` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user_usr";

-- CreateTable
CREATE TABLE "User" (
    "id_usr" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,

    CONSTRAINT "user_usr_pk" PRIMARY KEY ("id_usr")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_usr_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_name_idx" ON "User"("name");
