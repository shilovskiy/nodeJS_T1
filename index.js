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
     console.log(prev);
     console.log(curr);
     prev.level<curr.Level ? prev : curr} )
  }
}



let pok1 = new Pokemon("Vasj1a",5);
pok1.show();
console.log(pok1.valueof());


let pok2 = new Pokemon("Pikachu",80);



let poklist = new PokemonList(pok1,pok2);
console.log(poklist);
poklist.add("testman",85);
console.log(poklist);


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
console.log(lost);



let found = new PokemonList();

console.log(lost);

found.add("Catectric",15);
found.add("Wallabite",19);
found.add("Wolvia",24);
found.add("Jagoss",29);
found.add("Eleron",34);
found.add("Whirlphant",39);
found.add("Glacamel",44);
found.add("Fluffanzee",49);
found.add("Repelican",54);
found.add("Ursign",59);

//console.log(found);
found.show();


let new_pok=lost.getPokemon();
console.log(new_pok);

found.add(new_pok.name,new_pok.level);
found.show();
console.log('max',found.max());
