# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.delete_all

Bench.create!(
  description: 'Ferry Builidng',
  lat: 37.795270,
  lng: -122.393463,
)

Bench.create!(
  description: 'Golden Gate Bridge',
  lat: 37.814243,
  lng: -122.477616,
)

Bench.create!(
  description: 'Hyatt',
  lat: 37.794101,
  lng: -122.395897,
) 
