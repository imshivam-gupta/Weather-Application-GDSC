import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './RightScreen.css'
// import OtherCityCard from '../../components/OtherCityCard/OtherCityCard'
import { AddOtherCity } from '../../redux/actions'

import {DragDropContext} from 'react-beautiful-dnd'
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import dynamic from 'next/dynamic'
const OtherCityCard =dynamic (()=>import('../../components/OtherCityCard/OtherCityCard'),{ssr:false})

const useCurrentCallback = (callback) => {
  const reference = React.useRef();
  reference.current = callback;
  return (...args) => {
    return reference.current?.(...args);
  };
};

const RightScreen = () => {
  

  const otherWeathers         = useSelector((state) => state.otherWeathers)
  const { otherWeathersList } = otherWeathers
  const [listWeather,setListWeather] = useState(otherWeathersList)

  if(listWeather) {
    for(let i=0;i<listWeather.length;i++) {listWeather[i].isDragging=false; listWeather[i]._id=i.toString()}
    // console.log(otherWeathersList);
  }
  
  const dispatch = useDispatch();

  const addcityHandler = () =>{
    let city = prompt("Enter city name to append in List", "None");
    if(city!="None" && city!="") dispatch(AddOtherCity(city))
    setListWeather(otherWeathersList)
  }

  let id = 0

  useEffect(()=>{
      setListWeather(otherWeathersList)
      // console.log(listWeather)
  },[listWeather,addcityHandler])
  
  
  
  function handleOnDragEnd(result) {
    if(!result.destination) return;
    const items = Array.from(listWeather);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setListWeather(items);
  }



  return (
    

    <div className='right-secn'>

      <div className='heading-other-city'>
        <h1> Other Cities </h1> <i onClick={addcityHandler} className='fas fa-add'></i>
      </div>

     
      
      
      
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='characters'>
          {provided => (
              <div className='other-city-list'  ref={provided.innerRef}  {...provided.droppableProps}>
                    {
                      listWeather && listWeather.map( (oth_city,index) =>  {
                           return (
                          <Draggable draggableId={oth_city._id} key={oth_city._id} index={index}>
                            {provided => (
                              <div
                                ref={provided.innerRef} 
                                {...provided.draggableProps}  
                                {...provided.dragHandleProps}
                              >
                                <OtherCityCard 
                                  key={oth_city._id} 
                                  oth_city={oth_city} 
                                /> 
                              </div>
                              )}
                          </Draggable>
                          )}
                    )}
                    {provided.placeholder} 
                </div>
            )}
            </Droppable>
        </DragDropContext>
        
      

      <button className='add-city' onClick={addcityHandler}>ADD NEW CITY</button>


    </div>
    
  )
}


export default RightScreen