let pet={
    name:'Simba',
    hunger:50,
    happiness:10,
    status:function(){

        document.getElementById("data").innerHTML=`<p> <b>Hunger:</b> ${this.hunger}</p><p> <b>Happiness: </b> ${this.happiness} </p>`;
       // console.log('Hunger' + this.hunger);

    },
    feed:function(){
    //feed the pet
    //decrease the hunger
    //increase the happiness
    //call status function to update the values on the HTML
    console.log("Feeding .. ")
    }    
}

pet.status();






