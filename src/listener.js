class Listener {
  constructor (playlistsService, mailSender) {
    this._playlistsService = playlistsService

    this._mailSender = mailSender

    this.listen = this.listen.bind(this)
  }

  async listen (message) {
    try {
      const { targetEmail, playlistId } = JSON.parse(message.content.toString())

      const playlist = await this._playlistsService.getPlaylistById(playlistId)

      const payload = JSON.stringify({ playlist })

      const result = await this._mailSender.sendEmail(targetEmail, payload)

      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }
}

export default Listener
