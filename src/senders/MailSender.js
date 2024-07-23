import config from '../utils/config.js'
import nodemailer from 'nodemailer'

class MailSender {
  constructor () {
    this._transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      auth: {
        user: config.smtp.user,
        pass: config.smtp.password
      }
    })
  }

  sendEmail (targetEmail, content) {
    const message = {
      from: 'Open Music',
      to: targetEmail,
      subject: 'Export Playlist',
      text: 'Attached export playlist result.',
      attachments: [
        {
          filename: 'playlist.json',
          content
        }
      ]
    }

    return this._transporter.sendMail(message)
  }
}

export default MailSender
