import axios from "axios";

class AppointmentService{

    getAllAppointments(){
        return axios.get("http://localhost:8686/appointment/appointment/viewallappointment");
    }

    createAppointment(appointment){
        return axios.post("http://localhost:8686/appointment/appointment/addappointment",appointment);
    }

    deleteAppointmentById(appointmentId){
        return axios.delete("http://localhost:8686/appointment/appointment/deleteappointmentbyid/"+appointmentId);
    }

    updateAppointment(appointmentId,appointment){
        return axios.put("http://localhost:8686/appointment/appointment/updateappointmentbyid/"+appointmentId,appointment);
    } 

    getAppointmentById(appointmentId){
        return axios.get("http://localhost:8686/appointment/appointment/getappointmentbyid/"+appointmentId);
    }

}

export default new AppointmentService();