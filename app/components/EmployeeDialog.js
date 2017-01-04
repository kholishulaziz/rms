import React, {Component} from 'react';
import update from 'react-addons-update';

import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import ContentAdd from 'material-ui/svg-icons/content/add';

import DetailEmployee from './DetailEmployee'
import DetailLocation from './DetailLocation'

class EmployeeDialog extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            createDialogIsOpen: false,
            stepIndex: 0,
            errorTextRequired: '',
            employee: {
                 id: '',
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
        }
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
            employee: {
                 id: '',
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
        });
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <DetailEmployee
                        employee={this.state.employee}
                        viewMode={false}
                        errorTextRequired={this.state.errorTextRequired}
                        setCurrentEmployee={this.setNewEmployee.bind(this)}
                    />
                );
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
                    <DetailLocation
                        employee={this.state.employee}
                        viewMode={false}
                        errorTextRequired={this.state.errorTextRequired}
                        setCurrentEmployee={this.setNewEmployee.bind(this)}
                    />
                );
        }
    }

    setNewEmployee(newEmployee) {
        this.setState({
            employee: newEmployee
        })
    }

    handleAddNewEmployee(){
        let generatedId = this.state.employee.firstName+" "+this.state.employee.lastName;
        generatedId = generatedId.replace(/ /g, '_');
        var newEmployee = update(this.state, {
             employee: {id: {$set: generatedId}}
        });
        var employeesData = this.props.employees
        employeesData.push(newEmployee.employee)
        //console.log("-- Add New Employee --");
        //console.log(newEmployee);
        this.props.setEmployees(employeesData);
        this.handleCloseDialog();
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
                if (this.state.employee.firstName=="" || this.state.employee.lastName=="" || this.state.employee.gender==""
                        /*|| this.state.employee.dob=="" ||*/ || this.state.employee.phone=="" || this.state.employee.subDivision==""
                        || this.state.employee.grade=="" || this.state.employee.division=="" || this.state.employee.email==""
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
                if (this.state.employee.office==""){
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
                this.handleAddNewEmployee();
            }
        }
    };

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

    render() {
        const {stepIndex} = this.state;
        const title = [
            <Stepper key="Stepper" linear={true} activeStep={stepIndex}>
              <Step>
                <StepLabel>Employee Detail</StepLabel>
              </Step>
              <Step>
                <StepLabel>Grades History</StepLabel>
              </Step>
              <Step>
                <StepLabel>Employment History</StepLabel>
              </Step>
              <Step>
                <StepLabel>Dependents</StepLabel>
              </Step>
              <Step>
                <StepLabel>Address</StepLabel>
              </Step>
              <Step>
                <StepLabel>Location</StepLabel>
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