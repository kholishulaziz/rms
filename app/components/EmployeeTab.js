import React, {Component} from 'react';
import $ from 'jquery';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import ActionAccountBox from 'material-ui/svg-icons/action/account-box';
import ActionHistory from 'material-ui/svg-icons/action/history';
import ActionHome from 'material-ui/svg-icons/action/home';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import MapsLayers from 'material-ui/svg-icons/maps/layers';
import NotificationWc from 'material-ui/svg-icons/notification/wc';

import DetailEmployee from './DetailEmployee'
import DetailLocation from './DetailLocation'

class EmployeeTab extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            deleteDialogIsOpen: false,
            validationDialogIsOpen: false,
            viewMode: true,
        }
    }

    handleEditMode() {
        this.setState({
            viewMode: false
        })
    }

    handleUpdateEmployee(){
        if (this.props.employee.firstName=="" || this.props.employee.lastName=="" || this.props.employee.gender==""
                /*|| this.props.employee.dob=="" ||*/ || this.props.employee.phone=="" || this.props.employee.subDivision==""
                || this.props.employee.grade=="" || this.props.employee.division=="" || this.props.employee.email==""
                || this.props.employee.office==""
                ){
            // required fields are not filled yet
            this.handleOpenValidationDialog();
        } else {
            var index = this.props.employees.map( (employee) => employee.id ).indexOf($("#employeeId").val())
            //console.log("-- Update Employee["+index+"] "+ $("#employeeId").val() +" --");
            //console.log(this.props.employee);
            var employees = this.props.employees;
            employees[index] = this.props.employee;
            this.props.setEmployees(employees);
            this.setState({
                viewMode: true
            })
        }
    }

    handleCancel() {
        var index = this.props.employees.map( (employee) => employee.id ).indexOf($("#employeeId").val())
        var employees = this.props.employees;
        this.props.setCurrentEmployee(employees[index]);
        this.setState({
            viewMode: true
        })
    }

    handleDeleteEmployee(){
        var index = this.props.employees.map( (employee) => employee.id ).indexOf($("#employeeId").val())
        //console.log("-- Delete Employee["+index+"] "+ $("#employeeId").val() +" --");
        var employees = this.props.employees
        employees.splice( index, 1 );
        if (employees.length > 0){
            this.props.setCurrentEmployee(employees[0]);
        }
        this.handleCloseDeleteDialog();
    }

    handleOpenDeleteDialog() {
        this.setState({
            deleteDialogIsOpen: true,
            validationDialogIsOpen: false,
            viewMode: true,
        });
    }

    handleCloseDeleteDialog() {
        this.setState({
            deleteDialogIsOpen: false,
        });
    }

    handleOpenValidationDialog() {
        this.setState({
            validationDialogIsOpen: true,
        });
    }

    handleCloseValidationDialog() {
        this.setState({
            validationDialogIsOpen: false,
        });
    }

    render() {
        const actionsDeleteBtn = [
            <RaisedButton
                label="Cancel"
                onTouchTap={this.handleCloseDeleteDialog.bind(this)}
            />,
            <RaisedButton
                label="Delete"
                secondary={true}
                keyboardFocused={true}
                onTouchTap={this.handleDeleteEmployee.bind(this)}
            />
        ];
        const actionsValidationBtn = [
            <RaisedButton
                label="Ok"
                secondary={true}
                keyboardFocused={true}
                onTouchTap={this.handleCloseValidationDialog.bind(this)}
            />,
        ];

        return(
            <div>
                <Tabs>
                   <Tab icon={<ActionAccountBox />} >
                       <DetailEmployee
                           employee={this.props.employee}
                           viewMode={this.state.viewMode}
                           errorTextRequired="This field is required!"
                           setCurrentEmployee={this.props.setCurrentEmployee.bind(this)}
                       />
                   </Tab>
                   <Tab icon={<ActionHistory />} >
                     <div className="content-container">
                       <h2 className="content-header">History</h2>
                     </div>
                   </Tab>
                   <Tab icon={<MapsLayers />} >
                     <div className="content-container">
                       <h2 className="content-header">Grade</h2>
                     </div>
                   </Tab>
                   <Tab icon={<NotificationWc />} >
                     <div className="content-container">
                       <h2 className="content-header">Family Member</h2>
                     </div>
                   </Tab>
                   <Tab icon={<ActionHome />} >
                     <div className="content-container">
                       <h2 className="content-header">Address</h2>
                     </div>
                   </Tab>
                   <Tab icon={<CommunicationLocationOn />} >
                       <DetailLocation
                           employee={this.props.employee}
                           viewMode={this.state.viewMode}
                           setCurrentEmployee={this.props.setCurrentEmployee.bind(this)}
                       />
                   </Tab>
                </Tabs>
                <div className="foot">
                    { (this.state.viewMode) ? (
                        <div>
                            <RaisedButton
                                label={"Edit"}
                                secondary={true}
                                onTouchTap={this.handleEditMode.bind(this)}
                                className="foot-btn"
                            />
                            <RaisedButton
                                label={"Delete"}
                                secondary={true}
                                onTouchTap={this.handleOpenDeleteDialog.bind(this)}
                                className="foot-btn"
                            />

                        </div> ):(
                        <div>
                            <RaisedButton
                                label={"Save"}
                                secondary={true}
                                onTouchTap={this.handleUpdateEmployee.bind(this)}
                                className="foot-btn"
                            />
                            <RaisedButton
                                label={"Cancel"}
                                onTouchTap={this.handleCancel.bind(this)}
                                className="foot-btn"
                            />
                        </div> )}
                </div>
                <Dialog
                   title="Delete Employee"
                   open={this.state.deleteDialogIsOpen}
                   actions={actionsDeleteBtn}
                   onRequestClose={this.handleCloseDeleteDialog.bind(this)}
                   >
                   <div>
                       <span>Are you sure want to delete this employee?</span>
                   </div>
                </Dialog>
                <Dialog
                   open={this.state.validationDialogIsOpen}
                   actions={actionsValidationBtn}
                   onRequestClose={this.handleCloseValidationDialog.bind(this)}
                   >
                   <div>
                       <span>Make sure all required fields all filled!</span>
                   </div>
                </Dialog>
            </div>
        );
    }
}

export default EmployeeTab;