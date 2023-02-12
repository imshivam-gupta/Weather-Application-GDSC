const API_Key = '903507f17d707fecd352d38301efba77';
const BASE_URL = 'https://api.openweathermap.org/data/2.5'


// Function to get weather data for a specific location 7 Days
const getWeatherData = async(infoType,searchParams) => {
    const url = new URL(BASE_URL+'/'+infoType)
    url.search = new URLSearchParams({...searchParams,units:'metric',appid:API_Key,cnt:20})
    let response = await fetch(url);
    const cityFahr = await response.json();
    return cityFahr
}


// Function to get data for a city at a current time
const getCityWeather = async(infoType,searchParams) => {
    const url = new URL(BASE_URL+'/'+infoType)
    url.search = new URLSearchParams({...searchParams,units:'metric',appid:API_Key})
    let response = await fetch(url);
    const cityFahr = await response.json();
    return cityFahr
}



// To rotate the weather and adjust it according to day 
function rotate(animals,num){
    // console.log(animals)
    while(num){
        num--;
        const temp = animals.shift();
        animals.push(temp);
        // console.log(animals);
    }
    return animals
}

// Format the 7 Day json input
const format7dayWeather = (data) => {

    let updated= []
    for(let i =0;i<20;i++) if(i%3===0) updated.push(data.list[i])

    let day_7_weather=[];

    for(let i=0;i<7;i++){
        
        const {
            main:{temp, feels_like, temp_min, temp_max, humidity},
            name,
            dt,
            weather,
            wind:{speed},
            sys:{country,sunrise,sunset}
        } = updated[i]

        day_7_weather[i]={
            temp,feels_like, temp_min, temp_max, humidity,name,dt,weather,speed,country,sunrise,sunset
        }

    }

    const d = new Date();
    let day = d.getDay()
    day_7_weather = rotate(day_7_weather,7-day)
    return day_7_weather
}


// Format json input of single dat
const formatOneDayWeather = (data) => {

    const {
        coord: {lat,lon},
        main:{temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        weather,
        wind:{speed},
        sys:{country,sunrise,sunset}
    } = data

    return {lat,lon,temp,feels_like, temp_min, temp_max, humidity,name,dt,weather,speed,country,sunrise,sunset}
}


// Getting the Formatted data of 7 Days
const getFormattedWeatherData7Day = async (searchParams) => {
    const formattedWeatherData = await getWeatherData('forecast',searchParams).then(format7dayWeather)
    formattedWeatherData.push(searchParams)
    return formattedWeatherData
}


// Getting the formatted data of one day of a city
export const getCityWeatherFormatted = async (searchParams) => { 
    const formattedWeatherData = await getCityWeather('weather',searchParams).then(formatOneDayWeather)
    formattedWeatherData.city=searchParams
    return formattedWeatherData
}


export default getFormattedWeatherData7Day;