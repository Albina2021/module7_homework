//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
const user = {

    name: 'Andrei',

    surname: 'Ivanov',

    age: 18,

    position: 'developer',

};
function getKeyObject(object) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(key, object[key]);
    }
  }
}
getKeyObject(user);