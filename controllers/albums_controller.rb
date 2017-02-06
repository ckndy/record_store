require ('sinatra')
require ('sinatra/contrib/all')
require_relative('../models/albums.rb')

#index
get '/albums' do
  @albums = Album.all()
  erb(:"albums/index")
end

#new
get '/albums/new' do
  @artists = Artist.all()
  erb(:"albums/new")
end

#create
post '/albums' do
  @album = Album.new(params)
  @album.save()
  erb(:"albums/create")
end

#show
get '/albums/:id' do
  @album = Album.find(params[:id])
  erb(:"albums/show")
end

#edit
get '/albums/:id/edit' do
  @album = Album.find(params[:id])
  erb(:"albums/edit")
end

#update
put '/albums/:id' do
  @album = Album.update(params)
  redirect to("/albums/#{params[:id]}")
end

#delete
delete '/albums/:id' do
  Album.destroy(params[:id])
  redirect to("/albums")
end