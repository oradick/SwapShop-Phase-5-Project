Listing.destroy_all
User.destroy_all
Comment.destroy_all

puts "🌱 Seeding users..."
User.create(name: "testuser", username: "testuser", email: "testuser@example.com", password: "testpassword")
User.create(name: "testuser2", username: "testuser2", email: "testuser2@example.com", password: "testpassword2")
User.create(name: "testuser3", username: "testuser3", email: "testuser3@example.com", password: "testpassword3")
User.create(name: "testuser4", username: "testuser4", email: "testuser4@example.com", password: "testpassword4")
User.create(name: "testuser5", username: "testuser5", email: "testuser5@example.com", password: "testpassword5")


puts "🌱 Seeding listings..."
Listing.create!(creator_id: 1, recipient_id: 1, image: "https://cdn.shopify.com/s/files/1/0610/2745/1118/products/drinkcupsocks_product2_1_1_grande.jpg?v=1638620751", description: "in-n-out socks", size: "5-10", keywords: "clothes, socks", offer: true)
Listing.create(creator_id: 2, recipient_id: 2, image: "https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/adult-s-classic-black-witch-hat~13654370", description: "witch's hat", size: "one size", keywords: "clothes, hat, costume", offer: true)
Listing.create(creator_id: 1, recipient_id: 2, image: "https://www.wijck.com/upload/producten/1024x1024/candle-newyork160164367612.jpg", description: "WJICK. New York scented candle", size: "80z.", keywords: "candle, home", offer: true)
Listing.create(creator_id: 3, recipient_id: 1, image: "https://images.lululemon.com/is/image/lululemon/LW5DSHS_026375_3", description: "lululemon Align pants, purple", size: "6", keywords: "clothes, athletic, pants", offer: true)
Listing.create(creator_id: 4, recipient_id: 4, image: "https://www.theknot.com/tk-media/images/abcf810b-847d-492a-83f6-80b3d1e4e3e4~rs_768.h", description: "dress for a rehearsal dinner - dark color", size: "8", keywords: "clothes, dress", offer: false)
Listing.create(creator_id: 3, recipient_id: 3,  image: "https://cdn.shopify.com/s/files/1/0342/7431/2325/products/ACS-50LL_1_300x.jpg?v=1600372168", description: "leg lamp", size: "50 inches", keywords: "lamp, home", offer: true)
Listing.create(creator_id: 1, recipient_id: 1, image: "https://www.refinery29.com/images/10305026.png?format=pjpg&auto=webp&resize-filter=lanczos2&quality=50&sharpen=a3%2Cr3%2Ct0&optimize=low&width=960", description: "EVERLANE boxy black t-shirt", size: "M", keywords: "clothes, shirt", offer: true)
Listing.create(creator_id: 3, recipient_id: 3, image: "https://www.si.com/review/wp-content/uploads/2021/10/HTX-HPR-50-Field-Hockey-Stick-SportsIllustrated.jpg", description: "trying out for field hockey! need a stick", size: "N/A", keywords: "athletic", offer: false)

puts "🌱 Seeding comments..."
Comment.create(listing_id: 5, user_id: 1, description: "I have one! only wore it once.")
Comment.create(listing_id: 8, user_id: 2, description: "Omg good luck! i'm not using mine anymore :)")

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
