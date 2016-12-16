import React, {Component} from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class EmployeeLocation extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <div>
                <h2>Location</h2>
                    <SelectField
                        value={this.props.employee.office}
                        floatingLabelText="Office"
                        disabled={this.props.readOnly} >
                        <MenuItem value={"JKT"} primaryText="Jakarta" />
                        <MenuItem value={"JOG"} primaryText="Yogyakarta" />
                        <MenuItem value={"SBY"} primaryText="Surabaya" />
                        <MenuItem value={"DPS"} primaryText="Bali" />
                    </SelectField>
                </div>
            );
    }
}

export default EmployeeLocation;