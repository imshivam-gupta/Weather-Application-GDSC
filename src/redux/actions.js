import getFormattedWeatherData7Day, { getCityWeatherFormatted } from "../services/WeatherService";


import { 
    ADD_TO_WEATHER_LIST, REMOVE_FROM_WEATHER_LIST,
    GET_WEATHER_FAIL, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, DARK_MODE
} from "./constants"


export const getWeatherAction = (city) => async(dispatch,getState) => {

    try {

        const query = city?{q:city}:{q:"london"};     
        dispatch({type: GET_WEATHER_REQUEST})
        const data = await  getFormattedWeatherData7Day(query)
 
        dispatch({
            type: GET_WEATHER_SUCCESS,
            payload: data
        })

        localStorage.setItem('weatherInfo',JSON.stringify(getState().weatherDetails.weatherInfo))

    } 
    
    catch (error) {
        console.log(error);

        
        dispatch({
            type: GET_WEATHER_FAIL,
                payload: 
                error.response && error.response.data.message     
                ? error.response.data.message
                : error.message
        })
    }
}


export const AddOtherCity = (city) => async(dispatch,getState) => {
    
    if(city!=="NONE")
        
        try {
            const query = city?{q:city}:{q:""};     
            const data = await getCityWeatherFormatted(query)

            dispatch({
                    type: ADD_TO_WEATHER_LIST,
                    payload:{data}
            })
    
            localStorage.setItem('otherWeathersList',JSON.stringify(getState().otherWeathers.otherWeathersList))
        } 
            
        catch (error) {
            console.log(error);
        }
}



export const removeOtherCity = (del_name) => (dispatch,getState) => {

    dispatch( {
        type:REMOVE_FROM_WEATHER_LIST,
        payload: del_name
    })

    localStorage.setItem('otherWeathersList',JSON.stringify(getState().otherWeathers.otherWeathersList))
}


export const handledarkMode = (e) => async (dispatch) => {

    localStorage.setItem("darkMode", e);
  
    dispatch({
      type: DARK_MODE,
      payload: e,
    });
  };