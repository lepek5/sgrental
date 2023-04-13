create table if not exists users (
  id int unsigned not null auto_increment primary key,
  email varchar(100) not null unique,
  password_hash varchar(254) not null
);
create table if not exists products (
  id int unsigned not null auto_increment primary key,
  title varchar(100) not null,
  description varchar(100),
  price int not null
);
create table if not exists product_tags (
  id int unsigned not null auto_increment primary key,
  product_id int unsigned not null,
  tag_id int unsigned not null
  constraint fk_product_id foreign key (product_id) references products (id),
  constraint fk_tag_id foreign key (tag_id) references tags (id)
) engine=innodb;
create table if not exists tags (
  id int unsigned not null auto_increment primary key,
  tag varchar(27) not null
) engine=innodb;

create table if not exists reservations (
  id int unsigned not null auto_increment primary key,
  product_id int unsigned,
  customer_id int unsigned,
  created_at varchar(50) not null,
  start_at varchar(50) not null,
  end_at varchar(50),
  is_confirmed boolean not null,
  is_completed boolean not null,
  constraint fk_customer_id foreign key (customer_id) references customers (id)
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

create table if not exists customers (
  id int unsigned not null auto_increment primary key,
  user_id id int unsigned not null,
  name varchar(100) not null,
  phone varchar(20),
  date_of_birth varchar(50),
  address varchar(120)
  foreign key (user_id) references users(id)
) engine=innodb;