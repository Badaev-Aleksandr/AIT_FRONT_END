use("homework_05");
// db.cars.insertMany([
//   { brand: "BMW", price: 20000, model: "X5", year: 2015, horsepower: 300 },
//   { brand: "BMW", price: 25000, model: "X3", year: 2018, horsepower: 250 },
//   {
//     brand: "Toyota",
//     price: 18000,
//     model: "Camry",
//     year: 2015,
//     horsepower: 200,
//   },
//   {
//     brand: "Toyota",
//     price: 22000,
//     model: "Corolla",
//     year: 2020,
//     horsepower: 180,
//   },
//   { brand: "Honda", price: 15000, model: "Civic", year: 2015, horsepower: 150 },
//   {
//     brand: "Honda",
//     price: 21000,
//     model: "Accord",
//     year: 2019,
//     horsepower: 190,
//   },
//   { brand: "Ford", price: 17000, model: "Focus", year: 2018, horsepower: 160 },
//   {
//     brand: "Ford",
//     price: 30000,
//     model: "Mustang",
//     year: 2021,
//     horsepower: 450,
//   },
//   { brand: "Audi", price: 28000, model: "A4", year: 2020, horsepower: 240 },
//   { brand: "Audi", price: 35000, model: "Q7", year: 2018, horsepower: 350 },
// ]);

// 1. Выведите среднюю цену по брендам (задание на использование group).
// db.cars.aggregate([
//   { $group: { _id: "$brand", average_price: { $avg: "$price" } } },
// ]);

// 2.Выведите среднюю цену по годам.
// db.cars.aggregate([
//   { $group: { _id: "$year", average_price: { $avg: "$price" } } },
// ]);

// 3.Выведите максимальную мощность по брендам.
// db.cars.aggregate([
//   { $group: { _id: "$brand", max_horsepower: { $max: "$horsepower" } } },
// ]);

// 4.Выведите 3 самых дешевые машины.
// db.cars.aggregate([
//   { $sort: { price: 1 } },
//   { $limit: 3 },
//   { $project: { _id: 0 } },
// ]);

// 5.Выведите 3 самых дорогие машины определенного бренда.
// db.cars.aggregate([
//   { $match: { brand: "Audi" } },
//   { $sort: { price: -1 } },
//   { $limit: 3 },
//   { $project: { _id: 0 } },
// ]);

// db.cars.find({ brand: "BMW" }, { _id: 0 }).sort({ price: -1 }).limit(3);

// 6.Выведите случайный автомобиль марки бмв (или другой на ваше усмотрение).
db.cars.aggregate([
  { $match: { brand: "BMW" } },
  { $sample: { size: 1 } },
  { $project: { _id: 0 } },
]);
