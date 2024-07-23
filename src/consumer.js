import config from './utils/config.js'
import amqp from 'amqplib'
import PlaylistsService from './services/PlaylistsService.js'
import Listener from './listener.js'
import MailSender from './senders/MailSender.js'

const init = async () => {
  const playlistsService = new PlaylistsService()
  const mailSender = new MailSender()
  const listener = new Listener(playlistsService, mailSender)

  const connection = await amqp.connect(config.rabbitMq.server)
  const channel = await connection.createChannel()

  await channel.assertQueue('export:playlist', {
    durable: true
  })

  channel.consume('export:playlist', listener.listen, { noAck: true })
}

init()
