-- connect to postgress (localhost / wsl ) using the command line 
-- sudo -u postgres psql postgres


create database exampleitems;
--
create user springboard with encrypted password 'bounce958';
--
grant all privileges on database exampleitems to springboard;
--
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO springboard;
--
GRANT ALL PRIVILEGES ON ALL sequences IN SCHEMA public TO springboard;
--

--
create TABLE "items" (
    "itemID" SERIAL primary key,
    "name" VARCHAR(50) not null,
    "description" VARCHAR(2000) not null,
    "quantity" integer
);


create TABLE "users" (
    "username" varchar(200) primary key,
    "passwordhash" VARCHAR(50) not null,
    "role" VARCHAR(12) not null
);

create TABLE "oauthtoken" (
    "id" varchar(200) primary key,
    "token" VARCHAR(2000) not null,
    "expires" timestamp not null
);



