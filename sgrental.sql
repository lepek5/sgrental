create table if not exists users (
  id int unsigned not null auto_increment primary key,
  name varchar(100) not null,
  email varchar(100) not null unique,
  password_hash varchar(120) not null,
  dob date,
  address varchar(120)
);
create table if not exists products (
  id int unsigned not null auto_increment primary key,
  title varchar(100) not null,
  description varchar(100),
  tags varchar(255),
  price int not null
);

create table if not exists reservations (
  id int unsigned not null auto_increment primary key,
  product_id int unsigned,
  user_id int unsigned,
  created_at date not null,
  start_date date not null,
  end_date date not null,
  isAccepted boolean,
  isPayed boolean,
  constraint fk_user_id foreign key (user_id) references users (id),
  constraint fk_product_id foreign key (product_id) references products(id)
);

create table if not exists sellers (
  id int unsigned not null auto_increment primary key,
  user_id int unsigned,
  constraint fk_seller_id foreign key (user_id) references users(id)
);