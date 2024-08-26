// деструктурирующее присваивание 
let colorsConfig = ['dark', 'light']; 

// 1 вариант - без деструктуризации
// let theme = colorsConfig[0];
// let secondTheme = colorsConfig[1];
// console.log(theme, secondTheme);


// 2 вариант - с деструктуризацией
let [theme, secondTheme, size = '20px'] = colorsConfig;
console.log(theme, secondTheme, size);