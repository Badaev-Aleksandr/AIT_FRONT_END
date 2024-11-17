use("42_lesson_5");

/* db.employee.insertMany([
   { name: 'Tom', salary: 3500, costs: 3400 },
   { name: 'Mary', salary: 3000, costs: 3500 }
]); */

//сравнивает значения свойств - $expr
/* db.employee.find({$expr: {$lt: ['$salary', '$cost']}}); */

//UPDATE
//Заполняем коллекция данными
/* db.animal.insertMany([
   {kind: 'Cat', weight: 5, name:'Barsik', predatory:true},
   {kind: 'Dog', weight: 10, name:'Bob', predatory:true},
   {kind: 'Penguin', weight: 20, name:'Kovalsky', predatory:true},
   {kind: 'Panda', weight: 110, name:'Po', predatory:false},
   {kind: 'Horse', weight: 500, name:'Spirit', predatory:true},
   {kind: 'Horse', weight: 600, name:'Marta', predatory:true}
]); */

//Методы для обновления - updateOne() и updateMany()
//Оператор $set
//Обновление нескольких документов

/* db.animal.updateMany({kind:'Horse'}, {$set: {predatory: false}}); */

//изменение всех документов
/* db.animal.updateMany({}, {$set: {predatory: false}}); */

//обновление одного документа (первого найденного)
//db.animal.updateOne({ kind: "Horse" }, { $set: { weight: 700 } });

//Добавить новое свойство food (массив ['meat', 'fish']) к животным, значение свойства kind которых
//равно 'Cat' или "Dog" или "Penguin"
/*  db.animal.updateMany(
   { kind: { $in: ["Cat", "Dog", "Penguin"] } },
   { $set: { food: ["meat", "fish"] } }
 ); */

//Исправить неверные значение свойства predatory
/* db.animal.updateMany({kind: {$nin: ['Panda', 'Horse']}}, {$set:{predatory: true}}); */

//Оператор - $inc incremence
// увеличивает и уменьшает значение на указанную величину
/* db.animal.updateMany({}, {$inc: {weight:2}}); */
/* db.animal.updateMany({kind:'Panda'}, {$inc: {weight:-5}}); */

//Оператор изменения названия свойства - $rename
/* db.animal.updateMany({}, {$rename: {name: 'animal_name'}}); */

//Оператор добавления нового элемента в массив значений
/* db.animal.updateOne({kind: 'Cat'}, {$push: {food: 'mouse'}}); */
//если свойства нет такого то создаст свойство и будет массивом и запишет туда mouse как элемент массива
/* db.animal.updateOne({kind: 'Panda'}, {$push: {food: 'mouse'}}); */

// Оператор удаления свойства - $unset
/* db.animal.updateOne({kind: 'Panda'}, {$unset: {food: ''}}); */

//UPDATE
/* db.animal.insertMany([
   {kind: 'Dino', weight:1500, animal_name: 'Rex', predatory: true},
   {kind: 'Dino', weight:1600, animal_name: 'TRex', predatory: true}
]);
 */
//удаляем превого динозавра - deleteOne
/* db.animal.deleteOne({kind: 'Dino'}); */

//Удаление всех динозавров - deleteMany
/* db.animal.deleteMany({kind: "Dino"}); */

//AGGREGATION (aggregate())
// $match     фильтрация
// $sort    сортировка (-1 по убыванию, 1 по возрастанию)
// $limit     лимитирование
// $skip    пропустить (документы)
// $project     проекция (вывод указанных свойств)
// $count     возвращает ко-во документов
// $sample    получить произвольные документы
// $lookup    объединение коллекций
// $group     группировка

//Оператор $match
//Вывод всех хищных животных
// db.animal.aggregate([
//     {$match: {predatory: true}}
//  ]);

//Вывод всех хищных животных и сортировка ($sort) по убыванию веса
// db.animal.aggregate([
//   { $match: { predatory: true } },
//   { $sort: { weight: -1 } },
// ]);

//Вывести второе по тяжести хищное животное
// db.animal.aggregate([
//   { $match: { predatory: true } },
//   { $sort: { weight: -1 } },
//   { $skip: 1 },
//   { $limit: 1 },
// ]);

//Вывод всех свойств, кроме имени, животного, у которого вес равен 7кг
// db.animal.aggregate([
//   { $match: { weight: 7 } },
//   { $project: { animal_name: 0 } },
// ]);

//Вывод всех свойств, только имя, животного, у которого вес равен 7кг
// db.animal.aggregate([
//     { $match: { weight: 7 } },
//     { $project: { animal_name: 1, _id: 0 } },
//   ]);

//Получить количество нехищных животных
// db.animal.aggregate([
//   { $match: { predatory: false } },
//   { $count: "number_of_non_predatory" },
// ]);

//Получить случайное животное весом больше 15кг
// db.animal.aggregate([
//   { $match: { weight: { $gt: 15 } } },
//   { $sample: { size: 1 } },
// ]);

//Объединение коллекций
// db.post.insertOne({
//   author_name: "Tom",
//   likes: 10,
//   text: "Hi, I am glad to be in LinkedIn",
// });

// db.comment.insertMany([
//   {
//     email: "user1@gmail.com",
//     message: "Hi, Tom",
//     post_id: ObjectId("6739f64b69e91ad67916d81a"),
//   },
//   {
//     email: "user2@gmail.com",
//     message: "Hello",
//     post_id: ObjectId("6739f64b69e91ad67916d81a"),
//   },
// ]);

//Соединение коллекций - $lookup
// db.comment.aggregate([
//   {
//     $lookup: {
//       from: "post", // в какую  коллекцию мы подсматриваем
//       localField: "post_id", //название связующего поля в локальной колеккции
//       foreignField: "_id", //название поле из внешней коллекции
//       as: "post_info", //псевдоним
//     },
//   },
// ]);

//Группировка данных
// db.kids.insertMany([
//   { name: "Jon", age: 4, gender: "boy" },
//   { name: "Anna", age: 6, gender: "girl" },
//   { name: "Bob", age: 5, gender: "boy" },
//   { name: "Mary", age: 6, gender: "girl" },
//   { name: "Tom", age: 6, gender: "boy" },
// ]);

// db.kids.aggregate([
//   { $group: { _id: "$gender", averageAge: { $avg: "$age" } } },
// ]);

db.kids.aggregate([{ $group: { _id: "$gender", min_age: { $min: "$age" } } }]);
