import React ,{useEffect, useRef, useState} from "react"
const Weather = ()=>{
    const[city ,setCity] = useState("");
      const[weather , setWeather] = useState(null);
      
      const cityRef = useRef();
      
      const fetchWeather = async()=> {
          const apikeys = '09ca90b5d5c24ccef0d4f64d05370104';
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apikeys}`;
    
          try{
            const response = await fetch(apiUrl);
          const data = await response.json();
          console.log(data);
          setWeather(data);
          
          }catch{
            console.log("error")
          }
          
        }

    const cityHandler =(e)=>{
      setCity(e.target.value)
    }
  
      
      
      
      
      return (
        <>
        <h1>Weather app</h1>
          <div className="container">
            <div className="search">
              <input ref={cityRef} onChange={(e)=>cityHandler(e)} type="text" placeholder="Search city name" />
              <button onClick={fetchWeather} >Search</button>
              </div>
            <div className="DayAndDate">
              <p className="day"></p>
              <p className="Date"></p>
            </div>
            
            <div className="currTime">
              <p>
                
              </p>
            </div>
    
            <div className="place">
              <p>
                {city}
              </p>
            </div>
            <div className="weatherIcon">
              <img src="./assets/cloudy-day.png" width={200} alt="" />
              </div>
            <div className="deg">
                {weather?.main?.temp? (<h4>{Math.round(weather.main.temp)}℃</h4>):(<h4>0℃</h4>)}
              
            </div>
    
    
            
          </div>
          
        </>
      )
}
export default Weather;