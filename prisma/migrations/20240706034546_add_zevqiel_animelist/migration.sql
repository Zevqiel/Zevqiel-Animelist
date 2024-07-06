-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Year" INTEGER NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "anime_title" TEXT NOT NULL,
    "rating" DOUBLE PRECISION,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carousel" (
    "id" SERIAL NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "sub_title" TEXT NOT NULL,

    CONSTRAINT "Carousel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_user_email_anime_mal_id_key" ON "Collection"("user_email", "anime_mal_id");
