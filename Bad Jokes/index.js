// Promises
// GET https://icanhazdadjoke.com/

const jokeBtn = document.querySelectorAll('.card');
const jokes1 = document.querySelector('.java');
const jokes2 = document.querySelector('.python');
const jokes3 = document.querySelector('.cSharp');

const generateJokes = (num) =>{
    const setHeader = {
        headers:{
            Accept:"application/json"
        }
    }
    fetch('https://icanhazdadjoke.com' , setHeader)
    .then((res)=>res.json())
    .then((data)=>{
        if(num == 1){

            jokes1.innerHTML = data.joke; 
        }if(num == 2){

            jokes2.innerHTML = data.joke; 
        }if(num== 3){

            jokes3.innerHTML = data.joke; 
        }
    })
    .catch((error)=>{
        console.log(error);
    }) 
}




