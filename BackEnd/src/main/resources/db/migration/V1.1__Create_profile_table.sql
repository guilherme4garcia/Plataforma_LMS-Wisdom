CREATE TABLE IF NOT EXISTS "user_account"
(
    "id"       SERIAL PRIMARY KEY,
    "name"     TEXT        NOT NULL,
    "email"    TEXT        NOT NULL,
    "password" TEXT        NOT NULL,
    "role"     VARCHAR(10) NOT NULL
);

-- ALTER TABLE "userAccount" ADD COLUMN "created_by" TEXT;
-- ALTER TABLE "userAccount" ADD COLUMN "created_date" TEXT;
-- ALTER TABLE "userAccount" ADD COLUMN "last_modified_by" TEXT;
-- ALTER TABLE "userAccount" ADD COLUMN "last_modified_date" TEXT;
