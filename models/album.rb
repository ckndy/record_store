require_relative('../db/sql_runner')

class Album

attr_reader :id :artist_id
attr_accessor :title, :genre, :quantity

def initialize( options )
  @id = nil || options['id'].to_i
  @title = options['title']
  @genre = options['genre']
  @quantity = options['quantity'].to_i
  @artist_id = options[artist_id].to_i

def save()
  sql = "INSERT INTO albums (title) VALUES ('#{@title}') RETURNING *;"
  results = SqlRunner.run(sql)
  @id = results.first()['id'].to_i
end




end
  

def save()
end

def artist()
end

def self.all()
end

def self.find()
end

def self.update()
end

def self.destroy()
end

end