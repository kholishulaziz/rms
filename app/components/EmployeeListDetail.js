import React, {Component} from 'react';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import {indigo400} from 'material-ui/styles/colors';

import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import ToogleRadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked';

class EmployeeListDetail extends Component {

    constructor(props, context) {
        super(props, context);
    }

    handleTouchTap(currentEmployee){
        this.props.setCurrentEmployee(currentEmployee);
    }

    render() {

        // lookup
        var grade = ""
        if (this.props.employee.grade === "SE1") {
            grade = "SE - JP";
        } else if (this.props.employee.grade === "SE2") {
            grade = "SE - PG";
        } else if (this.props.employee.grade === "SE3") {
            grade = "SE - AP";
        } else if (this.props.employee.grade === "SE4") {
            grade = "SE - AN";
        } else {
            grade = " - ";
        }
        // lookup
        var division = ""
        if (this.props.employee.division === "SWDR") {
            division = "SWD Red";
        } else if (this.props.employee.division === "SWDG") {
            division = "SWD Green";
        } else if (this.props.employee.division === "SWDB") {
            division = "SWD Blue";
        } else if (this.props.employee.division === "SWDBl") {
            division = "SWD Black";
        } else if (this.props.employee.division === "CDC") {
            division = "CDC"
        } else {
            division = " - ";
        }
        // lookup
        var office = ""
        if (this.props.employee.office === "JKT") {
            office = "Jakarta";
        } else if (this.props.employee.office === "JOG") {
            office = "Yogyakarta";
        } else if (this.props.employee.office === "SBY") {
            office = "Surabaya";
        } else if (this.props.employee.office === "DPS") {
            office = "Bali"
        } else if (this.props.employee.office === "BDG") {
            office = "Bandung"
        } else {
            office = " - ";
        }

        return(
            <div>
                <Paper zDepth={1} >
                    <ListItem
                        leftAvatar={<Avatar src={require("../images/kholishul_a.jpg")}/>}
                        rightIcon={<ToogleRadioButtonChecked color={indigo400}/>}
                        onClick={this.handleTouchTap.bind(this, this.props.employee)}
                    >
                    <span>
                        <b>{this.props.employee.firstName} {this.props.employee.lastName}</b><br/>
                    </span>
                    <span>
                        <small>{grade}, {division}<br/>
                        {office}, {this.props.employee.phone}</small>
                    </span>
                    </ListItem>
                </Paper>
            </div>
        );
    }
}

export default EmployeeListDetail;