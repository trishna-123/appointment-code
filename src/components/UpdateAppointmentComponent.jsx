import React, { Component } from "react";
import AppointmentService from "../services/AppointmentService";

export class UpdateAppointmentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appointmentId : this.props.match.params.id,
            appointmentDate: '',
            appointmentStatus: '',
            userId: '',
            doctorId : '',
            fee : '',
        }

        this.changeAppointmentDateHandler = this.changeAppointmentDateHandler.bind(this);
        this.changeAppointmentStatusHandler = this.changeAppointmentStatusHandler.bind(this);
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeDoctorIdHandler = this.changeDoctorIdHandler.bind(this);
        this.changeFeeHandler = this.changeFeeHandler.bind(this);

        this.updateAppointment = this.updateAppointment.bind(this)
    }

    componentDidMount(){
        AppointmentService.getAppointment(this.state.appointmentId).then((res) =>{
            let appointment = res.data;
            this.setState({
                appointmentDate: appointment.appointmentDate,
                appointmentStatus: appointment.appointmentStatus,
                userId: appointment.userId,
                doctorId: appointment.doctorId,
                fee: appointment.fee
            })
        })
    }

    updateAppointment = (e) => {
        e.preventDefault();
        let appointment = {
            appointmentDate: this.state.appointmentDate,
            appointmentStatus: this.state.appointmentStatus,
            userId: this.state.userId,
            doctorId: this.state.doctorId,
            fee: this.state.fee
        }
        console.log('appointment =>' + JSON.stringify(appointment))
        AppointmentService.updateAppointment(appointment,this.state.appointmentId).then(res => {
            alert("Appointment updated successfully....")
        })
        this.props.history.push("/listappointments");
    }

    cancel(){
        alert("leaving with out saving.....")
    }

    changeAppointmentDateHandler(event){
        this.setState({appointmentDate:event.target.value})
    }

    changeAppointmentStatusHandler(event){
        this.setState({appointmentStatus:event.target.value})
    }

    changeUserIdHandler(event){
        this.setState({userId:event.target.value})
    }

    changeDoctorIdHandler(event){
        this.setState({doctorId:event.target.value})
    }

    changeFeeHandler(event){
        this.setState({fee:event.target.value})
    }

    render() {
        return (
            <div>
                <br ></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2>Edit Appointment</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                  <label >Appointment Date</label>
                                  <input type="datetime-local" name="appointmentDate" id="" className="form-control" placeholder="Enter AppointmentDate" 
                                   value={this.state.appointmentDate} onChange={this.changeAppointmentDateHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Appointment Status</label>
                                  <input type="text" name="appointmentStatus" id="" className="form-control" placeholder="Enter AppointmentStatus" 
                                   value={this.state.appointmentStatus} onChange={this.changeAppointmentStatusHandler} />
                                </div>
                                <div className="form-group">
                                  <label >User Id</label>
                                  <input type="text" name="userId" id="" className="form-control" placeholder="Enter UserId" 
                                   value={this.state.userId} onChange={this.changeUserIdHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Doctor Id</label>
                                  <input type="text" name="doctorId" id="" className="form-control" placeholder="Enter DoctorId" 
                                   value={this.state.doctorId} onChange={this.changeDoctorIdHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Fee</label>
                                  <input type="text" name="fee" id="" className="form-control" placeholder="Enter Fee" 
                                   value={this.state.fee} onChange={this.changeFeeHandler} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={this.updateAppointment}>Update</button>
                                <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}