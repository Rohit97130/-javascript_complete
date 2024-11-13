// Async Await

const temperatureField =  document.querySelector(".temp");
const cityField  = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField  =  document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");








const  form  = document.querySelector('form');
const searchField = document.querySelector('.searchField');


let target  =''
form.addEventListener('submit',search)

function search(e){
    e.preventDefault() // it will  not let your form to  referesh
    target = searchField.value
     fetchData(target);
  }




   
 async function  fetchData(target){

      let endpoint = `http://api.weatherapi.com/v1/current.json?key=84de3c6ade0a441aa3434612241111&q=${target}&aqi=no` 
      
         const  response  = await  fetch(endpoint);
        
        const   data = await response.json();      

      //  console.log(data);

       let currentTemp = data.current.temp_c;
       let locationName =  data.location.name;
       let localTime =  data.location.localtime;

       
       let currentCondition  = data.current.condition.text
       let conditionLogo =  data.current.condition.icon
      
       updateWeatherData(locationName ,currentTemp, localTime , currentCondition,conditionLogo);

}


function  updateWeatherData(cityName,temp, Time, condition, logo){
      
   cityField.innerText = cityName;
   temperatureField.innerText = temp;
   dateField.innerText = Time;
   weatherField.innerText=condition;
   emojiField.src = logo;

}

 
 fetchData('Mumbai');