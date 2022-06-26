'use strict';
const Queue = require("../stack-and-queue/Queue");
class AnimalShelter{
constructor(){
    this.queue=new Queue();
}

enqueue(animal){
        this.queue.enqueue(animal);
}

dequeue(pref){
    if(this.queue.front.type==pref){
        let removed=this.queue.dequeue();
        return removed;
    }else{
        return null;
    }
}

}

class Cat extends AnimalShelter{
    constructor(type){
        super();
        this.type=type;
    }
}

class Dog extends AnimalShelter{
    constructor(type){
        super();
        this.type=type;
    }
}

module.exports={AnimalShelter:AnimalShelter,Cat:Cat,Dog:Dog};