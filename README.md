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

## Run server

```
$ npm run start
```

## Have fun