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
<div style="display: flex; align-items: center; gap: 12px">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" width="70"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width="90" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original-wordmark.svg" width="100"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original-wordmark.svg" width="100"/>
</div>