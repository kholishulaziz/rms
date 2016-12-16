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

    render() {
        return(
            <div>
                <Paper zDepth={1} >
                    <ListItem
                        leftAvatar={<Avatar src={require("../images/kholishul_a.jpg")}/>}
                        rightIcon={<ToogleRadioButtonChecked color={indigo400}/>}
                        onClick={this.props.handleTouchTap.bind(this, this.props.employee)}
                    >
                    <span>
                        <b>{this.props.employee.firstName} {this.props.employee.lastName}</b><br/>
                    </span>
                    <span>
                        <small>{this.props.employee.grade}, {this.props.employee.division}<br/>
                        {this.props.employee.office}, {this.props.employee.phone}</small>
                    </span>
                    </ListItem>
                </Paper>
            </div>
        );
    }
}

export default EmployeeListDetail;