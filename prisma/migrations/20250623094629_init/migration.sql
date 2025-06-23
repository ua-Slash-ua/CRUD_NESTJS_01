-- CreateTable
CREATE TABLE "ModelBook" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL,

    CONSTRAINT "ModelBook_pkey" PRIMARY KEY ("id")
);
