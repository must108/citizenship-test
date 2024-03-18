create database citizen_site;

create table questions (
	question_id int not null,
    question varchar(255) not null,
	primary key (question_id)
);

create table answers (
	answer_id int not null,
    question_id int not null,
    answer varchar(255) not null,
    primary key (answer_id)
)