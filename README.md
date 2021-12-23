# Digital Envision API demo test

This is repository for demo application for sending scheduled message to users

## Requirement

- Node.js
- MySQL
- NPM

## Installation

### Clone and copy configuration

Clone this repository and copy configuration in `config/config.json.example`.

```
$ git clone https://github.com/zamronypj/envision-backend-demo.git
$ cd envision-backend-demo
$ cp config/config.json.example config/config.json
$ cp config/appconfig.js.example config/appconfig.js
```

Edit database connection credentials in `config/config.json` to match your system and also set your [hookbin endpoint](https://hookbin.com).

### Install dependencies

Run

```
$ npm install
```

### Run database migrations

```
$ npx sequelize-cli db:migrate
```

## Run server and cron

Server and cron is run as two seperate processes.

```
$ npm run start & npm run cron
```

## Endpoints

- `GET /users/`, list all users
- `POST /users/`, create new user
- `DELETE /users/:id`, delete a user
- `PUT /users/:id`, update a user
- `GET /locations/`, list all locations
- `POST /locations/`, create new location
- `DELETE /locations/:id`, delete a location
- `PUT /locations/:id`, update a location

## Have fun

Have fun tinkering.