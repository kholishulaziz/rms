import React, {Component} from 'react';

import Avatar from 'material-ui/Avatar';
import {indigo400} from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import {Step, Stepper, StepButton} from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';

import ActionAccountBox from 'material-ui/svg-icons/action/account-box';
import ActionHistory from 'material-ui/svg-icons/action/history';
import ActionHome from 'material-ui/svg-icons/action/home';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import MapsLayers from 'material-ui/svg-icons/maps/layers';
import NotificationWc from 'material-ui/svg-icons/notification/wc';

import ContentAdd from 'material-ui/svg-icons/content/add';

class EmployeeDialog extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            createDialogIsOpen: false,
            stepIndex: 0,
            errorTextRequired: '',
            firstName: '',
            lastName: '',
            gender: '',
            dob: new Object,
            nationality: '',
            maritalStatus: '',
            phone: '',
            subDivision: '',
            status: '',
            suspendDate: new Object,
            hireDate: new Object,
            grade: '',
            division: '',
            email: '',
            office: ''
        }
        this.handleAddEmployee = this.props.handleAddEmployee.bind(this);
    }

    handleOpenDialog() {
        this.setState({
            createDialogIsOpen: true,
        });
    }
    handleCloseDialog() {
        this.setState({
            createDialogIsOpen: false,
            stepIndex: 0,
            errorTextRequired: '',
            firstName: '',
            lastName: '',
            gender: '',
            dob: new Object,
            nationality: '',
            maritalStatus: '',
            phone: '',
            subDivision: '',
            status: '',
            suspendDate: new Object,
            hireDate: new Object,
            grade: '',
            division: '',
            email: '',
            office: ''
        });
    }
    handlePrev() {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };
    handleNext() {
        const {stepIndex} = this.state;
        var errorTextRequired = false;
        switch (stepIndex) {
            case 0:
                if (this.state.firstName=="" || this.state.lastName=="" || this.state.gender==""
                        /*|| this.state.dob=="" ||*/ || this.state.phone=="" || this.state.subDivision==""
                        || this.state.grade=="" || this.state.division=="" || this.state.email==""
                        ){
                    errorTextRequired = true;
                }
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                if (this.state.office==""){
                    errorTextRequired = true;
                }
                break;
        }

        if ( errorTextRequired == true){
            this.setState({
                errorTextRequired: 'This field is required!',
            });
        } else {
            this.setState({
                stepIndex: stepIndex + 1,
                errorTextRequired: '',
            });
            if (stepIndex==5){
                this.handleFinish();
            }
        }
    };
    handleFinish(){
        var id = this.state.firstName +" "+ this.state.lastName;
        var newEmployee = {
             id: id.replace(/ /g, '_'),
             firstName: this.state.firstName,
             lastName: this.state.lastName,
             gender: this.state.gender,
             dob: this.state.dob,
             nationality: this.state.nationality,
             maritalStatus: this.state.maritalStatus,
             phone: this.state.phone,
             subDivision: this.state.subDivision,
             status: this.state.status,
             suspendDate: this.state.suspendDate,
             hireDate: this.state.hireDate,
             grade: this.state.grade,
             division: this.state.division,
             email: this.state.email,
             office: this.state.office
        }
        this.handleAddEmployee(newEmployee);
        this.handleCloseDialog();
    }

    handleChangeValue(event, type) {
        var nextState = {};
        nextState[type] = event.target.value;
        this.setState(nextState);
    }

    handleChangeSelectValue(event, index, value, type) {
        var nextState = {};
        nextState[type] = value;
        this.setState(nextState);
    }

    handleChangeDateValue(event, date, type) {
        var nextState = {};
        nextState[type] = date;
        this.setState(nextState);
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <div className="content" >
                            <TextField
                                value={this.state.firstName}
                                floatingLabelText="First Name"
                                errorText={this.state.firstName==""?this.state.errorTextRequired:""}
                                onChange={event => this.handleChangeValue(event, 'firstName')}
                            /><br />
                            <TextField
                                value={this.state.lastName}
                                floatingLabelText="Last Name"
                                errorText={this.state.lastName==""?this.state.errorTextRequired:""}
                                onChange={event => this.handleChangeValue(event, 'lastName')}
                            /><br />
                            <SelectField
                                value={this.state.gender}
                                floatingLabelText="Gender"
                                errorText={this.state.gender==""?this.state.errorTextRequired:""}
                                onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'gender')} >
                                <MenuItem value={"M"} primaryText="Male" />
                                <MenuItem value={"F"} primaryText="Female" />
                            </SelectField><br />
                            <DatePicker
                                value={this.state.dob}
                                floatingLabelText="Date of Birth"
                                errorText={this.state.dob==""?this.state.errorTextRequired:""}
                                onChange={(event, date) =>  this.handleChangeDateValue(event, date, 'dob')}
                                autoOk={true}
                            />
                            <TextField
                                value={this.state.nationality}
                                floatingLabelText="Nationality"
                                onChange={event => this.handleChangeValue(event, 'nationality')}
                            /><br />
                            <SelectField
                                value={this.state.maritalStatus}
                                floatingLabelText="Marital Status"
                                onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'maritalStatus')} >
                                <MenuItem value={"S"} primaryText="Single" />
                                <MenuItem value={"M"} primaryText="Married" />
                            </SelectField><br />
                            <TextField
                                value={this.state.phone}
                                floatingLabelText="Phone"
                                errorText={this.state.phone==""?this.state.errorTextRequired:""}
                                onChange={event => this.handleChangeValue(event, 'phone')}
                            /><br />
                        </div>
                        <div className="content" >
                            <TextField
                                value={this.state.subDivision}
                                floatingLabelText="Sub Division"
                                errorText={this.state.subDivision==""?this.state.errorTextRequired:""}
                                onChange={event => this.handleChangeValue(event, 'subDivision')}
                            /><br />
                            <SelectField
                                value={this.state.status}
                                floatingLabelText="Status"
                                onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'status')} >
                                <MenuItem value={"C"} primaryText="Contract" />
                                <MenuItem value={"P"} primaryText="Permanent" />
                            </SelectField><br />
                            <DatePicker
                                value={this.state.suspendDate}
                                floatingLabelText="Suspend Date"
                                onChange={(event, date) =>  this.handleChangeDateValue(event, date, 'suspendDate')}
                                autoOk={true}
                                />
                            <DatePicker
                                value={this.state.hireDate}
                                floatingLabelText="Hire Date"
                                onChange={(event, date) =>  this.handleChangeDateValue(event, date, 'hireDate')}
                                autoOk={true}
                                />
                            <SelectField
                                value={this.state.grade}
                                floatingLabelText="Grade"
                                errorText={this.state.grade==""?this.state.errorTextRequired:""}
                                onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'grade')} >
                                <MenuItem value={"SE1"} primaryText="SE - JP" />
                                <MenuItem value={"SE2"} primaryText="SE - PG" />
                                <MenuItem value={"SE3"} primaryText="SE - AP" />
                                <MenuItem value={"SE4"} primaryText="SE - AN" />
                            </SelectField><br />
                            <SelectField
                                value={this.state.division}
                                floatingLabelText="Division"
                                errorText={this.state.division==""?this.state.errorTextRequired:""}
                                onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'division')} >
                                <MenuItem value={"SWDR"} primaryText="SWD Red" />
                                <MenuItem value={"SWDG"} primaryText="SWD Green" />
                                <MenuItem value={"SWDB"} primaryText="SWD Blue" />
                                <MenuItem value={"SWDBl"} primaryText="SWD Black" />
                                <MenuItem value={"CDC"} primaryText="CDC" />
                            </SelectField><br />
                            <TextField
                                value={this.state.email}
                                floatingLabelText="Email"
                                errorText={this.state.email==""?this.state.errorTextRequired:""}
                                onChange={event => this.handleChangeValue(event, 'email')}
                            /><br />
                        </div>
                        <div className="content">
                            <Avatar
                              src={require("../images/kholishul_a.jpg")}
                              size={100}
                            />
                        </div>
                     </div>);
            case 1:
                return 'History';
            case 2:
                return 'Grade';
            case 3:
                return 'Family member';
            case 4:
                return 'Address';
            default:
                return (
                    <div>
                        <SelectField
                            value={this.state.office}
                            floatingLabelText="Office"
                            errorText={this.state.office==""?this.state.errorTextRequired:""}
                            onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'office')} >
                            <MenuItem value={"JKT"} primaryText="Jakarta" />
                            <MenuItem value={"JOG"} primaryText="Yogyakarta" />
                            <MenuItem value={"SBY"} primaryText="Surabaya" />
                            <MenuItem value={"DPS"} primaryText="Bali" />
                        </SelectField>
                     </div>);
        }
      }

    render() {
        const {finished, stepIndex} = this.state;
        const title = [
            <Stepper key="Stepper" linear={true} activeStep={stepIndex}>
                <Step>
                    <StepButton icon={<ActionAccountBox color={indigo400}/>} onClick={() => this.setState({stepIndex: 0})} />
                </Step>
                <Step>
                    <StepButton icon={<ActionHistory color={indigo400}/>} onClick={() => this.setState({stepIndex: 1})} />
                </Step>
                <Step>
                    <StepButton icon={<MapsLayers color={indigo400}/>} onClick={() => this.setState({stepIndex: 2})} />
                </Step>
                <Step>
                    <StepButton icon={<NotificationWc color={indigo400}/>} onClick={() => this.setState({stepIndex: 3})} />
                </Step>
                <Step>
                    <StepButton icon={<ActionHome color={indigo400}/>} onClick={() => this.setState({stepIndex: 4})} />
                </Step>
                <Step>
                    <StepButton icon={<CommunicationLocationOn color={indigo400}/>} onClick={() => this.setState({stepIndex: 5})} />
                </Step>
            </Stepper>
        ];
        const actionsBtn = [
            <RaisedButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev.bind(this)}
            />,
            <RaisedButton
                label={stepIndex === 5 ? 'Create Employee' : 'Next'}
                secondary={true}
                keyboardFocused={true}
                onTouchTap={this.handleNext.bind(this)}
            />
           ];

        return(
            <div>
                <div className="panel-list-add">
                    <FloatingActionButton secondary={true} onTouchTap={this.handleOpenDialog.bind(this)}>
                      <ContentAdd />
                    </FloatingActionButton>
                </div>
                <Dialog
                    open={this.state.createDialogIsOpen}
                    title={title}
                    actions={actionsBtn}
                    contentStyle={{width: "65%", maxWidth: "none", height:"65%", maxHeight:"none"}}
                    autoScrollBodyContent={true}
                    onRequestClose={this.handleCloseDialog.bind(this)}>
                    <div className="content-dialog">
                        {this.getStepContent(stepIndex)}
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default EmployeeDialog;