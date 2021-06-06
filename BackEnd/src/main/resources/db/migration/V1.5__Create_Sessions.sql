CREATE TABLE IF NOT EXISTS "Sessions"
(
    "id"            SERIAL      PRIMARY KEY,
    "description"   TEXT        NOT NULL,
    "video_id"      TEXT        NOT NULL,
    "course_id"     SERIAL      NOT NULL,
    "informations"  TEXT        NOT NULL
);
