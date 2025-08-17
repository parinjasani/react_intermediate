const userTab=document.querySelector('[data-userWeather]')
const serachTab=document.querySelector('[data-searchwheather]')
const userContainer=document.querySelector('.weather-container')
const grantAccessContainer=document.querySelector('.grant-location')
const searchForm=document.querySelector('[data-searchForm]')
const loadingScreen=document.querySelector(".loading-container")
const userInfoContainer=document.querySelector('.user-info-container')
const grantAcessButton=document.querySelector('[data-grantAccess]')

//intially variable
const API_KEY = "168771779c71f3d64106d8a88376808a";
let currentTab=userTab;
currentTab.classList.add("current-tab")
getFromSessionStorage();
// or ek kam pending hai
const notFound = document.querySelector('.errorContainer');
const errorBtn = document.querySelector('[data-errorButton]');
const errorText = document.querySelector('[data-errorText]');
const errorImage = document.querySelector('[data-errorImg]');


function switchTab(clickedTab){
    notFound.classList.remove('active')
    if(currentTab != clickedTab){
        currentTab.classList.remove('current-tab');
        currentTab=clickedTab;
        currentTab.classList.add('current-tab')

        if(!searchForm.classList.contains("active")){
            searchForm.classList.add("active");
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            
        }
        else{
            //pahela search ma hato pn atyre your wheather ma avyo
            searchForm.classList.remove("active")
            userInfoContainer.classList.remove("active")
            //have your  whether ma avi gaya etle e jvanu thase 
            getFromSessionStorage();
        }
    }

}
userTab.addEventListener('click',()=>{
    //pass clicked tab as input parameter
    switchTab(userTab);
})

serachTab.addEventListener('click',()=>{
    switchTab(serachTab);
})


//check co-ordinate are in session storage
function getFromSessionStorage(){
    const localcoordinates=sessionStorage.getItem("user-coordinates");
    if(!localcoordinates){
        //agar local cordinate nathi
        grantAccessContainer.classList.add('active');
        // console.log("first part")
    }
    else{
        const coordinates=JSON.parse(localcoordinates);
        // console.log("local coords",localcoordinates)
        fetchUserWeatherInfo(coordinates);
    }

}


async function fetchUserWeatherInfo(coordinates){
    let {lat,lon}=coordinates;
    //make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //mmake loader visible
    loadingScreen.classList.add("active")
    // api calling

    try{

        const response=await  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);;
        const data=await response.json(); 

        if (!data.sys) {
            throw data;
        }

        loadingScreen.classList.remove('active')

        userInfoContainer.classList.add('active');



        renderWheatherInfo(data);


    }catch(err){
        loadingScreen.classList.remove('active');
        notFound.classList.add('active');
        errorImage.style.display = 'none';
        errorText.innerText = `Error: ${err?.message}`;
        errorBtn.style.display = 'block';
        errorBtn.addEventListener("click",fetchSerachweatherInfo);
    }
}



function renderWheatherInfo(weatherInfo){

    // firstly we have to fetch html element
    const cityName=document.querySelector('[data-cityName]');
    const countryName=document.querySelector('[data-countryIcon]');

    const desc=document.querySelector('[data-weatherDesc]');
    const weatherIcon=document.querySelector('[data-weatherIcon]')
    const temp=document.querySelector('[data-temp]')
    const windspeed=document.querySelector('[data-windspeed]') 
    const humidity=document.querySelector('[data-humidity]') 
    const clouds=document.querySelector(['[data-cloudiness]']) 

    
    cityName.innerText = weatherInfo?.name;
    countryName.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp.toFixed(2)} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed.toFixed(2)} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity.toFixed(2)} %`;
    clouds.innerText = `${weatherInfo?.clouds?.all.toFixed(2)} %`;
}



function getlocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(Showposition);  
      
    }
    else{
        // if not suppoerted bt browser 
        grantAcessButton.style.display='none';
    }
}

function Showposition(position){
    const userCoordinates = {
        lat: position.coords.latitude,
        lon:position.coords.longitude,
    }
    sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}


grantAcessButton.addEventListener('click',getlocation)


let searchInput=document.querySelector('[data-searchInput]')
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let cityName=searchInput.ariaValueMax;
    if(cityName===''){
        return;
    }
    else{
    
    fetchSerachweatherInfo(searchInput.value);
    searchInput.value="";

    }
})

async function fetchSerachweatherInfo(city){

    loadingScreen.classList.add('active')
    userInfoContainer.classList.remove('active')
    grantAccessContainer.classList.remove('active')
    notFound.classList.remove('active');

    try{

    
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data=await response.json()

    loadingScreen.classList.remove('active')
    userInfoContainer.classList.add('active')
    renderWheatherInfo(data);

    }catch(err){
        loadingScreen.classList.remove('active')
        userInfoContainer.classList.remove('active')
        notFound.classList.add('active');
        errorText.innerText = `${err?.message}`;
        errorBtn.style.display = "none";

    }


}