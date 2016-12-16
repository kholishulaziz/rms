import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import {white} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
import EmployeeDetail from './EmployeeDetail'
import EmployeeLocation from './EmployeeLocation'
import EmployeeDialog from './EmployeeDialog'

var employeesData = [
    {
        id: 'kholishul_aziz',
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
    }
];

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            employees: employeesData,
            employee: employeesData[0],
            readOnly: false
        }
        console.log(this.state)
    }

    setEmployee(currentEmployee) {
        this.setState({
            employee: currentEmployee
        })
    }

    addEmployee(newEmployee){
        var employeesData = this.state.employees
        employeesData.push(newEmployee)
        console.log(newEmployee);
        this.setState({ employees: employeesData })
    }

    handleTouchTap(currentEmployee){
        var parent = this._reactInternalInstance._currentElement._owner._instance;
        parent.setEmployee(currentEmployee);
    }

    handleAddEmployee(newEmployee){
        var parent = this._reactInternalInstance._currentElement._owner._instance;
        parent.addEmployee(newEmployee);
    }

    render() {
        var employeeListDetail = this.state.employees.map( employee =>
            <EmployeeListDetail key={employee.id} employee={employee} handleTouchTap={this.handleTouchTap}/>
        );

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
                        <div className="panel">
                            <div className="panel-list">
                                <div className="panel-list-header">
                                    <IconButton tooltip="Search">
                                        <ActionSearch color={white} />
                                    </IconButton>
                                    <TextField
                                        className="search"
                                        hintText="Search"
                                        underlineStyle={{display: 'none'}}
                                        style ={{width: '40%'}}
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
                                <div>
                                    <div className="panel-list-container">
                                        <List>
                                            {employeeListDetail}
                                        </List>
                                    </div>
                                    <EmployeeDialog handleAddEmployee={this.handleAddEmployee}/>
                                </div>
                            </div>
                            <div className="panel-tab">
                                <Tabs>
                                    <Tab icon={<ActionAccountBox />} >
                                      <div className="panel-tab-content">
                                        <EmployeeDetail employee={this.state.employee} readOnly={this.state.readOnly}/>
                                      </div>
                                    </Tab>
                                    <Tab icon={<ActionHistory />} >
                                      <div className="panel-tab-content">
                                        <h2>History</h2>
                                      </div>
                                    </Tab>
                                    <Tab icon={<MapsLayers />} >
                                      <div className="panel-tab-content">
                                        <h2>Grade</h2>
                                      </div>
                                    </Tab>
                                    <Tab icon={<NotificationWc />} >
                                      <div className="panel-tab-content">
                                        <h2>Family Member</h2>
                                      </div>
                                    </Tab>
                                    <Tab icon={<ActionHome />} >
                                      <div className="panel-tab-content">
                                        <h2>Address</h2>
                                      </div>
                                    </Tab>
                                    <Tab icon={<CommunicationLocationOn />} >
                                      <div className="panel-tab-content">
                                        <EmployeeLocation employee={this.state.employee} readOnly={this.state.readOnly}/>
                                      </div>
                                    </Tab>
                                  </Tabs>
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Dashboard;