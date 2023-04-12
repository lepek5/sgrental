create table if not exists users (
  id int unsigned not null auto_increment primary key,
  name varchar(100) not null,
  email varchar(100) not null unique,
  password_hash varchar(254) not null,
  date_of_birth varchar(50),
  address varchar(120)
);
create table if not exists products (
  id int unsigned not null auto_increment primary key,
  title varchar(100) not null,
  description varchar(100),
  tags varchar(254),
  price int not null
);

create table if not exists reservations (
  id int unsigned not null auto_increment primary key,
  product_id int unsigned,
  user_id int unsigned,
  created_at varchar(50) not null,
  start_date varchar(50) not null,
  end_date varchar(50),
  is_valid boolean not null,
  is_payed boolean not null,
  constraint fk_user_id foreign key (user_id) references users (id)
    ON DELETE set null
    ON UPDATE set null,
  constraint fk_product_id foreign key (product_id) references products(id) 
    ON DELETE set null
    ON UPDATE set null
) engine=Innodb;

create table if not exists employees (
  id int unsigned not null auto_increment primary key,
  user_id int unsigned,
  foreign key (user_id) references users(id)
) engine=innodb;