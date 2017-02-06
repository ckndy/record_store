require_relative('../models/artist.rb')
require_relative('../models/album.rb')
require('pry-byebug')

Album.delete_all
Artist.delete_all

artist1 = Artist.new({'name' => "Kasabian"})
artist2 = Artist.new({'name' => "Kings of Leon"})

artist1.save()
artist2.save()

album1 = Album.new({'title' => "Kasabian", 'genre' => "Indie Rock", 'artist_id' => artist1.id, 'quantity' => 10})
album2 = Album.new({'title' => "Empire", 'genre' => "Indie Rock", 'artist_id' => artist1.id, 'quantity' => 10})
album3 = Album.new({'title' => "West Ryder Pauper Lunatic Asylum", 'genre' => "Indie Rock", 'artist_id' => artist1.id, 'quantity' => 0})
album4 = Album.new({ 'title' => "Velociraptor!", 'genre' => "Indie Rock", 'artist_id' => artist1.id, 'quantity' => 10})
album5 = Album.new({ 'title' => "48:13", 'genre' => "Indie Rock", 'artist_id' => artist1.id, 'quantity' => 10})
album6 = Album.new({'title' => "Youth & Young Manhood", 'genre' => "Alternative Rock", 'artist_id' => artist1.id, 'quantity' => 10})
album7 = Album.new({'title' => "Aha Shake Heartbreak", 'genre' => "Alternative Rock", 'artist_id' => artist1.id, 'quantity' => 10})
album8 = Album.new({'title' => "Because of the Times", 'genre' => "Alternative Rock", 'artist_id' => artist1.id, 'quantity' => 10})
album9 = Album.new({'title' => "Only by the Night", 'genre' => "Alternative Rock", 'artist_id' => artist1.id, 'quantity' => 10})
album10 = Album.new({'title' => "Come Around Sundown", 'genre' => "Alternative Rock", 'artist_id' => artist1.id, 'quantity' => 10})
album11 = Album.new({'title' => "Mechanical Bull", 'genre' => "Alternative Rock", 'artist_id' => artist1.id, 'quantity' => 10})
album12 = Album.new({'title' => "WALLS", 'genre' => "Alternative Rock", 'artist_id' => artist1.id, 'quantity' => 10})

album1.save()
album2.save()
album3.save()
album4.save()
album5.save()
album6.save()
album7.save()
album8.save()
album9.save()
album10.save()
album11.save()
album12.save()

binding.pry

nil