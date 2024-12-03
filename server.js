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
    imageUrl:
      "https://www.byggmax.se/media/catalog/product/cache/ae5103aa9f5dad6ebc086c6b20f2dea3/1/5/152251_ny_2.png",
  },
  {
    id: "2",
    name: "Santa Claus Figure",
    category: "Decorations",
    description:
      "A charming Santa Claus figure holding a bag of presents, 2 feet tall.",
    price: 249,
    stock: 50,
    imageUrl:
      "https://cdn11.bigcommerce.com/s-km30nn7y/images/stencil/1280x1280/products/293745/783491/northlight_e76475_styled_01__86345.1728041984.jpg?c=3",
  },
  {
    id: "3",
    name: "LED String Lights",
    category: "Lighting",
    description:
      "A 20-meter string of warm white LED lights, perfect for indoor and outdoor use.",
    price: 149,
    stock: 100,
    imageUrl: "https://m.media-amazon.com/images/I/81ZBmX5REWL._AC_SX679_.jpg",
  },
  {
    id: "4",
    name: "Christmas Wreath",
    category: "Decorations",
    description:
      "A festive Christmas wreath made with pinecones and red berries.",
    price: 199,
    stock: 30,
    imageUrl:
      "https://i.etsystatic.com/14407900/r/il/5a3cea/5435029851/il_794xN.5435029851_q16u.jpg",
  },
  {
    id: "5",
    name: "Gingerbread House Kit",
    category: "Food & Treats",
    description:
      "A complete kit to build and decorate your own gingerbread house.",
    price: 99,
    stock: 40,
    imageUrl:
      "https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-australia/recipes/2000-x-1125/mccormick/gingerbread_house.jpg?rev=8be26d9758dc477785721184ed9593f8&vd=20200615T140312Z&extension=webp&hash=0D124D33249D517CDCB988074253AF95",
  },
  {
    id: "6",
    name: "Reindeer Plush Toy",
    category: "Toys",
    description: "A soft and cuddly reindeer plush toy for kids, 30 cm tall.",
    price: 129,
    stock: 25,
    imageUrl:
      "https://m.media-amazon.com/images/I/7150HecJ7JL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "7",
    name: "Christmas Candles",
    category: "Decorations",
    description:
      "Set of 3 scented candles with holiday fragrances: cinnamon, pine, and vanilla.",
    price: 89,
    stock: 60,
    imageUrl:
      "https://images.bauerhosting.com/affiliates/sites/12/2018/12/Best-Christmas-candles.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
  },
  {
    id: "8",
    name: "Snowflake Ornaments",
    category: "Decorations",
    description:
      "A pack of 12 glittery snowflake ornaments for decorating your tree.",
    price: 59,
    stock: 70,
    imageUrl:
      "https://m.media-amazon.com/images/I/713KfifLrrL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: "9",
    name: "Advent Calendar",
    category: "Miscellaneous",
    description: "A traditional advent calendar with 24 chocolate surprises.",
    price: 49,
    stock: 35,
    imageUrl:
      "https://media.diy.com/is/image/KingfisherDigital/24-days-luxury-chocolate-advent-calendar~5034279001098_01c_MP?$MOB_PREV$&$width=768&$height=768",
  },
  {
    id: "10",
    name: "Holiday Mug",
    category: "Kitchen",
    description: "A ceramic holiday-themed mug with a reindeer design.",
    price: 69,
    stock: 80,
    imageUrl:
      "https://image-resizing.booztcdn.com/lexington-company-home/lch12448012_cwhitegreen.webp?has_grey=1&has_webp=1&dpr=2.5&size=w400",
  },
  {
    id: "11",
    name: "Christmas Stockings",
    category: "Decorations",
    description: "Set of 2 red and white Christmas stockings for gifts.",
    price: 99,
    stock: 50,
    imageUrl: "https://m.media-amazon.com/images/I/91xzWVFP-4L.jpg",
  },
  {
    id: "12",
    name: "Mini Snow Globe",
    category: "Decorations",
    description: "A small snow globe with a festive holiday scene inside.",
    price: 129,
    stock: 40,
    imageUrl:
      "https://source.widen.net/content/unemxmazrw/webp/FGC-1841001-3_O-Christmas-Tree-Musical-Snow-Globe_SSC-10.webp?position=c&color=ffffffff&quality=100&u=7mzq6p",
  },
  {
    id: "13",
    name: "Hot Chocolate Mix",
    category: "Food & Treats",
    description: "A rich and creamy hot chocolate mix for cold winter days.",
    price: 79,
    stock: 100,
    imageUrl:
      "https://marleysmenu.com/wp-content/uploads/2022/11/Hot-Chocolate-Mix-Recipe-Card-Image.jpg",
  },
  {
    id: "14",
    name: "Christmas Cookie Cutter Set",
    category: "Kitchen",
    description: "A set of 6 stainless steel Christmas-themed cookie cutters.",
    price: 89,
    stock: 60,
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/christmas-cookie-cutters-williams-sonoma-1634157861.jpeg?crop=1xw:0.75xh;center,top&resize=1200:*",
  },
  {
    id: "15",
    name: "Elf Hat",
    category: "Accessories",
    description: "A playful elf hat with a jingle bell on top.",
    price: 59,
    stock: 70,
    imageUrl:
      "https://d1y34xk3jyir0c.cloudfront.net/wp-content/uploads/2023/10/Elf-Nisse-Hatt-med-Oron.jpg",
  },
  {
    id: "16",
    name: "Snowman Building Kit",
    category: "Outdoor",
    description:
      "Includes a carrot nose, buttons, scarf, and a hat for building a snowman.",
    price: 149,
    stock: 30,
    imageUrl: "https://m.media-amazon.com/images/I/71WjFIrcd-L.jpg",
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
