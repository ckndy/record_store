require_relative('../db/sql_runner')

class Album

attr_reader :id :title, :genre, :quantity, :artist_id

def initialize( options )
  @id = nil || options['id'].to_i
  @title = options['title']
  @genre = options['genre']
  @quantity = options['quantity'].to_i
  @artist_id = options[artist_id]

def save()
  sql = "INSERT INTO albums (title, artist_id) VALUES ('#{@title}') RETURNING *;"
  results = SqlRunner.run(sql)
  @id = results.first()['id'].to_i
end

def artist()
  sql = "SELECT * FROM artists WHERE id = #{ @artist_id }"
  artist = SqlRunner.run( sql )
  result = Artist.new( artist.first )
  return result
end

def self.all()
  sql = "SELECT * FROM albums"
  results = SqlRunner.run( sql )
  return results.map { |hash| Album.new( hash ) }
end

def self.find( id )
  sql = "SELECT * FROM albums WHERE id=#{id}"
  results = SqlRunner.run( sql )
  return Artist.new( results.first )
end

def self.update( options )
   sql = "UPDATE albums SET name='#{options['name']}' WHERE id='#{options['id']}'"
   SqlRunner.run( sql )
end

def self.destroy( id )
    sql = "DELETE FROM albums WHERE id=#{id}"
    SqlRunner.run( sql )
  end
end