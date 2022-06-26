'use strict';
const {AnimalShelter}=require("../stack-queue-animal-shelter");
const {Cat}=require("../stack-queue-animal-shelter");
const {Dog}=require("../stack-queue-animal-shelter");

describe('Test the stack-queue-animal-shelter classes',()=>{
    const newAnimal = new AnimalShelter();

    it('Creating instance of AnimalShelter class',()=>{
        expect(newAnimal).toBeInstanceOf(AnimalShelter);
        })

      it('Test enqueue/dequeue methods for Cat class',()=>{
        const newAnimal = new AnimalShelter();
         const newCat = new Cat("cat"); 
         newAnimal.enqueue(newCat);
        expect(newAnimal.queue.front.value.type).toBe("cat") ;
        expect(typeof newAnimal.dequeue("cat")).toEqual("object");
      })  

      it('Test enqueue/dequeue methods for dog class',()=>{
        const newAnimal = new AnimalShelter();
         const newDog = new Dog("dog");
         newAnimal.enqueue(newDog);
         expect(newAnimal.queue.front.value.type).toBe("dog");        
         expect(typeof newAnimal.dequeue("dog")).toEqual("object");
      })

      it('Test enqueue/dequeue methods with bad pref',()=>{
        const newAnimal = new AnimalShelter();
         const newDog = new Dog("dog");; 
         newAnimal.enqueue(newDog);
         expect(newAnimal.dequeue("something")).toBeNull();
      })
})
