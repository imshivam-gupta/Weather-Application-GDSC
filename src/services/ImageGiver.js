export const returnImagesSource = (name) => {
    
    let ans;

        if(name==='clear sky') ans="images/clear-sky.png"
        if(name==='broken clouds') ans="images/broken-clouds.png"
        if(name==='few clouds') ans="images/few-clouds.png"
        if(name==='overcast clouds') ans="images/few-clouds.png"
        if(name==='mist') ans="images/mist.png"
        if(name==='rain') ans="images/rain.png"
        if(name==='scattered clouds') ans="images/scattered-clouds.png"
        if(name==='shower rain') ans="images/shower-rain.png"
        if(name==='light rain') ans="images/light-rain.png"
        if(name==='snow') ans="images/snow.png"
        if(name==='thunderstorm') ans="images/thunderstorm.png"

    return ans

}