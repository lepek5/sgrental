USE sgrental;
create table if not exists users (
  id int unsigned not null auto_increment primary key,
  email varchar(100) not null unique,
  password varchar(254) not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table if not exists employees (
  id int unsigned not null auto_increment primary key,
  user_id int unsigned not null,
  foreign key (user_id) references users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) engine=innodb;

create table if not exists customers (
  id int unsigned not null auto_increment primary key,
  user_id int unsigned not null,
  name varchar(100) not null,
  phone varchar(20),
  date_of_birth varchar(10),
  address varchar(120),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id)
) engine=innodb;

create table if not exists access (
  id int unsigned not null auto_increment primary key,
  user_id int unsigned not null,
  level int unsigned,
  foreign key (user_id) references users (id)
);
create table if not exists products (
  id int unsigned not null auto_increment primary key,
  title varchar(100) not null,
  description varchar(100),
  price int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table if not exists categories (
  id int unsigned not null auto_increment primary key,
  category varchar(27) not null
) engine=innodb;

create table if not exists product_categories (
  id int unsigned not null auto_increment primary key,
  product_id int unsigned not null,
  category_id int unsigned not null,
  constraint fk_product_id foreign key (product_id) references products (id),
  constraint fk_category_id foreign key (category_id) references categories (id)
) engine=innodb;

create table if not exists reservations (
  id int unsigned not null auto_increment primary key,
  product_id int unsigned,
  customer_id int unsigned,
  employee_id int unsigned,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  start_at varchar(50) not null,
  end_at varchar(50),
  confirmed boolean not null,
  completed boolean not null,
  foreign key (customer_id) references customers (id),
  foreign key (product_id) references products(id),
  foreign key (employee_id) references employees (id)
) engine=Innodb;


INSERT INTO users (email, password) VALUES ("lepe", "salasana");
INSERT INTO users (email, password) VALUES ("pasi", "salasana");
INSERT INTO users (email, password) VALUES ("sami", "salasana");
INSERT INTO access (user_id, level) VALUES (1, 0);
INSERT INTO access (user_id, level) VALUES (2, 10);
INSERT INTO access (user_id, level) VALUES (3, 100);
INSERT INTO customers (
  user_id,
  name,
  phone,
  address,
  date_of_birth) VALUES (
    2,
    "Pasi Kuivanen",
    "045 5544455",
    "Kalkkikuja 66",
    "04/14/1992"
  );
INSERT INTO employees (user_id) VALUES (3);
SELECT * FROM customers;