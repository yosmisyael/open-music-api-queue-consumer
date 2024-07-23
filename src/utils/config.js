import { config as dotenvConfig } from 'dotenv'
dotenvConfig()

const config = {
  database: {
    name: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD
  },
  rabbitMq: {
    server: process.env.RABBITMQ_SERVER
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD
  }
}

export default config
