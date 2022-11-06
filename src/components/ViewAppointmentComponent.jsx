/* import React, { Component } from "react";
import AppointmentService from "../services/AppointmentService";

class ViewAppointmentComponent extends Component{

    constructor(props){
        super(props);
        //declaring state of react component
        this.state ={
            appointmentId : this.props.match.params.id,
            appointment : {}
        }

        this.goBack = this.goBack.bind(this);
    }

    componentDidMount(){
        AppointmentService.getAppointmentById(this.state.appointmentId).then((response) =>{
            this.setState({appointment : response.data})
        })
    }

    goBack(){
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <br /><br />
                <div className="card col-md-6 offset-md-3 ">
                    <h3 className="text-center">View Appointment</h3>
                        <div className="card-body">
                            <div className="row">
                                <label><b>Appointment Date :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.appointment.appointmentDate}</div>
                            </div>
                            <div className="row">
                                <label><b>Appointment Status :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.appointment.appointmentStatus}</div>
                            </div>
                            <div className="row">
                                <label><b>User Id :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.appointment.userId}</div>
                            </div>
                            <div className="row">
                                <label><b>Doctor Id :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.appointment.doctorId}</div>
                            </div>
                            <div className="row">
                                <label><b>Fee :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.appointment.fee}</div>
                            </div>
                            <div className="row">
                                <button type="button" className="btn btn-primary"
                                onClick={()=>this.goBack}>
                                    List of Appointments
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default ViewAppointmentComponent */