//Создание (подключение) бд
use("42_2_lesson4_bd");

//CREATE
//Создание(использование) колекции и добавление документа
// db.user.insertOne({name: 'Olga'});
// db.user.insertOne({name: 'Pavlik', age: 17});

//Добавление нескольких документов
// db.user.insertMany([
//     {name: 'Elena', age: 20, adress: {city: 'Berlin', index: '12342'}},
//     {name: 'Alexandr', age: 30},
//     {}
// ])

// db.user.insertMany([
//   { name: "Denis", age: 34 },
//   { name: "Denis", age: 36 },
// ]);

//READ
// db.user.find();

//Вывод данных с лемитом
// db.user.find().limit(2);

 //db.user.find().skip(2);

// Вывод данных с сортировкой a...z
// db.user.find().sort({name: 1});

// Вывод данных с сортировкой z...a
// db.user.find().sort({name: 1});

// Вывод данных с сортировкой по возрастанию
// db.user.find().sort({age: 1});

// Вывод данных с сортировкой по убыванию
// db.user.find().sort({age: -1});

//Вывод данных с сортировкой по убыванию с лимитом
// db.user.find().sort({age: -1}).limit(4);

//Вывод данных с сортировкой по нескольким свойствам
// db.user.find().sort({name: 1, age: -1});

//Поиск документа по значению одного из свойств
// db.user.find({ name: "Denis" });

//Операторы
//оператор больше - $gt
// db.user.find({ age: { $gt: 29 } });

//оператор меньше -$lt
// db.user.find({ age: { $lt: 31 } });

//оператор больше или равно -$gte
// db.user.find({age: {$gte: 30}});

//оператор меньше или равно -$lte
// db.user.find({age: {$lte: 30}});

//оператор равно - $eq
// db.user.find({name: {$eq: 'Denis'}});

//Оператор неравенства - $ne
// db.user.find({ name: { $ne: "Denis" } });

//вывод определенных свойств в документе
// db.user.find({ name: "Denis" }, { name: 1 });
// db.user.find({}, { name: 1 });
// db.user.find({name: 'Denis'}, {name: 1, _id: 0})
// db.user.find({ name: "Denis" }, { name: 0, _id: 0 });
// db.user.find({ name: "Denis" }, { _id: 0 });

//соответствие одному из значений из массива- $in
// db.user.find({ name: { $in: ["Elena", "Olga", "Pavlik"] } });

//соответствие одному из значений из массива- $nin
// db.user.find({ name: { $nin: ["Elena", "Olga", "Pavlik"] } });

//Логическое И -$and
// db.user.find({$and: [{name: 'Denis'}, {age: 36}]});

//Логическое ИЛИ -$or
// db.user.find({$or: [{name: 'Olga'},{name: 'Elena'}]})

//Логическое НЕ -$not
// db.user.find({ age: { $not: { $gt: 20 } } });

//Оператор $exists
// db.user.find({age: {$exists: true}});
// db.user.find({age: {$exists: false}});