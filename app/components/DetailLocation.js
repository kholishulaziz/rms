import React, {Component} from 'react';
import update from 'react-addons-update';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class DetailLocation extends Component {

    constructor(props, context) {
        super(props, context);
    }

    handleChangeValue(event, type) {
        var nextState = update(this.props, {
             employee: {[type]: {$set: event.target.value}}
        });
        this.props.setCurrentEmployee(nextState.employee);
    }

    handleChangeSelectValue(event, index, value, type) {
        var nextState = update(this.props, {
             employee: {[type]: {$set: value}}
        });
        this.props.setCurrentEmployee(nextState.employee);
    }

    handleChangeDateValue(event, date, type) {
        var nextState = update(this.props, {
             employee: {[type]: {$set: date}}
        });
        this.props.setCurrentEmployee(nextState.employee);
    }

    render() {

        return(
            <div className="content-container">
                <h2 className="content-header">Location</h2>
                <div className="content" >
                    <SelectField
                        value={this.props.employee.office}
                        floatingLabelText="Office"
                        errorText={this.props.employee.office==""?this.props.errorTextRequired:""}
                        onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'office')}
                        disabled={this.props.viewMode} >
                        <MenuItem value={"DPS"} primaryText="Bali" />
                        <MenuItem value={"JOG"} primaryText="Yogyakarta" />
                        <MenuItem value={"BDG"} primaryText="Bandung" />
                        <MenuItem value={"JKT"} primaryText="Jakarta" />
                        <MenuItem value={"SBY"} primaryText="Surabaya" />
                    </SelectField>
                </div>
            </div>
        );
    }
}

export default DetailLocation;