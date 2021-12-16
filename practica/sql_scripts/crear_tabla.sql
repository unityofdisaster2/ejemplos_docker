CREATE DATABASE IF NOT EXISTS TestDB;

use TestDB;

CREATE TABLE IF NOT EXISTS PERSON(
  id INTEGER primary key not null auto_increment,
  name VARCHAR(100) not null,
  country VARCHAR(100) not null 
);

GRANT ALL on TestDB.* to test_user@'%';