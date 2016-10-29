console.log('Week 1. Task 1-2');
var tt=2;
ss='Lorem ipsum dolor sit amet, consectetur adipisicing elit';

console.log(ss);

//Часть 1:
//— Создать класс Pokemon , конструктор которого принимает имя и
//уровень в качестве аргумента. Все экземпляры этого класса должны иметь
//общий метод show , который выводит информацию о покемоне.
class Pokemon {
  constructor(name,level) {
    this.name = name;
    this.level = level;
  }
  show(){
    console.log( "hi!, i'm %s", this.name );
  }
  valueof(){
    return this;
  }
}
//класс PokemonList , который в качестве аргументов
//принимает любое количество покемонов. Экземпляры этого класса
//должны обладать всеми функциями массива. А так же иметь метод add ,
//который принимает в качестве аргументов имя и уровень, создает нового
//покемона и добавляет его в список.
class PokemonList extends Array {
  constructor(...args) {
      super(...args);
  }
  last() {
      return this[this.length - 1];
  }
}



let pok1 = new Pokemon("Vasj1a",5);
pok1.sayHello();
console.log(pok1.valueof());

let pok2 = new Pokemon("Pikachu",80);



let poklist = new PokemonList(pok1,pok2);
console.log(poklist.last());
