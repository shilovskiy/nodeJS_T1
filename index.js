console.log('Hello world');
var tt=2;
ss='Lorem ipsum dolor sit amet, consectetur adipisicing elit';

console.log(ss);


class Pokemon {
  constructor(name,level) {
    this.name = name;
    this.level = level;
  }
  sayHello(){
    console.log( "hi!, i'm %s", this.name );
  }
  valueof(){
    return this;
  }
}
let pok1 = new Pokemon("Vasj1a",5);
pok1.sayHello();
console.log(pok1.valueof());
