import {React,useState} from 'react';
import './App.css';
import BarChart from './components/BarChart';
import HorizontalChart from './components/HorizontalChart';
import { UserData } from "./Data";

function App() {
  const [userData ] = useState ({
    labels: UserData.map((data) => [data.homework,data.datenew]),
    datasets: [
      {
        label: "ขาดส่ง",
        data: UserData.map((data) => data.unsend),
        backgroundColor: [
          "#FF3333",
        ],
        
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 0.5,
      },
      {
        label: "ส่งแล้ว",
        data: UserData.map((data) => data.send ),
        backgroundColor: [
          "rgba(75,192,192,1)	",
        ],
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      }
      
    ],
  });
  return (
    <div className="App">
      <div>
        <BarChart chartData={userData} />
        <HorizontalChart chartData={userData}/>
      </div>
    </div>
  );
}

export default App;