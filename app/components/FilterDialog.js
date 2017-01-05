import React, {Component} from 'react';
import update from 'react-addons-update';
import SearchInput, {createFilter} from 'react-search-input';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

import MapsLayers from 'material-ui/svg-icons/maps/layers';

class FilterDialog extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            grade: {
                SE1: true,
                SE2: true,
                SE3: true,
                SE4: true,
            },
            office: {
                DPS: true,
                JOG: true,
                BDG: true,
                JKT: true,
                SBY: true
            }
        }
    }

    handleChangeAllGradeValue(event, checked) {
        var nextState = update(this.state, {
             grade: {
                SE1: {$set: event.target.checked},
                SE2: {$set: event.target.checked},
                SE3: {$set: event.target.checked},
                SE4: {$set: event.target.checked}
             }
        });
        this.setState({
            grade: nextState.grade
        });
    }

    handleChangeGradeValue(event, checked, type) {
        var nextState = update(this.state, {
             grade: {[type]: {$set: event.target.checked}}
        });
        this.setState({
            grade: nextState.grade
        });
    }

    handleChangeAllOfficeValue(event, checked) {
        var nextState = update(this.state, {
             office: {
                DPS: {$set: event.target.checked},
                JOG: {$set: event.target.checked},
                BDG: {$set: event.target.checked},
                JKT: {$set: event.target.checked},
                SBY: {$set: event.target.checked},
             }
        });
        this.setState({
            office: nextState.office
        });
    }

    handleChangeOfficeValue(event, checked, type) {
        var nextState = update(this.state, {
             office: {[type]: {$set: event.target.checked}}
        });
        this.setState({
            office: nextState.office
        });
    }

    handleFilterOption(){
    	// working
    	var employees   = this.props.employees;
        var grade       = (this.state.grade.SE1) && (this.state.grade.SE2) &&
                            (this.state.grade.SE3) && (this.state.grade.SE4);
        var office      = (this.state.office.DPS) && (this.state.office.JOG) && (this.state.office.BDG) &&
                            (this.state.office.JKT) && (this.state.office.SBY);
        if (!grade){
            employees = this.filterByGrade(employees);
        }
        if (!office){
            employees = this.filterByOffice(employees);
        }
        var filterMode = !(grade && office);
        this.props.handleSetFilterEmployee(employees, filterMode);
        if (employees.length){
            this.props.setCurrentEmployee(employees[0]);
        }
        this.handleCloseFilterDialog();
    }

    filterByGrade(employees){
        var grade = this.state.grade;
        var unCheckedGrade = Object.keys(grade).filter( g => {if (grade[g] == false) return g;});
        var toDelete = new Set(unCheckedGrade);
        var filterEmployee= employees.filter(employee => !toDelete.has(employee.grade));
        //console.log(filterEmployee);
        return filterEmployee;
    }

    filterByOffice(employees){
        var office = this.state.office;
        var unCheckedOffice = Object.keys(office).filter( o => {if (office[o] == false) return o;});
        var toDelete = new Set(unCheckedOffice);
        var filterEmployee= employees.filter(employee => !toDelete.has(employee.office));
        //console.log(filterEmployee);
        return filterEmployee;
    }


    handleCloseFilterDialog() {
        this.props.handleCloseFilterDialog();
    }

    render() {

        const actionsFilterBtn = [
            <RaisedButton
                label="Ok"
                secondary={true}
                keyboardFocused={true}
                onTouchTap={this.handleFilterOption.bind(this)}
            />
        ];

        var grade = (this.state.grade.SE1) && (this.state.grade.SE2) &&
            (this.state.grade.SE3) && (this.state.grade.SE4);
        var office = (this.state.office.DPS) && (this.state.office.JOG) && (this.state.office.BDG) &&
            (this.state.office.JKT) && (this.state.office.SBY);

        return(
            <Dialog
                title="Filter Option"
                open={this.props.filterDialogIsOpen}
                actions={actionsFilterBtn}
                onRequestClose={this.handleCloseFilterDialog.bind(this)}
                contentStyle={{minWidth: "320px", maxWidth: "450px"}}
                autoScrollBodyContent={true}
                >
                    <List className="content-min-container">
                        <ListItem
                            primaryText="Grade"
                            leftCheckbox={
                                <Checkbox
                                    checked={grade}
                                    onClick={(event, checked) => this.handleChangeAllGradeValue(event, checked)}
                                />}
                            initiallyOpen={!grade}
                            nestedItems={[
                                <ListItem
                                    key={"SE1"}
                                    primaryText="SE - JP"
                                    leftCheckbox={
                                        <Checkbox
                                            checked={this.state.grade.SE1}
                                            onClick={(event, checked) => this.handleChangeGradeValue(event, checked, 'SE1')}
                                        />}
                                />,
                                <ListItem
                                    key={"SE2"}
                                    primaryText="SE - PG"
                                    leftCheckbox={
                                        <Checkbox
                                            checked={this.state.grade.SE2}
                                            onClick={(event, checked) => this.handleChangeGradeValue(event, checked, 'SE2')}
                                        />}
                                />,
                                <ListItem
                                    key={"SE3"}
                                    primaryText="SE - AP"
                                    leftCheckbox={
                                        <Checkbox
                                            checked={this.state.grade.SE3}
                                            onClick={(event, checked) => this.handleChangeGradeValue(event, checked, 'SE3')}
                                        />}
                                />,
                                <ListItem
                                    key={"SE4"}
                                    primaryText="SE - AN"
                                    leftCheckbox={
                                        <Checkbox
                                            checked={this.state.grade.SE4}
                                            onClick={(event, checked) => this.handleChangeGradeValue(event, checked, 'SE4')}
                                        />}
                                />,
                            ]}
                        />
                        <ListItem
                            primaryText="Office"
                            leftCheckbox={
                                <Checkbox
                                    checked={office}
                                    onClick={(event, checked) => this.handleChangeAllOfficeValue(event, checked)}
                                />}
                            initiallyOpen={!office}
                            nestedItems={[
                                <ListItem
                                    key={"DPS"}
                                    primaryText="Bali"
                                    leftCheckbox={
                                        <Checkbox
                                            checked={this.state.office.DPS}
                                            onClick={(event, checked) => this.handleChangeOfficeValue(event, checked, 'DPS')}
                                        />}
                                />,
                                <ListItem
                                    key={"JOG"}
                                    primaryText="Yogyakarta"
                                    leftCheckbox={
                                        <Checkbox
                                            checked={this.state.office.JOG}
                                            onClick={(event, checked) => this.handleChangeOfficeValue(event, checked, 'JOG')}
                                        />}
                                />,
                                <ListItem
                                    key={"BDG"}
                                    primaryText="Bandung"
                                    leftCheckbox={
                                        <Checkbox
                                            checked={this.state.office.BDG}
                                            onClick={(event, checked) => this.handleChangeOfficeValue(event, checked, 'BDG')}
                                        />}
                                />,
                                <ListItem
                                    key={"JKT"}
                                    primaryText="Jakarta"
                                    leftCheckbox={
                                        <Checkbox
                                            checked={this.state.office.JKT}
                                            onClick={(event, checked) => this.handleChangeOfficeValue(event, checked, 'JKT')}
                                        />}
                                />,
                                <ListItem
                                    key={"SBY"}
                                    primaryText="Surabaya"
                                    leftCheckbox={
                                        <Checkbox
                                            checked={this.state.office.SBY}
                                            onClick={(event, checked) => this.handleChangeOfficeValue(event, checked, 'SBY')}
                                        />}
                                />,
                            ]}
                        />
                    </List>
            </Dialog>
        );
    }
}

export default FilterDialog;