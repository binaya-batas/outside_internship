-- Active: 1677132069294@@127.0.0.1@5432@blog@public

CREATE TABLE Users (
   id SERIAL NOT NULL PRIMARY KEY,
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   phone_number INT,
   email VARCHAR(50) NOT NULL UNIQUE,
   role_id INT NOT NULL UNIQUE,
   FOREIGN KEY (role_id) REFERENCES Roles(id) ON DELETE NO ACTION,
   is_active BOOLEAN DEFAULT false,
   created_at TIMESTAMP NOT NULL DEFAULT now(),
   updated_at TIMESTAMP NOT NULL DEFAULT now(),
   deleted_at TIMESTAMP
);

ALTER TABLE users
ALTER COLUMN phone_number TYPE VARCHAR(10);

INSERT INTO users(first_name, last_name, phone_number, email, role_id) 
VALUES ('Binaya', 'Batas', 9860830203, 'batas.binaya@gmail.com', 3);

INSERT INTO users(first_name, last_name, phone_number, email, role_id) 
VALUES ('Kenish', 'Dahal', 9841234567, 'kenish@gmail.com', 1);


-- Category
CREATE TABLE Category (
    id SERIAL NOT NULL PRIMARY KEY,
    category_name VARCHAR(20) NOT NULL UNIQUE,
    category_description VARCHAR(250) 
);

INSERT INTO category(category_name, category_description)
VALUES ('Tech', 'Posts related to technology.');

INSERT INTO category(category_name, category_description)
VALUES ('News', 'Posts related to news and new events around the world.');


-- Tags
CREATE TABLE Tags (
   id SERIAL NOT NULL PRIMARY KEY,
   tag_name VARCHAR(25) NOT NULL UNIQUE,
   tag_description VARCHAR(250) 
);


-- Posts
CREATE TABLE Posts (
   id SERIAL NOT NULL PRIMARY KEY,
   user_id INT NOT NULL UNIQUE,
   FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE NO ACTION,
   post_title VARCHAR(200) NOT NULL,
   post_content TEXT NOT NULL,
   post_views INT NOT NULL,
   post_featured BOOLEAN NOT NULL,
   post_published BOOLEAN NOT NULL DEFAULT false,
   post_status VARCHAR(20) NOT NULL,
   created_at TIMESTAMP NOT NULL DEFAULT now(),
   updated_at TIMESTAMP NOT NULL DEFAULT now(),
   deleted_at TIMESTAMP
);

ALTER TABLE posts
DROP CONSTRAINT user_id;

ALTER TABLE posts
DROP COLUMN post_featured;

ALTER TABLE posts
ALTER COLUMN post_status ENUM ('draft', 'published') DEFAULT 'draft';

ALTER TABLE posts
ADD COLUMN category_id INT;

SELECT * FROM posts;

ALTER TABLE posts 
ADD CONSTRAINT fk_posts_category FOREIGN KEY (category_id) REFERENCES category (id);

INSERT INTO posts(user_id, post_title, post_content, post_published, post_status)
VALUES (2, 'How to learn Javascript.', 'How to learn Javascript.How to learn Javascript.How to learn Javascript.How to learn Javascript.How to learn Javascript.', false, 'draft');

INSERT INTO posts(user_id, post_title, post_content, post_published, post_status, category_id)
VALUES (1, 'How to learn React.', 'How to learn React.How to learn React.How to learn React.How to learn React.How to learn React.', true, 'draft', 1);


-- Metadata
CREATE TABLE metadata(
   id SERIAL PRIMARY KEY,
   metadata_value VARCHAR(20) NOT NULL,
   created_at TIMESTAMP NOT NULL DEFAULT now(),
   deleted_at TIMESTAMP
);

SELECT * FROM metadata;

CREATE TABLE post_metadata(
   id SERIAL PRIMARY KEY,
   post_id INT NOT NULL,
   views INT NOT NULL,
   featured boolean NOT NULL,
   FOREIGN KEY (post_id) REFERENCES posts (id)
);

INSERT INTO post_metadata(post_id, views, featured)values(1,25, false);
INSERT INTO post_metadata(post_id, views, featured)values(4,80, true);


SELECT * FROM post_metadata;

-- Comments
CREATE TABLE Comments (
    id SERIAL PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    comment_content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    deleted_at TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE NO ACTION,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE NO ACTION
);

INSERT INTO comments (post_id, user_id, comment_content)
VALUES (1, 1, 'This posts was very useful. Thankyou!!!');


-- Replies
CREATE TABLE Replies (
    id SERIAL PRIMARY KEY,
    comment_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    deleted_at TIMESTAMP,
    FOREIGN KEY (comment_id) REFERENCES comments (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

INSERT INTO replies(comment_id, user_id, content)
VALUES (1, 2, 'Thankyou for your comment.');


SELECT category_name FROM category WHERE id= '1';

-- Retrieving posts by category or tag.
SELECT posts.post_title, posts.post_content, category.category_name
FROM posts
INNER JOIN category on posts.category_id = category.id;

-- Retrieving featured posts
SELECT * FROM posts where post_published = true;

--Retrievng popular posts
SELECT post_id, MAX(views) AS post_views FROM post_metadata
GROUP BY post_id;

SELECT posts.post_title, post_metadata.post_id, post_metadata.views
FROM post_metadata
INNER JOIN posts ON post_metadata.post_id = posts.id
WHERE post_metadata.views = (SELECT MAX(views) FROM post_metadata)








