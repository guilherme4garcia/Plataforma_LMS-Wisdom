CREATE TABLE IF NOT EXISTS "Image"
(
    "id"       SERIAL PRIMARY KEY,
    "content"     BYTEA       NOT NULL,
    "name"    TEXT        NOT NULL,
    "location" TEXT        NOT NULL
);
