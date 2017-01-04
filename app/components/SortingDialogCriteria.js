import React, {Component} from 'react';
import update from 'react-addons-update';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class SortingDialogCriteria extends Component {

    constructor(props, context) {
        super(props, context);
    }

    handleChangeSelectValue(event, index, value, type, indexCriteria) {
        var nextState;
        nextState = update(this.props, {
             sorting: {
                [type]: {$set: value}
             }
        });
        this.props.updateSortingCriteria(indexCriteria, nextState);
    }

    render() {
        return(
            <div>
                <FloatingActionButton secondary={true} mini={true}>
                    <NavigationClose />
                </FloatingActionButton>
                <SelectField className="content"
                    value = {this.props.sorting.sortingBy}
                    hintText="Sort By"
                    onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'sortingBy', this.props.indexCriteria)}
                    >
                    <MenuItem value={"firstName"} primaryText="First Name" />
                    <MenuItem value={"lastName"} primaryText="Last Name" />
                    <MenuItem value={"location"} primaryText="Location" />
                    <MenuItem value={"grade"} primaryText="Grade" />
                    <MenuItem value={"hireDate"} primaryText="Join Date" />
                </SelectField><br />
                <SelectField className="content"
                    value = {this.props.sorting.sortingType}
                    hintText="Sort Type"
                    onChange={(event, index, value) =>  this.handleChangeSelectValue(event, index, value, 'sortingType', this.props.indexCriteria)}
                    >
                    <MenuItem value={"ASC"} primaryText="Ascending" />
                    <MenuItem value={"DESC"} primaryText="Descending" />
                </SelectField><br />
            </div>
        );
    }
}

export default SortingDialogCriteria;