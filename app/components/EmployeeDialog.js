import React, {Component} from 'react';

import {indigo400} from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
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
            dialogIsOpen: false,
            stepIndex: 0,
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
            dialogIsOpen: true,
        });
    }
    handleCloseDialog() {
        this.setState({
            dialogIsOpen: false,
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
        this.setState({
            stepIndex: stepIndex + 1,
        });
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
        this.setState({
             dialogIsOpen: false,
             stepIndex: 0,
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

    handleChangeFirstName(event) {
        this.setState({
            firstName: event.target.value
        });
    }
    handleChangeLastName(event) {
        this.setState({
            lastName: event.target.value
        });
    }
    handleChangeGender(event, index, value) {
        this.setState({
            gender: value
        });
    }
    handleChangeDOB(event, date) {
        this.setState({
            dob: date
        });
    }
    handleChangeNationality(event) {
        this.setState({
            nationality: event.target.value
        });
    }
    handleChangeMaritalStatus(event, index, value) {
        this.setState({
            maritalStatus: value
        });
    }
    handleChangePhone(event) {
        this.setState({
            phone: event.target.value
        });
    }

    handleChangeSubDivision(event) {
        this.setState({
            subDivision: event.target.value
        });
    }
    handleChangeStatus(event, index, value) {
        this.setState({
            status: value
        });
    }
    handleChangeSuspendDate(event, date) {
        this.setState({
            suspendDate: date
        });
    }
    handleChangeHireDate(event, date) {
        this.setState({
            hireDate: date
        });
    }
    handleChangeGrade(event, index, value) {
        this.setState({
            grade: value
        });
    }
    handleChangeDivision(event, index, value) {
        this.setState({
            division: value
        });
    }
    handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }
    handleChangeOffice(event, index, value) {
        this.setState({
            office: value
        });
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <div className="panel-tab-employee-left" >
                            <TextField
                                value={this.state.firstName}
                                floatingLabelText="First Name"
                                onChange={this.handleChangeFirstName.bind(this)}
                            /><br />
                            <TextField
                                value={this.state.lastName}
                                floatingLabelText="Last Name"
                                onChange={this.handleChangeLastName.bind(this)}
                            /><br />
                            <SelectField
                                value={this.state.gender}
                                floatingLabelText="Gender"
                                onChange={this.handleChangeGender.bind(this)} >
                                <MenuItem value={"M"} primaryText="Male" />
                                <MenuItem value={"F"} primaryText="Female" />
                            </SelectField><br />
                            <DatePicker
                                value={this.state.dob}
                                floatingLabelText="Date of Birth"
                                onChange={this.handleChangeDOB.bind(this)}
                                autoOk={true}
                            /><br />
                            <TextField
                                value={this.state.nationality}
                                floatingLabelText="Nationality"
                                onChange={this.handleChangeNationality.bind(this)}
                            /><br />
                            <SelectField
                                value={this.state.maritalStatus}
                                floatingLabelText="Marital Status"
                                onChange={this.handleChangeMaritalStatus.bind(this)} >
                                <MenuItem value={"S"} primaryText="Single" />
                                <MenuItem value={"M"} primaryText="Married" />
                            </SelectField><br />
                            <TextField
                                value={this.state.phone}
                                floatingLabelText="Phone"
                                onChange={this.handleChangePhone.bind(this)}
                            /><br />
                        </div>
                        <div className="panel-tab-employee-right" >
                            <TextField
                                value={this.state.subDivision}
                                floatingLabelText="Sub Division"
                                onChange={this.handleChangeSubDivision.bind(this)}
                            /><br />
                            <SelectField
                                value={this.state.status}
                                floatingLabelText="Status"
                                onChange={this.handleChangeStatus.bind(this)} >
                                <MenuItem value={"C"} primaryText="Contract" />
                                <MenuItem value={"P"} primaryText="Permanent" />
                            </SelectField><br />
                            <DatePicker
                                value={this.state.suspendDate}
                                floatingLabelText="Suspend Date"
                                onChange={this.handleChangeSuspendDate.bind(this)}
                                autoOk={true}
                                /><br />
                            <DatePicker
                                value={this.state.hireDate}
                                floatingLabelText="Hire Date"
                                onChange={this.handleChangeHireDate.bind(this)}
                                autoOk={true}
                                /><br />
                            <SelectField
                                value={this.state.grade}
                                floatingLabelText="Grade"
                                onChange={this.handleChangeGrade.bind(this)} >
                                <MenuItem value={"SEJP"} primaryText="SE - JP" />
                                <MenuItem value={"SEPG"} primaryText="SE - PG" />
                                <MenuItem value={"SEAP"} primaryText="SE - AP" />
                                <MenuItem value={"SEAN"} primaryText="SE - AN" />
                            </SelectField><br />
                            <SelectField
                                value={this.state.division}
                                floatingLabelText="Division"
                                onChange={this.handleChangeDivision.bind(this)} >
                                <MenuItem value={"SWDR"} primaryText="SWD Red" />
                                <MenuItem value={"SWDG"} primaryText="SWD Green" />
                                <MenuItem value={"SWDB"} primaryText="SWD Blue" />
                                <MenuItem value={"SWDBl"} primaryText="SWD Black" />
                                <MenuItem value={"CDC"} primaryText="CDC" />
                            </SelectField><br />
                            <TextField
                                value={this.state.email}
                                floatingLabelText="Email"
                                onChange={this.handleChangeEmail.bind(this)}
                            /><br />
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
                            floatingLabelText="Location"
                            onChange={this.handleChangeOffice.bind(this)} >
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
            <Stepper key="Stepper" linear={false} activeStep={stepIndex}>
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
        const actions = [
            <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev.bind(this)}
            />,
            <RaisedButton
                label={stepIndex === 5 ? 'Create Employee' : 'Next'}
                primary={true}
                onTouchTap={stepIndex === 5 ? this.handleFinish.bind(this) : this.handleNext.bind(this)}
            />
           ];

        return(
            <div>
                <div className="panel-list-add">
                    <FloatingActionButton onTouchTap={this.handleOpenDialog.bind(this)}>
                      <ContentAdd />
                    </FloatingActionButton>
                </div>
                <Dialog
                    open={this.state.dialogIsOpen}
                    title={title}
                    actions={actions}
                    autoScrollBodyContent={true}
                    onRequestClose={this.handleCloseDialog.bind(this)}>
                    <div>
                        {this.getStepContent(stepIndex)}
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default EmployeeDialog;