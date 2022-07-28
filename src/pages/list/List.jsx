import { Header } from "../../components/header/Header"
import { Navbar } from "../../components/navbar/Navbar"
import "./list.css"
import {useLocation} from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
 

export const List = () => {

  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination);
  const [date,setDate] = useState(location.state.date);
  const [openDate,setOpenDate] = useState(false);
  const [options,setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" name="" id="" placeholder="destination"/>
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")}`} to {`${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
              {openDate && <DateRange 
                onChange={item=>setDate([item.selection])} 
                minDate={new Date()}
                ranges={date}
              />}
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}
