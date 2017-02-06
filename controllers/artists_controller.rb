require ('sinatra')
require ('sinatra/contrib/all')
require_relative('../models/artist.rb')

#index
get '/artists' do
  @artists = Artist.all()
  erb(:"artists/index")
end

#new
get '/artists/new' do
  erb(:"artists/new")
end

#create
post '/artists' do
  @artist = Artist.new(params)
  @artist.save()
  erb(:"artists/create")
end

#show
get '/artists/:id' do
  @artist = Artist.find(params[:id])
  erb(:"artists/show")
end

#edit
get '/artists/:id/edit' do
  @artist = Artist.find(params[:id])
  erb(:"artists/edit")
end

#update
put '/artists/:id' do
  @artist = Artist.update(params)
  redirect to("/artists/#{params[:id]}")
end

#delete
delete '/artists/:id' do
  Artist.destroy(params[:id])
  redirect to("/artists")
end