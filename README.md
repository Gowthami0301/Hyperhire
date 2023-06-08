## Bookstore Host Demo Link

 [Demo](https://Gowthami0301.github.io/Hyperhire/)


## Requirement
Make bookstore

Reference https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155

# Frontend Setup

## Installed the required dependencies:
   npm install react react-dom axios antd
## Run
    npm run start
## Application Host 
     http://localhost:3000

# Backend Setup

## Set up the project and install dependencies:
    npm init -y
    npm install express pg pg-pool sequelize sequelize-cli swagger-ui-express

## Initialize Sequelize and create the database:
    npx sequelize-cli init
    npx sequelize-cli db:create

## Generate a Book model and migration:
    npx sequelize-cli model:generate --name Book --attributes title:string,author:string,coverImage:string,price:decimal,tag:string[]
    npx sequelize-cli db:migrate
## Run
    node app.js
## Swagger UI documentation Host
   http://localhost:4000/api-docs
## Server Host
   http://localhost:4000/books

## Bookstore Loading Screen

![alt text](https://github.com/Gowthami0301/Hyperhire/blob/master/src/assets/6.png)

## Bookstore Loaded Screen

![alt text](https://github.com/Gowthami0301/Hyperhire/blob/master/src/assets/1.png)


## Load More Screen

![alt text](https://github.com/Gowthami0301/Hyperhire/blob/master/src/assets/2.png)


## Search Screen

![alt text](https://github.com/Gowthami0301/Hyperhire/blob/master/src/assets/3.png)

## Login Screen

![alt text](https://github.com/Gowthami0301/Hyperhire/blob/master/src/assets/4.png)

## Signup Screen

![alt text](https://github.com/Gowthami0301/Hyperhire/blob/master/src/assets/5.png)

## Swagger-ui Screen

![alt text](https://github.com/Gowthami0301/Hyperhire/blob/master/src/assets/7.png)

![alt text](https://github.com/Gowthami0301/Hyperhire/blob/master/src/assets/8.png)


## Order Screen

![alt text](https://github.com/Gowthami0301/Hyperhire/blob/master/src/assets/9.png)

![alt text](https://github.com/Gowthami0301/Hyperhire/blob/master/src/assets/10.png)

![alt text](https://github.com/Gowthami0301/Hyperhire/blob/master/src/assets/11.png)

## Our Points Screen

![alt text](https://github.com/Gowthami0301/Hyperhire/blob/master/src/assets/12.png)




