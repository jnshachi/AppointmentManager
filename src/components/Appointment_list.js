import React from 'react'
import { BiTrash } from 'react-icons/bi'
import '../style/Appointment_list.scss'

const Appointment_list = ({appointment, onDeleteAppointment}) => {
  return (
    <li>
            <button onClick={()=> onDeleteAppointment(appointment.id)}>
                <BiTrash/></button>
            <div className='appointment-details'>
              <div className='name_date'>
              <span className='patName'>{appointment.patientname}</span>
              <span className='aptDate'>{appointment.aptDate}</span>
              </div>
              <div className="aptNotes">{appointment.aptNotes}</div>
            </div>
          </li>
  )
}

export default Appointment_list