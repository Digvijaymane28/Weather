import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
import "./SearchBar.css";
// import { colors } from '@mui/material';
export default function SearchBar({updateInfo}){
        let [city,setCity]=useState("");
        let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="69f786f2a9f1b951185106a072d58354";

    let getWeatherData= async()=>{
       try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRes=await response.json();
        let result={
            city:city,
            lat:jsonRes.coord.lat,
            lon:jsonRes.coord.lon,
            temp:jsonRes.main.temp,
            tempMax:jsonRes.main.temp_max,
            weather:jsonRes.weather[0].description,
            humidity:jsonRes.main.humidity,
        }
        return result;
       }catch{
        throw error;
       }
       
    };

    let handleChange=(event)=>{
       setCity(event.target.value);
    }

    let handleSubmit=async(eve)=>{
        try{
        eve.preventDefault();
        setCity("");
        setError("");
        let newInfo=await getWeatherData();
        updateInfo(newInfo);
        }catch(err){
            setError(true);
            
        }
    }
    return(
        <div className="SearchBar">
           <form onSubmit={handleSubmit} >
            <TextField 
            id="City Name" 
            label="City Name" 
            variant="outlined"
            value={city} 
            onChange={handleChange}/>
            <br /><br />
            <Button 
            className="Search"
            variant="outlined"
           type="submit"
           >Search</Button>
           {error && <p style={{color:"red"}}>No such a Place exists!</p> }
           </form>
       </div>
    );
}