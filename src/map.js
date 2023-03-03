import {React,useState} from 'react';
import './App.css';
import BarChart from './components/BarChart';
import HorizontalChart from './components/HorizontalChart';
import { UserData } from "./Data";

function Map() {
  const [userData ] = useState ({
    labels: UserData.map((data) => [data.homework,data.datenew]),
    datasets: [
      {
        label: "ส่งแล้ว",
        data: UserData.map((data) => data.send ),
        backgroundColor: [
          "rgba(0,255,0,0.6)	",
        ],
        borderColor: "rgba(0,255,0,0.2)",
        borderWidth: 1.5,
      },
      {
        label: "ขาดส่ง",
        data: UserData.map((data) => data.unsend),
        backgroundColor: [
          "rgba(253,28,0 , 0.8)",
        ],
        
        borderColor: "rgba(253,28,0 , 0.2)",
        borderWidth: 1.5,
      },
      
    ],
  });
  return (
    <div className="map">
      <div>
        <BarChart chartData={userData} />
        <HorizontalChart chartData={userData}/>
      </div>
    </div>
  );
}

export default Map;