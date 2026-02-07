const d = new Date();

class Animal {
  numLength: number = 1;
}

class Dog extends Animal {}

type AnimalConstructor = new () => Animal;

const createAnimal = (c: AnimalConstructor): Animal => {
  return new c();
}

createAnimal(Animal);
const dog = createAnimal(Dog);
// createAnimal(Object);

console.log(dog.numLength);

type MyDate = {
  new (date: string): Date;
  (n?: number): number
}