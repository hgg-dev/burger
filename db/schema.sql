create database burgers_db;
use burgers_db;
create table burgers (
	id integer not null auto_increment,
    burger_name varchar(30) not null,
    devoured ENUM('y','n'),
    primary key (id)
)