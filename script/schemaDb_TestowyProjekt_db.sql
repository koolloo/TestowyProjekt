--
-- Database: testowyprojekt_db
--

CREATE DATABASE testowyprojekt_db;

-- ENTITIES

--
-- Schema entity debtor
--

CREATE TABLE IF NOT EXISTS "debtor" (
	Name varchar(130) ,
	Pesel varchar(130) ,
	Surname varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity document
--

CREATE TABLE IF NOT EXISTS "document" (
	AddDate date ,
	AnswerDate date ,
	AnswerExpireDate date ,
	DocumentDate date ,
	Type numeric ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(130) ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);

--
-- Schema entity vindicationcase
--

CREATE TABLE IF NOT EXISTS "vindicationcase" (
	ActualDebt decimal(6,2) ,
	AddDate date ,
	StartingDebt decimal(6,2) ,
	
	_id SERIAL PRIMARY KEY

);




-- relation 1:m Debtor VindicationCase - Debtor
ALTER TABLE vindicationcase ADD COLUMN Debtor INTEGER  REFERENCES "debtor"(_id);

-- relation m:m Document VindicationCase - Document
CREATE TABLE IF NOT EXISTS "VindicationCase_Document" (
    _id SERIAL PRIMARY KEY,
    id_VindicationCase INTEGER  NOT NULL REFERENCES "vindicationcase"(_id),
    id_Document INTEGER  NOT NULL REFERENCES "document"(_id)
);
