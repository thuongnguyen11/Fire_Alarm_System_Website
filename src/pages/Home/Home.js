import React, { useEffect, useState } from "react";
import { GetAllDataRealTime } from "../../services/getData.js";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import GasMeterIcon from '@mui/icons-material/GasMeter';
import WhatshotIcon from '@mui/icons-material/Whatshot';

import Time from "../../components/Time/Time.js";
import './Home.css';
import { blue } from "@mui/material/colors";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";
import { useNavigate } from "react-router-dom"


function Home() {
  const navigate = useNavigate();


  const [user] = useAuthState(auth);
  const [infor, setInfor] = useState([]);
  const [status, setStatus] = useState("");

  const AddAllTitemsToTable = (Devices) => {
    setInfor(Devices);
    if (parseInt(Devices[0]) <= 5000 && parseInt(Devices[1]) == 1 && parseInt(Devices[2]) <= 35) {
      setStatus("Bình thường");
    } else if (parseInt(Devices[0]) > 5000 && parseInt(Devices[1]) == 0 && parseInt(Devices[2]) > 35) {
      setStatus("Có cháy");
    } else {
      setStatus("Báo động");
    }


  }
  // && parseInt(infor[2]) < 35
  useEffect(() => {
    GetAllDataRealTime(AddAllTitemsToTable);
  }, [])

  useEffect(() => {
    if (!user) {

      navigate(`/login`)
    }
  }, [user])



  return (
    <div>
      <Time className="text-gray-900" />
      <div className="mx-32 mt-14 items-center">
        <ul className="flex flex-wrap justify-evenly w-full text-center items-center">
          <li className={`item text-yellow-500 ${parseInt(infor[1]) == 0 ? "border-red-500 border-4" : ""}`}>
            <div className="flex justify-center items-center">
              <WhatshotIcon sx={{ fontSize: 20 }} />
              <div className="fire">Lửa</div>
            </div>
            <div className="infor">{infor[1] ? "Không có lửa" : "Có lửa"}</div>
          </li>
          <li className={`item text-blue-500 ${parseInt(infor[2]) > 35 ? "border-red-500 border-4" : ""}`}>
            <div className="flex justify-center items-center">
              <DeviceThermostatIcon sx={{ fontSize: 20 }} />
              <div className="temp">Nhiệt độ</div>
            </div>

            <div className="infor">{infor[2]}&nbsp;&nbsp;<sup>o</sup>C</div>

          </li>
          <li className={`item text-fuchsia-500 ${parseInt(infor[0]) > 5000 ? "border-red-500 border-4" : ""}`}>
            <div className="flex justify-center items-center">
              <GasMeterIcon sx={{ fontSize: 20 }} />
              <div className="gas">Nồng độ khí gas</div>
            </div>

            <div className="infor">{parseInt(infor[0])}&nbsp;&nbsp;ppm</div>

          </li>
          <li className={`item bg-green-400 ${status === "Có cháy" ? "bg-red-500 text-white" : status === "Báo động" ? "bg-yellow-300" : ""}`}>
            <div>Trạng thái</div>
            <div className="infor">{status}</div>

          </li>
          {/* <div className={`banner ${active ? "active" : ""}`}>{children}</div> */}
        </ul>
      </div>
    </div>

  );
}
export default Home;