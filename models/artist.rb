require_relative('../db/sql_runner')

class Artist

attr_reader :id
attr_accessor :name
 
def initialize(options)
  @id = nil || options['id'].to_i
  @name = options['name']
end

def save()
  sql = "INSERT INTO artist (name) VALUES ('#{@name}') RETURNING *;"
  results = SqlRunner.run(sql)
  @id = results.first()['id'].to_i
end

def self.all()
  sql = "SELECT * FROM artists"
  results = SqlRunner.run( sql )
  return results.map { |hash| Artist.new( hash ) }
end

def self.find( id )
  sql = "SELECT * FROM artists WHERE id=#{id}"
  results = SqlRunner.run( sql )
  return Artist.new( results.first )
end

def self.delete_all
  sql = "DELETE FROM artists"
  SqlRunner.run( sql )
  end

end