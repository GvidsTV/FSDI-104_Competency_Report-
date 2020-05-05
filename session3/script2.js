const client = {
    name:"Christian",
    type:"Premium",
    data:{
        location:{
            city:"Orlando",
            country:"US"
        },
        account:{
            since:"10-12-2018",
            stars:200
        }
    },
    hobbies:{
        act:['listen music','play volleyball','play crash']
    }
}



// create variables
//old way
const clientName = client.name, clientLocation=client.data.location.city,clientStars=client.data.account.stars;

console.log(clientName);
console.log(clientLocation);
console.log(clientStars);

    //new way
    //Object destructing

    let {name,type} = client;
    
    console.log(name);
    console.log(type);

    let{data:{location:{city}}}=client;


    console.log(city);

    let {hobbies:{act}}=client;

    console.log(act[2]);

    //object literal enhancement

    const band="oasis", genre="Rock", songs=['Wonderwall','song2','song3'];

  
    const music ={band,genre,songs}

    console.log(music);
    

    const students=[
        {name:"Joel",gpa:80},
        {name:"Obrien",gpa:100},
        {name:"Mark",gpa:90},
        {name:"Christian",gpa:85},
        {name:"Christopher",gpa:95},
        {name:"Daniel",gpa:100},
        {name:"Rene",gpa:100},
        {name:"Dominique",gpa:95},
        {name:"Gareth",gpa:85},
    ];

   console.log(students);

    const best = students.filter(person=>person.gpa>85);

    const Daniel = students.find(student=>student.name=='Daniel');
    const {gpa}=Daniel;
    console.log(gpa);

    let total = students.reduce((gpaTotal,student)=>gpaTotal+student.gpa,0);

    console.log(total/students.length);

   // let results=[];

    // for(let i=0;i<students.length;i++){
        
        
   //     if(students[i].gpa>90){
   //          console.log(students[i]);
   //          results.push(students[i]);
   //     }
   // }

   // console.log(results);
   // function myFilter(persons){
     
   // }

    // console.log(best);
