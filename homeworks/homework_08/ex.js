/* to string */
console.log('17 to string is ' + String(17));
console.log('-17.17 to string is ' + String(-17.17));
console.log('false to string is ' + String(false));
console.log('null to string is ' + String(null));
console.log('undefined to string is ' + String(undefined));
console.log('0 to string is ' + String(0));

/* to number */
console.log("'17' to number is " + Number(17));
console.log('true to number is ' + Number(true));
console.log('false to number is ' + Number(false));
console.log('null to number is ' + Number(null));
console.log('undefined to number is ' + Number(undefined));
console.log("'   20   ' to number is " + Number('   20   '));
console.log("'      ' to number is " + Number('      '));
console.log("'   30d   ' to number is " + Number('   30d   '));

/* to boolean */
console.log('null to boolean is ' + Boolean(null));
console.log('undefined to boolean is '+ Boolean(undefined));
console.log('0 to boolean is '+ Boolean(0));
console.log('-0 to boolean is '+ Boolean(-0));
console.log('NaN to boolean is '+ Boolean(NaN));
console.log("'' to boolean is "+ Boolean(''));
console.log("' ' to boolean is "+ Boolean(' '));
console.log('17 to boolean is '+ Boolean(17));
console.log("'Hello' to boolean is "+ Boolean('Hello'));

const a = 17;
const b = 5;
a > b;
a <= b;
a == b;
a != b;

'a' < 'b';
 'ab' > 'a';


'17' > 1;

17 === 1;
17 === 17;
17 === '17';
17 === true;
'0' === '';
true === false;
true === true;
null === undefined;
false === 0;

17 == '17';
'0' == '';
0 == '';
null == undefined;
false == 0;

undefined == null;
undefined == 0;
null == 0;
undefined < 0;
undefined > 0;