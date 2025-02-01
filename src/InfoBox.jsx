import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import "./InfoBox.css";

export default function InfoBox({info}){
    const rainy="https://images.unsplash.com/photo-1517919003902-12d986168978?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold="https://plus.unsplash.com/premium_photo-1706534270994-15dacd37cc78?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const toHot="https://images.unsplash.com/photo-1510952267577-fc96d5ca660a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return(
        <div className="InfoBox">
            <div className="card">
            <Card sx={{ minWidth: 345 }}>
              <CardMedia
                sx={{ height: 230 }}
                image={info.humidity>80?rainy:info.temp<15?cold:info.temp>40?toHot:hot}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" >
                  {info.city} {info.humidity>80?<ThunderstormSharpIcon/>:info.temp<20?<AcUnitIcon/>:<WbSunnySharpIcon/>}        
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}>
                  <p><b>Co-ordinates</b> : {info.lat}&deg;N , {info.lon}&deg;E</p>
                  <p><b>Temperatue</b> : {info.temp}&deg;C</p>
                  <p><b>Max Temperatue</b> : {info.tempMax}&deg;C</p>
                  <p><b>Weather</b> : {info.weather}</p>
                  <p><b>Humidity</b> : {info.humidity}</p>
                </Typography>
              </CardContent>
            </Card>
            </div>
        </div>
    );
}