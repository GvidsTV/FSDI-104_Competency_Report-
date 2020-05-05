let pet={
    name:'Mufasa',
    hunger:10,
    happiness:87,
    status:function(){
   

    document.getElementById("data").innerHTML=`<p> <b>Hunger:</b> ${this.hunger}</p><p> <b>Happiness: </b> ${this.happiness} </p>`;
    }

}

pet.status();