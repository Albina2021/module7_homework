//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
const user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
  };
  function findStringInObject(object, string) {
    let result;
    result = (string in object);
    return result;
  }
  console.log(findStringInObject(user, 'age'));