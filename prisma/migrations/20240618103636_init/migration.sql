-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "image" TEXT,
    "passwordEnabled" BOOLEAN DEFAULT false,
    "banned" BOOLEAN DEFAULT false,
    "emailVerified" TEXT,
    "phoneNumberVerified" TEXT,
    "appointmentDates" TEXT,
    "diagnosis" TEXT,
    "assignedDoctor" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");
