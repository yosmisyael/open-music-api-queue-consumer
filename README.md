# Open Music API Queue Consumer
This is the queue consumer of open music api.

## Getting Started
To clone this repository, run:
```shell
git clone  https://github.com/yosmisyael/open-music-api-queue-consumer.git
```
After cloning, install required dependencies using:
```shell
npm run install
```
Configuring `.env` file, this application requires following key:
### SMTP Server
- `SMTP_USER` The username for the SMTP server.
- `SMTP_PASSWORD` The password for the SMTP server.
- `SMTP_HOST` The hostname of SMTP server.
- `SMTP_PORT` The port number of SMTP server.
### Database
- `PGUSER` The username used to authenticate with the PostgreSQL database.
- `PGPASSWORD` The password for the specified PostgreSQL user.
- `PGDATABASE` The name of the PostgreSQL database to connect to.
- `PGHOST` The hostname or IP address of the PostgreSQL database server.
- `PGPORT` The port number used to connect to the PostgreSQL database server.
### Broker
- `RABBITMQ_SERVER` The hostname or IP address of the RabbitMQ server.

To run the applications, use command:
```shell
npm run start
```
## Built With
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
