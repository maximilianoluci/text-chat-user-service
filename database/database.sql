CREATE TABLE user_usr (
	email varchar NOT NULL,
	"name" varchar NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (email)
);

CREATE TABLE user_contacts_uc (
	email_usr varchar NOT NULL,
	email_contact varchar NOT NULL,
	CONSTRAINT user_contacts_uc_unique UNIQUE (email_usr,email_contact)
);
CREATE INDEX user_contacts_uc_email_usr_idx ON user_contacts_uc (email_usr);