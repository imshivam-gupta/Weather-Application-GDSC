import {createStore,combineReducers,applyMiddleware} from 'redux'  // Using redux dependencies
import thunk from 'redux-thunk' // Used to insert condition before dispatch
import {composeWithDevTools} from 'redux-devtools-extension' // Setting and getting ready for redux extension

import { darkModeReducer, otherCityWeatherReducers, weatherReducer } from './redux/reducers'  // Importing all reducers required for state managment


const reducer = combineReducers({
    weatherDetails: weatherReducer,
    otherWeathers : otherCityWeatherReducers,
    darkMode: darkModeReducer
}) // Combining the reducers to mcombine them

const weatherInfoFromStorage       = localStorage.getItem('weatherInfo')? JSON.parse(localStorage.getItem('weatherInfo')):[]   // 7 Day weather Storage
const otherWeathersListFromStorage = localStorage.getItem('otherWeathersList')? JSON.parse(localStorage.getItem('otherWeathersList')):[]  // Uther cities weather storage
const darkModeFromStorage = localStorage.getItem('darkMode')?JSON.parse(localStorage.getItem("darkMode")):{}


const initialState = {
    weatherDetails: { weatherInfo: weatherInfoFromStorage },
    otherWeathers : { otherWeathersList: otherWeathersListFromStorage},
    darkMode : {isdarkMode:darkModeFromStorage},
} // Keeping inital state saved from local storage

const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))  // making store

export default store


