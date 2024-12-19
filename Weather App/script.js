const BASE_URL ="https://api.weatherapi.com/v1/current.json?key=35afbaa5247f4b959fd130107241912&q="

const input =document.querySelector(".search-box");
const loc=document.querySelector(".city");
const date=document.querySelector(".date");
const temp=document.querySelector(".temp");
const weather=document.querySelector(".weather");
const image=document.querySelector(".icon");
//str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//name, country
//localtime
//temp_c
//condition.text
//condition.icon

const update= async(city)=>{
    let response=await fetch(`${BASE_URL}${city}`);
    let data=await response.json();
    loc.innerText = `${data["location"]["name"]}, ${data["location"]["country"]}`;
    date.innerHTML = `<i>Local Date/Time: <br>${data["location"]["localtime"]}</i>`;
    temp.innerText = `${data["current"]["temp_c"]}°c`;
    weather.innerText = `${data["current"]["condition"]["text"]}`;
    image.src=`${data["current"]["condition"]["icon"]}`;
}



window.onload =()=>{
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(
            function(position){
                let lat=position.coords.latitude;
                let lon=position.coords.longitude;
                let value=`${lat},${lon}`;
                update(value);
            }
        )
    }
};

input.addEventListener("keyup", (e) => {
    if (e.key ==="Enter") {
        let value=e.target.value;
        let city=value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        update(city);
    }
});
