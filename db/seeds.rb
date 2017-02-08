require('pry-byebug')

require_relative('../models/artist.rb')
require_relative('../models/album.rb')

Album.delete_all()
Artist.delete_all()

artist1 = Artist.new({'name' => "Kasabian"})
artist1.save()

artist2 = Artist.new({'name' => "Kings of Leon"})
artist2.save()

album1 = Album.new({'title' => "Kasabian", 'genre' => "Indie Rock", 'artist_id' => artist1.id, 'quantity' => 10, 'album_artwork' => ''})
album2 = Album.new({'title' => "Empire", 'genre' => "Indie Rock", 'artist_id' => artist1.id, 'quantity' => 10})
album3 = Album.new({'title' => "West Ryder Pauper Lunatic Asylum", 'genre' => "Indie Rock", 'artist_id' => artist1.id, 'quantity' => 1})
album4 = Album.new({'title' => "Velociraptor!", 'genre' => "Indie Rock", 'artist_id' => artist1.id, 'quantity' => 10})
album5 = Album.new({'title' => "48:13", 'genre' => "Indie Rock", 'artist_id' => artist1.id, 'quantity' => 10})

album1.save()
album2.save()
album3.save()
album4.save()
album5.save()

binding.pry

nil