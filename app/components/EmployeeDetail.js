import React, {Component} from 'react';

import Avatar from 'material-ui/Avatar';
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

class EmployeeDetail extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <div>
                <h2>Employee</h2>
                <div className="panel-tab-employee-left" >
                    <TextField
                        floatingLabelText="First Name"
                        value={this.props.employee.firstName}
                        disabled={this.props.readOnly}
                    /><br />
                    <TextField
                        floatingLabelText="Last Name"
                        value={this.props.employee.lastName}
                        disabled={this.props.readOnly}
                    /><br />
                    <SelectField
                        value={this.props.employee.gender}
                        floatingLabelText="Gender"
                        disabled={this.props.readOnly} >
                        <MenuItem value={"M"} primaryText="Male" />
                        <MenuItem value={"F"} primaryText="Female" />
                    </SelectField><br />
                    <DatePicker
                        floatingLabelText="Date of Birth"
                        value={this.props.employee.dob}
                        autoOk={true}
                        disabled={this.props.readOnly}
                    /><br />
                    <TextField
                        floatingLabelText="Nationality"
                        value={this.props.employee.nationality}
                        disabled={this.props.readOnly}
                    /><br />
                    <SelectField
                        value={this.props.employee.maritalStatus}
                        floatingLabelText="Marital Status" >
                        <MenuItem value={"S"} primaryText="Single" />
                        <MenuItem value={"M"} primaryText="Married" />
                    </SelectField><br />
                    <TextField
                        floatingLabelText="Phone"
                        value={this.props.employee.phone}
                        disabled={this.props.readOnly}
                    /><br />
                </div>
                <div className="panel-tab-employee-right" >
                    <div className="panel-tab-employee-left">
                        <TextField
                            floatingLabelText="Sub Division"
                            value={this.props.employee.subDivision}
                            disabled={this.props.readOnly}
                        /><br />
                        <SelectField
                            floatingLabelText="Status"
                            value={this.props.employee.status}
                            disabled={this.props.readOnly} >
                            <MenuItem value={"C"} primaryText="Contract" />
                            <MenuItem value={"P"} primaryText="Permanent" />
                        </SelectField><br />
                        <DatePicker
                            floatingLabelText="Suspend Date"
                            value={this.props.employee.suspendDate}
                            autoOk={true}
                            disabled={this.props.readOnly}
                            /><br />
                        <DatePicker
                            floatingLabelText="Hire Date"
                            value={this.props.employee.hireDate}
                            autoOk={true}
                            disabled={this.props.readOnly}
                            /><br />
                        <SelectField
                            floatingLabelText="Grade"
                            value={this.props.employee.grade}
                            disabled={this.props.readOnly} >
                            <MenuItem value={"SEJP"} primaryText="SE - JP" />
                            <MenuItem value={"SEPG"} primaryText="SE - PG" />
                            <MenuItem value={"SEAP"} primaryText="SE - AP" />
                            <MenuItem value={"SEAN"} primaryText="SE - AN" />
                        </SelectField><br />
                        <SelectField
                            floatingLabelText="Division"
                            value={this.props.employee.division}
                            disabled={this.props.readOnly} >
                            <MenuItem value={"SWDR"} primaryText="SWD Red" />
                            <MenuItem value={"SWDG"} primaryText="SWD Green" />
                            <MenuItem value={"SWDB"} primaryText="SWD Blue" />
                            <MenuItem value={"SWDBl"} primaryText="SWD Black" />
                            <MenuItem value={"CDC"} primaryText="CDC" />
                        </SelectField><br />
                        <TextField
                            floatingLabelText="Email"
                            value={this.props.employee.email}
                            disabled={this.props.readOnly}
                        /><br />
                    </div>
                    <div className="panel-tab-employee-right panel-tab-employee-img">
                        <Avatar
                          src={require("../images/kholishul_a.jpg")}
                          size={100}
                        />
                    </div>
                </div>
            </div>
        );
  }
}

export default EmployeeDetail;