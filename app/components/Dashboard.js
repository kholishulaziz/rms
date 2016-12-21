import React, {Component} from 'react';
import update from 'react-addons-update';
import SearchInput, {createFilter} from 'react-search-input';
import $ from 'jquery';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import {white} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';

import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import ActionSearch from 'material-ui/svg-icons/action/search';
import AvSortByAlpha from 'material-ui/svg-icons/av/sort-by-alpha';
import ContentFilterList from 'material-ui/svg-icons/content/filter-list';

import ActionAccountBox from 'material-ui/svg-icons/action/account-box';
import ActionHistory from 'material-ui/svg-icons/action/history';
import ActionHome from 'material-ui/svg-icons/action/home';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import MapsLayers from 'material-ui/svg-icons/maps/layers';
import NotificationWc from 'material-ui/svg-icons/notification/wc';

import Constants from '../Constants';
import EmployeeListDetail from './EmployeeListDetail'
import EmployeeDialog from './EmployeeDialog'

const employeesData = [
    {
        id: 'kholishul_a',
        firstName: 'Kholishul',
        lastName: 'Aziz',
        gender: 'M',
        dob: new Date(1991,3,1),
        nationality: 'Indonesia',
        maritalStatus: 'M',
        phone: '+62857 3032 3302',
        subDivision: 'Java Bootcamp',
        status: 'P',
        suspendDate: new Object,
        hireDate: new Date(2013,10,18),
        grade: 'SEPG',
        division: 'CDC',
        email: 'kholishul.aziz@mitrais.com',
        office: 'SBY'
    },
    {
        id: 'aldebaran_a',
        firstName: 'Aldebaran Athaillah',
        lastName: 'Aziz',
        gender: 'M',
        dob: new Date(2017,0,21),
        nationality: 'Indonesia',
        maritalStatus: 'S',
        phone: '+62857 1234 5678',
        subDivision: 'PHP Bootcamp',
        status: 'C',
        suspendDate: new Object,
        hireDate: new Date(2013,10,18),
        grade: 'SEJP',
        division: 'SWDBl',
        email: 'aldebaran.aziz@mitrais.com',
        office: 'JOG'
    },
    {
        id: 'ricard_g',
        firstName: 'Ricard',
        lastName: 'Gideon',
        gender: 'M',
        dob: new Date(2017,0,21),
        nationality: 'Australia',
        maritalStatus: 'M',
        phone: '+62857 1234 5678',
        subDivision: 'Android Bootcamp',
        status: 'P',
        suspendDate: new Object,
        hireDate: new Date(2013,10,18),
        grade: 'SEAN',
        division: 'SWDR',
        email: 'ricard.gideon@mitrais.com',
        office: 'JKT'
    },
    {
        id: 'mary_w',
        firstName: 'Mary Jane',
        lastName: 'Watson',
        gender: 'F',
        dob: new Date(2017,0,21),
        nationality: 'Australia',
        maritalStatus: 'M',
        phone: '+62857 1234 5678',
        subDivision: 'IOS Bootcamp',
        status: 'P',
        suspendDate: new Object,
        hireDate: new Date(2013,10,18),
        grade: 'SEAN',
        division: 'SWDG',
        email: 'mary.watson@mitrais.com',
        office: 'JKT'
    },
    {
        id: 'emma_w',
        firstName: 'Emma',
        lastName: 'Watson',
        gender: 'F',
        dob: new Date(2017,0,21),
        nationality: 'Australia',
        maritalStatus: 'M',
        phone: '+62857 1234 5678',
        subDivision: 'Java Bootcamp',
        status: 'C',
        suspendDate: new Object,
        hireDate: new Date(2013,10,18),
        grade: 'SEJP',
        division: 'SWDB',
        email: 'emma.watson@mitrais.com',
        office: 'DPS'
    },
];

const KEYS_TO_FILTERS = ['firstName','lastName'];

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            employees: employeesData,
            employee: employeesData[0],
            searchEmployee: {},
            errorTextRequired: "This field is required!",
            editMode: true,
            searchMode: false,
            deleteDialogIsOpen: false,
            validationDialogIsOpen: false,
        }
        console.log("-- Init State --");
        console.log(this.state);
    }

    handleTouchTap(currentEmployee){
        var parent = this._reactInternalInstance._currentElement._owner._instance;
        parent.setEmployee(currentEmployee);
    }

    setEmployee(currentEmployee) {
        this.setState({
            employee: currentEmployee
        })
    }

    handleAddEmployee(newEmployee){
        var parent = this._reactInternalInstance._currentElement._owner._instance;
        parent.addEmployee(newEmployee);
    }

    addEmployee(newEmployee){
        var employeesData = this.state.employees
        employeesData.push(newEmployee)
        console.log("-- Add New Employee --");
        console.log(newEmployee);
        this.setState({ employees: employeesData })
    }

    handleEditMode() {
        this.setState({
            editMode: false
        })
    }

    handleUpdateEmployee(){
        if (this.state.employee.firstName=="" || this.state.employee.lastName=="" || this.state.employee.gender==""
                /*|| this.state.employee.dob=="" ||*/ || this.state.employee.phone=="" || this.state.employee.subDivision==""
                || this.state.employee.grade=="" || this.state.employee.division=="" || this.state.employee.email==""
                || this.state.employee.office==""
                ){
            // required fields are not filled yet
            this.handleOpenValidationDialog();
        } else {
            var index = this.state.employees.map( (employee) => employee.id ).indexOf($("#employeeId").val())
            console.log("-- Update Employee["+index+"] "+ $("#employeeId").val() +" --");
            console.log(this.state.employee);
            var employees = this.state.employees;
            employees[index] = this.state.employee;
            this.setState({
                employees: employees,
                editMode: true
            })
        }
    }

    handleCancel() {
        var index = this.state.employees.map( (employee) => employee.id ).indexOf($("#employeeId").val())
        var employees = this.state.employees;
        this.setState({
            employee: employees[index],
            editMode: true
        })
    }

    handleDeleteEmployee(){
        var index = this.state.employees.map( (employee) => employee.id ).indexOf($("#employeeId").val())
        console.log("-- Delete Employee["+index+"] "+ $("#employeeId").val() +" --");
        var employees = this.state.employees
        employees.splice( index, 1 );
        if (employees.length > 0){
            this.setState({
                employee: employees[0],
            })
        }
        this.handleCloseDeleteDialog();
    }

    handleOpenDeleteDialog() {
        this.setState({
            deleteDialogIsOpen: true,
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

    handleSearchEmployee(event){
        var employees = this.state.employees;
        if (event.target.value.length >= 3){
            var searchEmployee = employees.filter(createFilter(event.target.value, KEYS_TO_FILTERS));
            this.setState({
                searchEmployee: searchEmployee,
                searchMode: true,
            });
        } else {
            this.handleUnsearchEmployee(event);
        }
    }

    handleUnsearchEmployee(event){
        if (event.target.value.length < 3){
            this.setState({
                searchMode: false,
            });
        }
    }


    handleChangeValue(event, type) {
        var nextState = update(this.state, {
             employee: {[type]: {$set: event.target.value}}
        });
        this.setState(nextState);
    }

    handleChangeSelectValue(event, index, value, type) {
        var nextState = update(this.state, {
             employee: {[type]: {$set: value}}
        });
        this.setState(nextState);
    }

    handleChangeDateValue(event, date, type) {
        var nextState = update(this.state, {
             employee: {[type]: {$set: date}}
        });
        this.setState(nextState);
    }

    render() {
        var employeeListDetail = {};
        if (this.state.searchMode){
            employeeListDetail = this.state.searchEmployee.map( employee =>
            <EmployeeListDetail key={employee.id} employee={employee} handleTouchTap={this.handleTouchTap}/>
            );
        } else {
            employeeListDetail = this.state.employees.map( employee =>
            <EmployeeListDetail key={employee.id} employee={employee} handleTouchTap={this.handleTouchTap}/>
            );
        }

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

        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(Constants.themeIndigo500)}>
                    <AppBar>
                        <div className="app-bar-user-img">
                            <IconButton iconStyle={Constants.mediumIcon}>
                                <ActionAccountCircle color={white}/>
                            </IconButton>
                        </div>
                        <div className="app-bar-user-info">
                            <span>
                                {this.state.employee.firstName} {this.state.employee.lastName}<br />
                                {this.state.employee.grade}
                            </span>
                        </div>
                        <IconButton tooltip="Setting" iconStyle={Constants.mediumIcon}>
                            <ActionSettings color={white} />
                        </IconButton>
                        <IconButton tooltip="Logout" iconStyle={Constants.mediumIcon}>
                            <ActionPowerSettingsNew color={white} />
                        </IconButton>
                    </AppBar>
                </MuiThemeProvider>
                <MuiThemeProvider muiTheme={getMuiTheme(Constants.themeIndigo400)}>
                    <div>
                        <div className="panel-list">
                            <div className="panel-list-header">
                                <IconButton tooltip="Search">
                                    <ActionSearch color={white} />
                                </IconButton>
                                <TextField
                                    id="search"
                                    hintText="Search"
                                    onChange={this.handleSearchEmployee.bind(this)}
                                    onBlur={this.handleUnsearchEmployee.bind(this)}
                                    underlineStyle={{display: 'none'}}
                                    style ={{width: '55%'}}
                                    inputStyle={Constants.colorWhite}
                                    hintStyle={Constants.colorWhite}/>
                                <IconButton tooltip="Order">
                                    <AvSortByAlpha color={white} />
                                </IconButton>
                                <IconButton tooltip="Filter">
                                    <ContentFilterList color={white} />
                                </IconButton>
                                <span className="panel-list-length">{this.state.employees.length}</span>
                            </div>
                            <div className="panel-list-container">
                                {employeeListDetail.length > 0 ? (
                                    <List>
                                        {employeeListDetail}
                                    </List>
                                ) : (
                                    <span>No Record Found</span>
                                )}
                                <div>
                                    <EmployeeDialog employee={this.state.employee} handleAddEmployee={this.handleAddEmployee}/>
                                </div>
                            </div>
                        </div>
                        <div className="panel-tab">
                            <Tabs>
                                <Tab icon={<ActionAccountBox />} >
                                  <div className="content">
                                    <h2>Employee</h2>
                                    <div className="content" >
                                        <input type="hidden" id="employeeId" value={this.state.employee.id}/>
                                        <TextField
                                            value={this.state.employee.firstName}
                                            floatingLabelText="First Name"
                                            errorText={this.state.employee.firstName==""?this.state.errorTextRequired:""}
                                            onChange={event => this.handleChangeValue(event, 'firstName')}
                                            disabled={this.state.editMode}
                                        /><br />
                                        <TextField
                                            value={this.state.employee.lastName}
                                            floatingLabelText="Last Name"
                                            errorText={this.state.employee.lastName==""?this.state.errorTextRequired:""}
                                            onChange={event => this.handleChangeValue(event, 'lastName')}
                                            disabled={this.state.editMode}
                                        /><br />
                                        <SelectField
                                            value={this.state.employee.gender}
                                            floatingLabelText="Gender"
                                            errorText={this.state.employee.gender==""?this.state.errorTextRequired:""}
                                            onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'gender')}
                                            disabled={this.state.editMode} >
                                            <MenuItem value={"M"} primaryText="Male" />
                                            <MenuItem value={"F"} primaryText="Female" />
                                        </SelectField><br />
                                        <DatePicker
                                            value={this.state.employee.dob}
                                            floatingLabelText="Date of Birth"
                                            errorText={this.state.employee.dob==""?this.state.errorTextRequired:""}
                                            onChange={(event, date) =>  this.handleChangeDateValue(event, date, 'dob')}
                                            autoOk={true}
                                            disabled={this.state.editMode}
                                        />
                                        <TextField
                                            value={this.state.employee.nationality}
                                            floatingLabelText="Nationality"
                                            onChange={event => this.handleChangeValue(event, 'nationality')}
                                            disabled={this.state.editMode}
                                        /><br />
                                        <SelectField
                                            value={this.state.employee.maritalStatus}
                                            floatingLabelText="Marital Status"
                                            onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'maritalStatus')}
                                            disabled={this.state.editMode}>
                                            <MenuItem value={"S"} primaryText="Single" />
                                            <MenuItem value={"M"} primaryText="Married" />
                                        </SelectField><br />
                                        <TextField
                                            value={this.state.employee.phone}
                                            floatingLabelText="Phone"
                                            errorText={this.state.employee.phone==""?this.state.errorTextRequired:""}
                                            onChange={event => this.handleChangeValue(event, 'phone')}
                                            disabled={this.state.editMode}
                                        /><br />
                                    </div>
                                    <div className="content">
                                        <TextField
                                        	value={this.state.employee.subDivision}
                                        	floatingLabelText="Sub Division"
                                        	errorText={this.state.employee.subDivision==""?this.state.errorTextRequired:""}
                                        	onChange={event => this.handleChangeValue(event, 'subDivision')}
                                        	disabled={this.state.editMode}
                                        /><br />
                                        <SelectField
                                        	value={this.state.employee.status}
                                        	floatingLabelText="Status"
                                        	onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'status')}
                                        	disabled={this.state.editMode} >
                                        	<MenuItem value={"C"} primaryText="Contract" />
                                        	<MenuItem value={"P"} primaryText="Permanent" />
                                        </SelectField><br />
                                        <DatePicker
                                        	value={this.state.employee.suspendDate}
                                        	floatingLabelText="Suspend Date"
                                        	onChange={(event, date) =>  this.handleChangeDateValue(event, date, 'suspendDate')}
                                        	autoOk={true}
                                        	disabled={this.state.editMode}
                                        />
                                        <DatePicker
                                        	value={this.state.employee.hireDate}
                                        	floatingLabelText="Hire Date"
                                        	onChange={(event, date) =>  this.handleChangeDateValue(event, date, 'hireDate')}
                                        	autoOk={true}
                                        	disabled={this.state.editMode}
                                        />
                                        <SelectField
                                        	value={this.state.employee.grade}
                                        	floatingLabelText="Grade"
                                        	errorText={this.state.employee.grade==""?this.state.errorTextRequired:""}
                                        	onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'grade')}
                                        	disabled={this.state.editMode} >
                                        	<MenuItem value={"SEJP"} primaryText="SE - JP" />
                                        	<MenuItem value={"SEPG"} primaryText="SE - PG" />
                                        	<MenuItem value={"SEAP"} primaryText="SE - AP" />
                                        	<MenuItem value={"SEAN"} primaryText="SE - AN" />
                                        </SelectField><br />
                                        <SelectField
                                        	value={this.state.employee.division}
                                        	floatingLabelText="Division"
                                        	errorText={this.state.employee.division==""?this.state.errorTextRequired:""}
                                        	onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'division')}
                                        	disabled={this.state.editMode} >
                                        	<MenuItem value={"SWDR"} primaryText="SWD Red" />
                                        	<MenuItem value={"SWDG"} primaryText="SWD Green" />
                                        	<MenuItem value={"SWDB"} primaryText="SWD Blue" />
                                        	<MenuItem value={"SWDBl"} primaryText="SWD Black" />
                                        	<MenuItem value={"CDC"} primaryText="CDC" />
                                        </SelectField><br />
                                        <TextField
                                        	value={this.state.employee.email}
                                        	floatingLabelText="Email"
                                        	errorText={this.state.employee.email==""?this.state.errorTextRequired:""}
                                        	onChange={event => this.handleChangeValue(event, 'email')}
                                        	disabled={this.state.editMode}
                                        /><br />
                                    </div>
                                    <div className="content">
                                        <Avatar
                                          src={require("../images/kholishul_a.jpg")}
                                          size={100}
                                        />
                                    </div>
                                  </div>
                                </Tab>
                                <Tab icon={<ActionHistory />} >
                                  <div className="content">
                                    <h2>History</h2>
                                  </div>
                                </Tab>
                                <Tab icon={<MapsLayers />} >
                                  <div className="content">
                                    <h2>Grade</h2>
                                  </div>
                                </Tab>
                                <Tab icon={<NotificationWc />} >
                                  <div className="content">
                                    <h2>Family Member</h2>
                                  </div>
                                </Tab>
                                <Tab icon={<ActionHome />} >
                                  <div className="content">
                                    <h2>Address</h2>
                                  </div>
                                </Tab>
                                <Tab icon={<CommunicationLocationOn />} >
                                  <div className="content">
                                      <h2>Employee</h2>
                                      <div className="content" >
                                            <SelectField
                                                value={this.state.employee.office}
                                                floatingLabelText="Office"
                                                errorText={this.state.employee.office==""?this.state.errorTextRequired:""}
                                                onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'office')}
                                                disabled={this.state.editMode} >
                                                <MenuItem value={"JKT"} primaryText="Jakarta" />
                                                <MenuItem value={"JOG"} primaryText="Yogyakarta" />
                                                <MenuItem value={"SBY"} primaryText="Surabaya" />
                                                <MenuItem value={"DPS"} primaryText="Bali" />
                                            </SelectField>
                                      </div>
                                  </div>
                                </Tab>
                              </Tabs>
                        </div>
                        <div className="foot">
                        { (this.state.editMode) ? (
                            <div className="foot-btn">
                                <RaisedButton
                                    label={"Delete"}
                                    secondary={true}
                                    onTouchTap={this.handleOpenDeleteDialog.bind(this)}
                                />
                                <RaisedButton
                                    label={"Edit"}
                                    secondary={true}
                                    onTouchTap={this.handleEditMode.bind(this)}
                                />
                            </div> ):(
                            <div className="foot-btn">
                                <RaisedButton
                                    label={"Cancel"}
                                    onTouchTap={this.handleCancel.bind(this)}
                                />
                                <RaisedButton
                                    label={"Save"}
                                    secondary={true}
                                    onTouchTap={this.handleUpdateEmployee.bind(this)}
                                />
                            </div> )}
                        </div>
                        <div>
                            <Dialog
                                open={this.state.deleteDialogIsOpen}
                                title="Delete Employee"
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
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Dashboard;