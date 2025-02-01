import {useState} from "react";
import SearchBar from "./SearchBar"
import InfoBox from "./InfoBox"
import "./InfoBox.css";

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"Pune",
        lat:"18.91",
        lon:"73.51",
        temp:24,
        tempMax:25,
        weather:"haze",
        humidity:47,
    });
    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <>
        <h1 className="heading">Weather App</h1>
        <SearchBar updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </>
    );
}