import { useState, useEffect, useCallback } from 'react';
import AddAppointment from './components/AddAppointment';
import Search from './components/Search';
import './style/App.scss';
import {BiCalendar} from "react-icons/bi";
// import AppointmentData from '../public/data.json';
import Appointment_list from './components/Appointment_list';

function App() {
  let [AppointmentData,setAppointmentData]=useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("patientname")
  let [orderBy, setOrderBy] = useState("asc");

  const filteredAppointments = AppointmentData.filter(
    item =>{
      return (
        item.patientname.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      ) 
    }
  ).sort((a,b) => {
    let order = (orderBy === 'asc')? 1:-1;
    return(
      a[sortBy].toLowerCase()<b[sortBy].toLowerCase() ? -1*order : 1*order
    )

  })

  const fetchData = useCallback(()=>{
    fetch('./data.json')
      .then(response => response.json())
      .then(data =>{
        setAppointmentData(data)
      });
  } ,[])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  
  return (
    <div className="App">
      <h1><BiCalendar className='logo'/> Your Appointments</h1>
      <AddAppointment
        onSendAppointment ={myAppointment => setAppointmentData({...AppointmentData,myAppointment})}
        lastId = {AppointmentData.reduce((max,item)=>Number(item.id)>max ? Number(item.id):max,0)}
        />
      <Search query = {query}
      onQueryChange={myQuery => setQuery(myQuery)}
      orderBy={orderBy}
      onOrderByChange = {mySort => setOrderBy(mySort)}
      sortBy = {sortBy}
      onSortByChange = {mySort => setSortBy(mySort)}
      />

      <ul>
        {filteredAppointments.map(appointment => (
          // eslint-disable-next-line react/jsx-pascal-case
          <Appointment_list key={appointment.id} 
            appointment={appointment} 
            onDeleteAppointment={
              appointmentId =>
                setAppointmentData(AppointmentData.filter(appointment => 
                  appointment.id !== appointmentId))
            }
          />
        ))
        }
      </ul>

    </div>
  );
}

export default App;
