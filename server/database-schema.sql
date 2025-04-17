-- TABLES
-- Users
-- id, full_name, username, linktoimage, FirebaseUUID, timestamp, productTeam (fills in 'My Company')

-- comments
-- id, createdBy(username), relpy_to(null or id), timestamp, at_user (null or id)

-- suggestions
-- id, title, category, etc... 
CREATE TYPE suggestion_category AS ENUM ('Feature', 'UI', 'UX', 'Enhancement', 'Bug');
CREATE TABLE suggestions (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    category suggestion_category,
    detail VARCHAR
);
INSERT INTO suggestions (title, category, detail)
VALUES
    ('More Cowbell', 'Enhancement', 'Every aspect must have more cowbell.');