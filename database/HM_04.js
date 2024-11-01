

// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("homework04");

// Create a new document in the collection.
// db.getCollection("drink").insertMany([
//   {
//     name: "Glenfiddich 18 Years",
//     strength: 40,
//     volume: 700,
//     category: "Whiskey",
//     price: 85,
//   },
//   {
//     name: "Tanqueray No. Ten Gin",
//     strength: 43.7,
//     volume: 700,
//     category: "Gin",
//     price: 28,
//   },
//   {
//     name: "Don Julio Blanco",
//     strength: 38,
//     volume: 750,
//     category: "Tequila",
//     price: 42,
//   },
//   {
//     name: "Baileys Irish Cream",
//     strength: 17,
//     volume: 1000,
//     category: "Liqueur",
//     price: 15,
//   },
//   {
//     name: "Bacardi Superior",
//     strength: 40,
//     volume: 1000,
//     category: "Rum",
//     price: 13,
//   },
//   {
//     name: "Moët & Chandon Brut Impérial",
//     strength: 12,
//     volume: 750,
//     category: "Champagne",
//     price: 35,
//   },
// ]);

/*
Выведите самый дорогой напиток
Выведите топ три самых дешевых напитка
Выведите название самого крепкого напитка
*/

//выводим все документы с сортировкой по убыванию
// db.drink.find().sort({price: -1});

// 1. Выведите самый дорогой напиток
// db.drink.find().sort({price: -1}).limit(1);

//2. Выведите топ три самых дешевых напитка
// db.drink.find().sort({price: 1}).limit(3);

//3. Выведите название самого крепкого напитка
db.drink.find({}, {name: 1, _id: 0}).sort({strength: -1}).limit(1);
