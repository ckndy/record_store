require( 'sinatra' )
require( 'sinatra/contrib/all' )
require( 'pry-byebug' )

require_relative('../models/artist')

#INDEX
get '/artists' do
  @artists = Artist.all()
  erb (:"artists/index")
end

#NEW
get '/artists/new' do
  erb (:new)
end

#CREATE
post '/artists' do
  @artist = Artist.new(params)
  @artist.save
  erb (:create)
end

#SHOW
get '/artists/:id' do
  @artist = Artist.find(params[:id])
  erb (:show)
end

#DELETE
post '/artists/:id/delete' do
  Artist.destroy(params[:id])
  redirect to('/artists')
end

#EDIT
get '/artists/:id/edit' do
  @artist = Artist.find(params[:id])
  erb (:edit)
end

#UPDATE
post '/artists/:id' do 
@artist = Artist.update(params)
redirect to ("/artists/#{params[:id]}")
end

