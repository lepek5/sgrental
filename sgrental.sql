create table users (
  id int unsigned not null auto_increment primary key,
  name varchar(100) not null,
  email varchar(100) not null unique,
  password_hash varchar(120) not null,
  dob date,
  address varchar(120)
);

create table products (
  id int unsigned not null auto_increment primary key,
  title varchar not null,
  description varchar,
  tags varchar,
  price int not null
);

create table reservations (
  id int  unsigned not null auto_increment primary key,
  product_id int unsigned,
  user_id int unsigned,
  created_at date not null,
  start_date date not null,
  end_date date not null,
  isAccepted boolean,
  isPayed boolean,
  constraint fk_user_id foreign key (user_id) references users (id),
  constraint fk_product_id foregn key (product_id) references products(id)
);

create table sellers (
  id int unsigned not null auto_increment primary key,
  user_id int unsigned,
  constraint fk_user_id foreign key (user_id) references users(id)
);