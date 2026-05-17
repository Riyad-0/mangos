import { exit } from "process";
import { MenuItem } from "./menuItem";

const menuSections = [
  {
    heading: "Appetizers",
    items: [
      "Crunchy Fried Shrimp",
      "Boneless Wings",
      "Spinach Artichoke Dip",
    ],
  },
  {
    heading: "Steaks",
    items: [
      "Ribeye",
      "Filet Mignon",
      "New York Strip",
      "Sirloin",
    ],
  },
];

const menuItems = [
  { name: "Crunchy Fried Shrimp", image: "crunchy-fried-shrimp.jpg", price: 999 },
  { name: "Boneless Wings", image: "boneless-wings.jpg", price: 1099 },
  { name: "Spinach Artichoke Dip", image: "spinach-artichoke-dip.jpg", price: 799 },
  { name: "Ribeye", image: "ribeye.jpg", price: 2699 },
  { name: "Filet Mignon", image: "filet-mignon.avif", price: 2499 },
  { name: "New York Strip", image: "new-york-strip.jpg", price: 2499 },
  { name: "Sirloin", image: "sirloin.webp", price: 2199 },
];

export async function fillMenu() {
  for (const item of menuItems) {
    await MenuItem.replaceOne(
      { name: item.name },
      item,
      { upsert: true },
    );
  }
}

export async function getMenu() {
  return await Promise.all(menuSections.map(async section => {
    return {
      ...section,
      items: await Promise.all(section.items.map(async name => {
        const dbItem = await MenuItem.findOne({ name });
        if (dbItem === null) {
          console.error("Missing menu item " + name);
          exit();
        }
        console.log("name:", name, "_id:", dbItem._id, "price:", dbItem.price);
        return {
          _id: dbItem._id,
          name: dbItem.name,
          image: dbItem.image,
          price: dbItem.price,
        };
      }))
    };
  }));
}