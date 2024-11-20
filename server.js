import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // För JSON-parsing

// Mockad products-data
const products = [
  {
    id: "1",
    name: "Christmas Tree",
    category: "Decorations",
    description:
      "A lush green artificial Christmas tree, 7 feet tall, perfect for holiday decorations.",
    price: 799,
    stock: 20,
    imageUrl: "christmas_tree.jpg",
  },
  {
    id: "2",
    name: "Santa Claus Figure",
    category: "Decorations",
    description:
      "A charming Santa Claus figure holding a bag of presents, 2 feet tall.",
    price: 249,
    stock: 50,
    imageUrl: "santa_claus.jpg",
  },
  {
    id: "3",
    name: "LED String Lights",
    category: "Lighting",
    description:
      "A 20-meter string of warm white LED lights, perfect for indoor and outdoor use.",
    price: 149,
    stock: 100,
    imageUrl: "led_lights.jpg",
  },
  {
    id: "4",
    name: "Christmas Wreath",
    category: "Decorations",
    description:
      "A festive Christmas wreath made with pinecones and red berries.",
    price: 199,
    stock: 30,
    imageUrl: "christmas_wreath.jpg",
  },
  {
    id: "5",
    name: "Gingerbread House Kit",
    category: "Food & Treats",
    description:
      "A complete kit to build and decorate your own gingerbread house.",
    price: 99,
    stock: 40,
    imageUrl: "gingerbread_house.jpg",
  },
  {
    id: "6",
    name: "Reindeer Plush Toy",
    category: "Toys",
    description: "A soft and cuddly reindeer plush toy for kids, 30 cm tall.",
    price: 129,
    stock: 25,
    imageUrl: "reindeer_plush.jpg",
  },
  {
    id: "7",
    name: "Christmas Candles",
    category: "Decorations",
    description:
      "Set of 3 scented candles with holiday fragrances: cinnamon, pine, and vanilla.",
    price: 89,
    stock: 60,
    imageUrl: "christmas_candles.jpg",
  },
  {
    id: "8",
    name: "Snowflake Ornaments",
    category: "Decorations",
    description:
      "A pack of 12 glittery snowflake ornaments for decorating your tree.",
    price: 59,
    stock: 70,
    imageUrl: "snowflake_ornaments.jpg",
  },
  {
    id: "9",
    name: "Advent Calendar",
    category: "Miscellaneous",
    description: "A traditional advent calendar with 24 chocolate surprises.",
    price: 49,
    stock: 35,
    imageUrl: "advent_calendar.jpg",
  },
  {
    id: "10",
    name: "Holiday Mug",
    category: "Kitchen",
    description: "A ceramic holiday-themed mug with a reindeer design.",
    price: 69,
    stock: 80,
    imageUrl: "holiday_mug.jpg",
  },
  // Lägg till fler produkter här vid behov...
];

// API-rutter

// Hämta alla produkter
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Hämta en produkt baserat på ID
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Server körs på http://localhost:${PORT}`);
});
