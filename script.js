// let searchb = document.querySelector('.submit');
// let input = document.querySelector('.userinput');
// let autob = document.querySelector('.autom');
// let res = document.querySelector('.result');

// // Fetch weather data
// async function getdata(val) {
//     let whtr = await fetch(`http://api.weatherapi.com/v1/current.json?key=bf203a88c3c343258b5130509251401&q=${val}&aqi=yes`);
//     return await whtr.json();
// }

// // Manual location input
// searchb.addEventListener('click', async () => {
//     const val = input.value;
//     if (val) {
//         const whtr = await getdata(val);
//         res.innerHTML = `
//         ${whtr.location.name} has Temperature ${whtr.current.temp_c}°C
//           `;
//     } else {
//         res.innerHTML = 'Please enter a location.';
//     }
// });

// // Auto location
// async function gotlocation(position) {
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;
//     let variable = await fetch(`http://api.weatherapi.com/v1/current.json?key=bf203a88c3c343258b5130509251401&q=${lat},${long}&aqi=yes`);
//     const whtr = await variable.json();
//     res.textContent = `${whtr.location.name} has Temperature ${whtr.current.temp_c}°C`;
// }

// function failedtoget() {
//     res.textContent = 'Failed to get location.';
// }

// autob.addEventListener('click', () => {
//     navigator.geolocation.getCurrentPosition(gotlocation, failedtoget);
// });

// //--------------------------------------------------//
// console.log('hi');
// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello brother");
//     },5000);
// })
// async function printdata(){
//     let x=await p;
//     console.log(x);
    
// }
// printdata();
// console.log('h=mewo');\\
//  const url="http://api.weatherapi.com/v1/current.json?key=bf203a88c3c343258b5130509251401&q=mumbai&aqi=yes";
const searchbox=document.querySelector('.search input');
const searchbtn=document.querySelector('.search button');

 async function checkweather(val){
    const response=await fetch(`http://api.weatherapi.com/v1/current.json?key=bf203a88c3c343258b5130509251401&q=${val}&aqi=yes`);
    var data=await response.json();
    // console.log(data);
    document.querySelector(".city").innerHTML=data.location.name;
    document.querySelector('.temp').innerHTML= Math.round(parseInt(data.current.temp_c));
    document.querySelector('.humidity').innerHTML=data.current.humidity;
    document.querySelector(".wind").innerHTML=Math.round(parseInt(data.current.wind_kph));
    let msg=document.querySelector(".weather-icon");
    let found=String(data.current.condition.text);
    if(found=="Mist"){
        msg.src="mist.png";
    }
    else if(found=="Clear"){
        msg.src="clear.png";
    }
    else if(found=='drizzle'){
        msg.src="drizzle.png";
    }
    else if(found=='Rain'){
        msg.src="rain.png";
    }
    else if(found=="Light snow"){
        msg.src="snow.png";
    }
     else if(found=="Partly cloudy"){
        msg.src="clouds.png";
     }
    
 }  
 searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
 })