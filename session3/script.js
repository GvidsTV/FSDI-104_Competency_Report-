//object literal

const person={
    name:"Mark",
    age:30,
    birthdayYear:function(){
        return new Date().getFullYear()-this.age;
    }
}



const person2={  
    name:"Joel",
    age:32
    
}

//----person.name="Carter" --- alternate method, not as good 


console.log(person.birthdayYear());
console.log(person2.name);

//object constructor

class Task{
    constructor(name, priority){
        this.name=name;
        this.priority=priority;
    }
}

const task1= new Task("Learn JS","High");
const task2= new Task("Homework","Medium");
const task3= new Task("Complete Canvas LMS", "Low");
console.log(`Name: ${task1.name}, Priority: ${task1.priority}`);

document.getElementById("task").innerHTML=`Name: ${task1.name}, Priority: ${task1.priority}`;
console.log(task2);
console.log(task3);

//object literal
let lion = {
    name:'Simba',
    foodType:'carnivore',
    kingOfJungle:true
};

let monkey = {
    name:"Louie",
    foodType:"carnivore",
    kingOfJungle:false
};

console.log(lion);
console.log(monkey);

//object constructor

//function Animal(name,foodType,kingOfJungle){
    
class Animal{
    constructor(name,foodType,kingOfJungle){
        this.name=name;
        this.foodType=foodType;
        this.kingOfJungle=kingOfJungle;
    }
}
let animal1= new Animal("Snoopy","carnivore",false);
let animal2= new Animal("Garfield","lassgnr",true);

console.log(animal1);
console.log(animal2);

