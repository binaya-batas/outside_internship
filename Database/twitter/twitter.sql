-- Active: 1677463018193@@127.0.0.1@5432@twitter@public
CREATE TABLE Users (
   id SERIAL NOT NULL PRIMARY KEY,
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   phone_number INT,
   email VARCHAR(50) NOT NULL UNIQUE,
   is_active BOOLEAN DEFAULT false,
   created_at TIMESTAMP NOT NULL DEFAULT now(),
   updated_at TIMESTAMP NOT NULL DEFAULT now(),
   deleted_at TIMESTAMP
);

ALTER TABLE users
ALTER COLUMN phone_number TYPE VARCHAR(10);

ALTER TABLE users
ADD COLUMN password VARCHAR(20) NOT NULL;

ALTER TABLE users
ADD CONSTRAINT unique_constraint UNIQUE (password);

SELECT * FROM Users;


-- CREATING USERS --
INSERT INTO users(first_name, last_name, phone_number, email, password, is_active)
VALUES ('Binaya', 'Batas', 9860830203, 'batas.binaya@gmail.com', 'binaya90', true);

INSERT INTO users(first_name, last_name, phone_number, email, password) 
VALUES ('Kenish', 'Dahal', 9841234567, 'kenish@gmail.com', 'kenish90');

INSERT INTO users(first_name, last_name, phone_number, email, password) 
VALUES ('Devendra', 'Gurung', 9841234568, 'dev@gmail.com', 'dev90');

select * from users;

CREATE TABLE Tweets (
   id SERIAL NOT NULL PRIMARY KEY,
   user_id INT NOT NULL UNIQUE,
   FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE NO ACTION,
   tweet_content TEXT NOT NULL,
   tweet_likes INT NOT NULL,
   tweet_status VARCHAR(20) NOT NULL,
   created_at TIMESTAMP NOT NULL DEFAULT now(),
   updated_at TIMESTAMP NOT NULL DEFAULT now(),
   deleted_at TIMESTAMP
);

ALTER TABLE tweets
ADD COLUMN tweet_hashtags varchar(20);

ALTER TABLE tweets
DROP CONSTRAINT tweets_userid UNIQUE (user_id);

-- CREATING TWEETS --
INSERT INTO tweets (user_id, tweet_content, tweet_likes, tweet_status)
VALUES (3, 'This is my first tweet', 40, 'posted');

INSERT INTO tweets (user_id, tweet_content, tweet_likes, tweet_status)
VALUES (4, 'This is my second tweet', 20, 'posted');

INSERT INTO tweets (user_id, tweet_content, tweet_likes, tweet_status)
VALUES (6, 'This is my third tweet', 38, 'posted');

INSERT INTO tweets (user_id, tweet_content, tweet_likes,tweet_hashtags, tweet_status)
VALUES (4, 'This is my fourth tweet', 20, '#fourthtweet', 'posted');

INSERT INTO tweets (user_id, tweet_content, tweet_likes,tweet_hashtags, tweet_status)
VALUES (6, 'This is my fivth tweet', 38, '#fifthtweet', 'posted');

SELECT * FROM tweets;


CREATE TABLE tweets_likes(
    id SERIAL NOT NULL PRIMARY KEY,
    tweet_id INT NOT NULL,
    user_id INT NOT NULL,
    liked_at TIMESTAMP DEFAULT now(),
    FOREIGN KEY (tweet_id) REFERENCES tweets (id) ON DELETE NO ACTION,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE NO ACTION
);

INSERT INTO tweets_likes (tweet_id, user_id)
VALUES (1, 3);

INSERT INTO tweets_likes (tweet_id, user_id)
VALUES (1, 4);

INSERT INTO tweets_likes (tweet_id, user_id)
VALUES (2, 6);

INSERT INTO tweets_likes (tweet_id, user_id)
VALUES (2, 4);


CREATE TABLE followers (
    id SERIAL PRIMARY KEY,
    follower_id INT NOT NULL,
    followee_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (follower_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (followee_id) REFERENCES users (id) ON DELETE CASCADE
);

-- FOLLOWING USERS
INSERT INTO followers(follower_id, followee_id)
VALUES (3, 4);

INSERT INTO followers(follower_id, followee_id)
VALUES (3, 6);

INSERT INTO followers(follower_id, followee_id)
VALUES (4, 3);

INSERT INTO followers(follower_id, followee_id)
VALUES (6, 3);

-- LIST OF FOLLOWERS OF A USER(3: binaya)
SELECT followers.follower_id, users.first_name FROM followers
INNER JOIN users on users.id = followers.follower_id
WHERE followee_id = 3;

CREATE TABLE Comments (
    id SERIAL PRIMARY KEY,
    tweet_id INT NOT NULL,
    user_id INT NOT NULL,
    comment_content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    deleted_at TIMESTAMP,
    FOREIGN KEY (tweet_id) REFERENCES tweets (id) ON DELETE NO ACTION,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE NO ACTION
);

-- LOGIN USERS --
SELECT * FROM Users 
WHERE email='batas.binaya@gmail.com' AND password='binaya90'
--if the returned row count is one, the user will be logged in.

