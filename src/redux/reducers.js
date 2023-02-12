import { 
    ADD_TO_WEATHER_LIST, REMOVE_FROM_WEATHER_LIST,
    GET_WEATHER_FAIL, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, DARK_MODE
} from "./constants"


export const weatherReducer = (state={weatherInfo:[]},action) =>{
    switch (action.type) {
        case GET_WEATHER_REQUEST: return {loading:true,weatherInfo:[]}
        case GET_WEATHER_SUCCESS: return {loading:false, weatherInfo:action.payload}
        case GET_WEATHER_FAIL   : return {loading:false, error:action.payload}
        default                 : return state
    }
}

export const otherCityWeatherReducers = (state={otherWeathersList:[]},action) =>{
    switch (action.type) {

        case ADD_TO_WEATHER_LIST:

            const {data}      = action.payload
            const existItem = state.otherWeathersList.find(x => x.name === data.name)

            if(existItem) return {otherWeathersList: [...state.otherWeathersList]}   
            else return {otherWeathersList: [...state.otherWeathersList,data]}  


        case REMOVE_FROM_WEATHER_LIST: return  { otherWeathersList: [...state.otherWeathersList.filter(x=>x.name !== action.payload)]}
        default                      : return state
    }
}


export const darkModeReducer = (state = {}, action) => {
    switch (action.type) {
      case DARK_MODE:
        return {
          ...state,
          isdarkMode: action.payload,
        };
      default:
        return state;
    }
  };