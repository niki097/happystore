const products = [
  {
    _id: "1",
    name: "Airpods Max",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692923780378",
    description: "Immerse yourself in a world of sound with the Airpods Max. Active Noise Cancellation blocks out unwanted noise, while the custom-designed drivers deliver rich, detailed audio. Enjoy up to 20 hours of listening time on a single charge, and control your music, calls, and Siri with the convenient touch controls.",
    brand: "Apple",
    category: "Electronics",
    price: "46,799.99", // Converted to Indian Rupees
    countInStock: 5,
    rating: 4.8,
    numReviews: 456,
  },
  {
    _id: "2",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-1-202309_GEO_IN?wid=364&hei=333&fmt=jpeg&qlt=95&.v=1693846567708",
    description: "Experience industry-leading noise cancellation with the Sony WH-1000XM5. These headphones feature a new design, enhanced sound quality, and even better noise cancellation than their predecessors. Enjoy up to 30 hours of battery life and a comfortable fit that's perfect for long listening sessions.",
    brand: "Sony",
    category: "Electronics",
    price: "33,999.99", // Converted to Indian Rupees
    countInStock: 0,
    rating: 4.7,
    numReviews: 321,
  },
  {
    _id: "3",
    name: "Google Pixel 7 Pro",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-se-digitalmat-gallery-1-202309?wid=364&hei=333&fmt=png-alpha&.v=1693271766625",
    description: "Capture stunning photos and videos with the Google Pixel 7 Pro. This phone features a triple rear camera system with a new 48MP main sensor, 12MP ultrawide lens, and 48MP telephoto lens. It also has a powerful Google Tensor chip, a long-lasting battery, and a gorgeous 6.7-inch AMOLED display.",
    brand: "Google",
    category: "Electronics",
    price: "73,699.99", // Converted to Indian Rupees
    countInStock: 3,
    rating: 4.9,
    numReviews: 254,
  },
  {
    _id: "4",
    name: "Samsung Galaxy Z Fold4 5G",
    image: "https://lh3.googleusercontent.com/spp/AE_ITi15BQw9BoL5MwqqdHolx5aH7wzoiExJLXKoNJ9H7p-pE6yOtXWUa36DuEaTJ6z_z8LZxuwGTjuYFAcIiiA62EglP9nlaiVInp8cYEsw1HvlvbRr1HlR2McEuDwfEe7HO_hq83iaYIIiiWt4wByyJ1ucHaz55VKkAaYsQfMnmYYsBgBPoxWUIqOZFJ9e5zo64NZmNApG=s512-rw-pd-pc0x00ffffff",
    description: "Unfold a new world of possibilities with the Samsung Galaxy Z Fold4 5G. This foldable phone features a large 7.6-inch main display, a 6.1-inch cover display, and a powerful Snapdragon 8+ Gen 1 processor. It also has a triple rear camera system, a long-lasting battery, and support for S Pen.",
    brand: "Samsung",
    category: "Electronics",
    price: "1,43,999.99", // Converted to Indian Rupees
    countInStock: 2,
    rating: 4.5,
    numReviews: 187,
  },
  {
    _id: "5",
    name: "LEGO Star Wars Ultimate Millennium Falcon",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-s9-digitalmat-gallery-1-202309_GEO_IN?wid=364&hei=333&fmt=png-alpha&.v=1693846399313",
    description: "Build the ultimate Millennium Falcon with this incredible LEGO set. This highly detailed model features over 7,500 pieces, a rotating top and bottom gun turrets, a detachable cockpit, and a complete interior. It also includes minifigures of Han Solo, Chewbacca, Leia, C-3PO, and more.",
    brand: "LEGO",
    category: "Toys",
    price: "5,849.99", // Converted to Indian Rupees
    countInStock: 2,
    rating: 4.5,
    numReviews: 187,
  },
  {
    _id: "6",
    name: "Instant Pot Duo Crisp + Air Fryer",
    image: "https://rukminim2.flixcart.com/image/416/416/ksnjp8w0/mobile/w/u/8/galaxy-z-flip3-5g-sm-f711bzeeinu-samsung-original-imag662adrayy6cg.jpeg?q=70",
    description: "Cook your favorite meals with ease and versatility with the Instant Pot Duo Crisp + Air Fryer. This multi-cooker combines pressure cooking, slow cooking, air frying, and more in one appliance. It features a large 8-quart cooking pot, an easy-to-use touch screen control panel, and a variety of built-in cooking programs.",
    brand: "Instant Pot",
    category: "Kitchen Appliances",
    price: "11,249.99", // Converted to Indian Rupees
    countInStock: 7,
    rating: 4.6,
    numReviews: 135,
  },
  {
    _id: "7",
    name: "Roku Streaming Stick 4K+",
    image: "https://rukminim2.flixcart.com/image/416/416/ksnjp8w0/mobile/r/y/z/galaxy-z-flip3-5g-sm-f711bzkainu-samsung-original-imag662aabdhtmfk.jpeg?q=70",
    description: "Stream your favorite movies, TV shows, sports, and more in stunning 4K with the Roku Streaming Stick 4K+. This compact device plugs into your TV's HDMI port and gives you access to thousands of channels and apps, including Netflix, Hulu, Disney+, HBO Max, and more. It also features a voice remote with Google Assistant, so you can control your streaming with your voice.",
    brand: "Roku",
    category: "Electronics",
    price: "5,849.99", // Converted to Indian Rupees
    countInStock: 12,
    rating: 4.3,
    numReviews: 987,
  },
  {
    _id: "8",
    name: "Roku Streaming Stick 4K+",
    image: "https://rukminim2.flixcart.com/image/416/416/ksnjp8w0/mobile/r/y/z/galaxy-z-flip3-5g-sm-f711bzkainu-samsung-original-imag662aabdhtmfk.jpeg?q=70",
    description: "Stream your favorite movies, TV shows, sports, and more in stunning 4K with the Roku Streaming Stick 4K+. This compact device plugs into your TV's HDMI port and gives you access to thousands of channels and apps, including Netflix, Hulu, Disney+, HBO Max, and more. It also features a voice remote with Google Assistant, so you can control your streaming with your voice.",
    brand: "Roku",
    category: "Electronics",
    price: "5,849.99", // Converted to Indian Rupees
    countInStock: 0,
    rating: 4.3,
    numReviews: 987,
  }
];

export default products;
