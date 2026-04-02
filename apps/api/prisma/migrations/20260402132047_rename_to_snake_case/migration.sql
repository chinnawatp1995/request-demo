/*
  Warnings:

  - You are about to drop the `demo_requests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "demo_requests";

-- CreateTable
CREATE TABLE "demo_request" (
    "id" TEXT NOT NULL,
    "full_name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "country" VARCHAR(100) NOT NULL,
    "message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "demo_request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "demo_request_created_at_idx" ON "demo_request"("created_at");

-- CreateIndex
CREATE INDEX "demo_request_email_idx" ON "demo_request"("email");
