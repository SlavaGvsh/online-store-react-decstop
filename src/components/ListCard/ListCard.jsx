const products = [
  {
    id: 1,
    name: "Modern Sofa",
    category: "Sofa",
    description:
      "A comfortable modern sofa with a sleek design, perfect for any living room.",
    price: 499.99,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    dimensions: {
      width: "200 cm",
      height: "85 cm",
      depth: "90 cm",
    },
    materials: ["Fabric", "Wood", "Foam"],
    colorOptions: ["Gray", "Blue", "Green"],
  },
  {
    id: 2,
    name: "Dining Table Set",
    category: "Dining",
    description:
      "A stylish dining table set with four matching chairs, made of solid wood.",
    price: 799.99,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    dimensions: {
      width: "150 cm",
      height: "75 cm",
      depth: "90 cm",
    },
    materials: ["Wood", "Metal"],
    colorOptions: ["Walnut", "Black"],
  },
  {
    id: 3,
    name: "Office Chair",
    category: "chairs",
    description:
      "Ergonomic office chair with adjustable height and lumbar support.",
    price: 199.99,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    inStock: false,
    dimensions: {
      width: "65 cm",
      height: "110 cm",
      depth: "60 cm",
    },
    materials: ["Mesh", "Metal", "Plastic"],
    colorOptions: ["Black", "White"],
  },
  {
    id: 4,
    name: "Queen Bed Frame",
    category: "tables",
    description:
      "Elegant queen-size bed frame with a wooden headboard and sturdy design.",
    price: 599.99,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    dimensions: {
      width: "160 cm",
      height: "100 cm",
      depth: "200 cm",
    },
    materials: ["Wood", "Metal"],
    colorOptions: ["Oak", "White", "Black"],
  },
  {
    id: 5,
    name: "Bookshelf",
    category: "light",
    description:
      "A tall, 5-shelf bookshelf perfect for displaying books and decor.",
    price: 149.99,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    dimensions: {
      width: "80 cm",
      height: "180 cm",
      depth: "30 cm",
    },
    materials: ["Wood", "MDF"],
    colorOptions: ["White", "Espresso", "Gray"],
  },
];

export { products };
