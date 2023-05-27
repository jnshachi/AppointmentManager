import React, {useState} from 'react'
import { BiCalendarPlus } from "react-icons/bi"
import "../style/AddAppointment.scss"


const AddAppointment = ({onSendAppointment,lastId}) => {

  const clearData = {
    patientname :'',
    aptDate:'',
    aptTime:'',
    aptNotes:''
  }

  let [toogleForm, setToogleForm]= useState(false)
  let [formData,setformData] =useState(clearData)

  function formDataPublish(){
    const appointmentInfo = {
      id : lastId+1,
      patientname :formData.patientname,
      aptDate: formData.aptDate+''+formData.aptTime,
      aptNotes: formData.aptNotes
    }
    onSendAppointment(appointmentInfo);
    setformData(clearData);
    setToogleForm(!toogleForm)
  }

  return (
    <div className='add-appointment'>
      <button className="btn" onClick={()=> {setToogleForm(!toogleForm)}}>
          <BiCalendarPlus className="cal_icon" /> Add Appointment
      </button>
      {
        toogleForm && 
        <form>
        <div className="form-items">
          <label>Patient Name</label>
            <input
              type="text"
              name="patientname"
              onChange={(event)=>{setformData({...formData, patientname:event.target.value}) }}
              value={formData.patientname}
            />
        </div>

        <div className="form-items">
          <label>Apt Date</label>
            <input
              type="date"
              name="aptDate"
              onChange={(event)=>{setformData({...formData, aptDate:event.target.value}) }}
              value={formData.aptDate}
            />
        </div>

        <div className="form-items">
          <label>Apt Time</label>
            <input
              type="time"
              name="aptTime"
              onChange={(event)=>{setformData({...formData, aptTime:event.target.value}) }}
              value={formData.aptTime}
            />
        </div>

        <div className="form-items">
          <label>Appointment Notes</label>
            <textarea
              name="aptNotes"
              rows="3"
              placeholder="Detailed comments about the condition"
              onChange={(event)=>{setformData({...formData, aptNotes:event.target.value}) }}
              value={formData.aptNotes}
            ></textarea>
        </div>

        <div className="form-items">
            <button type="submit" onClick={formDataPublish}>
              Submit
            </button>
        </div>
        </form>
      }
    </div>
  );
};


export default AddAppointment