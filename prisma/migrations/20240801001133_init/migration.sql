-- CreateTable
CREATE TABLE "tarefa" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(55) NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL,
    "done" BOOLEAN NOT NULL,
    "finishDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tarefa_pkey" PRIMARY KEY ("id")
);
