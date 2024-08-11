CREATE TABLE user_usr (
	id_usr varchar NOT NULL,
	email varchar NOT NULL,
	"name" varchar NOT NULL,
	pasword varchar NOT NULL,
	CONSTRAINT user_usr_pk PRIMARY KEY (id_usr)
);
CREATE INDEX user_usr_name_idx ON user_usr ("name");
CREATE UNIQUE INDEX user_usr_email_idx ON user_usr (email);
