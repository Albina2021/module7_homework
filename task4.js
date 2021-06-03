// //Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
// План:
// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
// Создать экземпляры каждого прибора;
// Вывести в консоль и посмотреть результаты работы, гордиться собой :)

// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
function Device (model,brand, power) {
    this.model= model;
    this.brand = brand;  
    this.power = power;
      this.deviceOn = function() {
        console.log(`${this.model} от ${this.brand}  работает с мощностью ${this.power} вт`);
      }
      this.deviceOff = function() {
        console.log(`${this.model} от ${this.brand} выключен из розетки`);
      }
    }
    // У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
    function Notebook(model, power, brand, price, diagonal) { 
      this.model= model;
      this.power = power;
      this.brand = brand;
      this.price = price;
      this.diagonal = diagonal;
    
      this.parameters = function () {
        console.log(`Ноутбук: ${this.model} , марка: ${this.brand}, мощность: ${this.power} Вт, цена: ${this.price} руб., Диагональ: ${this.diagonal } дм`);
      }
    }
    function Lamp(model, brand,power, price, colour) { 
      this.model= model;
      this.power = power;
      this.brand = brand;
      this.price = price;
      this.colour = colour;
      this.parameters = function () {
     console.log(`Лампа: ${this.model}, марка: ${this.brand}, мощность: ${this.power} Вт, цена: ${this.price} руб., Цвет: ${this.colour }`); 
     }
    }
    // Создать делегирующую связь [[Prototype]] для двух конкретных приборов;

    Notebook.prototype = new Device(); 
    Lamp.prototype = new Device();

    // Создать экземпляры каждого прибора;

    let device1 = new Notebook ('MateBook14',65, "Huawey", 94900, 14);
    let device2 = new Lamp ('Настольная лампа A2054LT-1AB','Artelamp', 40, 4500 , 'Rose');

    // Вывести в консоль и посмотреть результаты работы, гордиться собой :)
    device1.parameters (); 
    device1.deviceOn(); 
    device1.deviceOff();
    device2.parameters (); 
    device2.deviceOn(); 
    device2.deviceOff();