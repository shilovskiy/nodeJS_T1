console.log('Week 1. Task 1-2');

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
      console.log("Pokemon %s level %d",this.name,this.level);
  }
  valueOf(){
    return this.level;
  }
  getPokemon(){
    return this;
  }
}
//класс PokemonList , который в качестве аргументов
//принимает любое количество покемонов. Экземпляры этого класса
//должны обладать всеми функциями массива. А так же иметь метод add ,
//который принимает в качестве аргументов имя и уровень, создает нового
//покемона и добавляет его в список.
class PokemonList extends Array {

  last() {
      return this[this.length - 1];
  }
  add(name,level){
    this.push(new Pokemon(name,level));
  }
  //общее количество и список
  show(){
    for(let pok of this){
        pok.show();
      //console.log("Pokemon %s level %d",pok.name,pok.level);
    }
    console.log("Total amount: %d",this.length);

  }

  getPokemon(){
    return this.pop();
  }
  max(){
    //return  Math.max.apply(null, this.map(item => item.level));
   return this.reduce((prev,curr)=>{
     return prev>curr ? prev.getPokemon() : curr.getPokemon()} )
  }
}

//— Создать два списка покемонов и сохранить их в переменных lost и found
let lost = new PokemonList();
lost.add("Crotine",12);
lost.add("Barrados",17);
lost.add("Turteler",22);
lost.add("Hippopoom",27);
lost.add("Stunhopper",32);
lost.add("Hypepie",37);
lost.add("Bellibia",42);
lost.add("Venomeleon",47);
lost.add("Magmeleon",52);
lost.add("Dinoscythe",57);
lost.show();


let found = new PokemonList();
found.add("Catectric",15);
found.add("Wallabite",19);
found.add("Wolvia",24);
found.add("Jagoss",29);
found.add("Eleron",34);
found.add("Whirlphant",39);
found.add("Glacamel",80);
found.add("Fluffanzee",49);
found.add("Repelican",54);
found.add("Ursign",59);

found.show();

//Достать покемона из lost
let new_pok=lost.getPokemon();
new_pok.show();

//добавить покемона в found
found.add(new_pok.name,new_pok.level);
found.show();

//Максимальный покемон
found.max().show();
