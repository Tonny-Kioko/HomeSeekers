# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


Property.create!({
  name: 'Mombasa Beach Front',
  headline: 'Beach Front',
  description: 'A beach Front property in Mombasa',
  address_1: 'Mombasa123',
  address_2: 'Mombasa Area',
  city: 'Mombasa City',
  state: 'Mombasa Area',
  country: 'Kenya',
})

Property.create!({
  name: 'Mombasa Beach Front2',
  headline: 'Beach Front2',
  description: 'A beach Front property in Mombasa2',
  address_1: 'Mombasa123456',
  address_2: 'Mombasa Area2',
  city: 'Mombasa City',
  state: 'Mombasa Area',
  country: 'Kenya',
})

Property.create!({
  name: 'Mombasa Beach Front3',
  headline: 'Beach Front3',
  description: 'A beach Front property in Mombasa3',
  address_1: 'Mombasa123789',
  address_2: 'Mombasa Area3',
  city: 'Mombasa City',
  state: 'Mombasa Area',
  country: 'Kenya',
})