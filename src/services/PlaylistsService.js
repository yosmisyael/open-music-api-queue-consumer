import pool from '../config/database.js'

class PlaylistsService {
  constructor () {
    this._pool = pool
  }

  async getPlaylistById (id) {
    const query = {
      text: `SELECT playlists.id,
                          playlists.name,
                          COALESCE(
                                  JSON_AGG(
                                          JSON_BUILD_OBJECT(
                                                  'id', songs.id,
                                                  'title', songs.title,
                                                  'performer', songs.performer
                                          )
                                  ),
                                  '[]' ::json
                          ) AS songs
                   FROM playlists
                            JOIN users ON playlists.owner = users.id
                            LEFT JOIN playlist_songs ON playlists.id = playlist_songs.playlist_id
                            LEFT JOIN songs ON playlist_songs.song_id = songs.id
                   WHERE playlists.id = $1
                   GROUP BY playlists.id, playlists.name`,
      values: [id]
    }

    const { rows } = await this._pool.query(query)

    return rows[0]
  }
}

export default PlaylistsService
