import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import {white} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import EmployeesData from '../data/EmployeesData'
import Constants from '../data/Constants';
import EmployeeDialog from './EmployeeDialog'
import EmployeeList from './EmployeeList'
import EmployeeTab from './EmployeeTab'

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            employees: EmployeesData,
            employee: EmployeesData[0],
        }
        console.log("-- Init State --");
        console.log(this.state);
    }

    setEmployees(employees) {
        this.setState({
            employees: employees
        })
    }

    setCurrentEmployee(currentEmployee) {
        this.setState({
            employee: currentEmployee
        })
    }

    render() {
        // lookup
        var grade = ""
        if (this.state.employee.grade === "SE1") {
            grade = "SE - JP";
        } else if (this.state.employee.grade === "SE2") {
            grade = "SE - PG";
        } else if (this.state.employee.grade === "SE3") {
            grade = "SE - AP";
        } else if (this.state.employee.grade === "SE4") {
            grade = "SE - AN";
        } else {
            grade = " - ";
        }

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
                                <small>{grade}</small>
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
                    <div className="panel-container">
                        <div className="panel-list">
                            <EmployeeList
                                employees={this.state.employees}
                                setCurrentEmployee={this.setCurrentEmployee.bind(this)}
                            />
                        </div>
                        <div className="panel-tab">
                            <EmployeeTab
                                employees={this.state.employees}
                                employee={this.state.employee}
                                setEmployees={this.setEmployees.bind(this)}
                                setCurrentEmployee={this.setCurrentEmployee.bind(this)}
                            />
                        </div>
                        <div>
                            <EmployeeDialog
                                employees={this.state.employees}
                                employee={this.state.employee}
                                setEmployees={this.setEmployees.bind(this)}
                            />
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Dashboard;