# Digital Envision API demo test

This is repository for demo application for sending scheduled message to users.

It is consist of cron and RESET server application.

Cron application does following:

- Every day, a task runs to find users having upcoming birthdays.
For each users having upcoming birthday, message reminder is created and scheduled at date of birthday at 9 AM of user local timezone. Internally message scheduled time data is stored relative to server time. Message is stored in database only if there is no already pending message, i.e, by checking if target user id is matched.

- Every hour, another task runs to process any due pending message and send message to user. For this purpose, it just send request to a hookbin endpoint. Any sent messages are then remove from database.

REST server does folowing:

- User CRUD operation
- Location and timezone CRUD operation
- Message CRUD operation (in case need for sending different message)

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

Server and cron is run as two separate processes.

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