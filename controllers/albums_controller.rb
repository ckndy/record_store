require( 'sinatra' )
require( 'sinatra/contrib/all' )
require( 'pry-byebug' )

require_relative('../models/album')

#INDEX
get '/albums' do
  @albums = Album.all()
  erb (:index)
end

#NEW
get '/albums/new' do
  @artists = Artist.all()
  erb (:new)
end

#CREATE
post '/albums' do
  @album = Album.new(params)
  @album.save()
  erb (:create)
end

#SHOW
get '/albums/:id' do
  @album = Album.find(params[:id])
  erb (:show)
end

#DELETE
post '/albums/:id/delete' do
  Album.destroy(params[:id])
  redirect to('/albums')
end

#EDIT
get '/albums/:id/edit' do
  @album = Album.find(params[:id])
  erb (:edit)
end

#UPDATE
put '/albums/:id' do
  @album = Album.update(params)
  redirect to("/albums/#{params[:id]}")
end

