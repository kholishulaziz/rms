import React, {Component} from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

import MapsLayers from 'material-ui/svg-icons/maps/layers';

class FilterDialog extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            grade: false,
            gradeJP: false,
            gradePG: true,
            gradeAP: true,
            gradeAN: false,
            office: true,
            officeDPS: true,
            officeJOG: true,
            officeBDG: true,
            officeJKT: true,
            officeSBY: true
        }
    }

    handleChangeValue(event, checked, type) {
       var nextState = {};
       nextState[type] = event.target.checked;
       this.setState(nextState);
    }

    handleFilterOption(){
        this.handleCloseFilterDialog();
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
                            leftCheckbox={<Checkbox checked={this.state.grade}/>}
                            initiallyOpen={true}
                            nestedItems={[
                                <ListItem
                                    key={"SE1"}
                                    primaryText="SE - JP"
                                    leftCheckbox={
                                        <Checkbox
                                            checked={this.state.gradeJP}
                                            onClick={(event, checked) => this.handleChangeValue(event, checked, 'gradeJP')}
                                        />}
                                />,
                                <ListItem
                                    key={"SE2"}
                                    primaryText="SE - PG"
                                    leftCheckbox={
                                        <Checkbox
                                            checked={this.state.gradePG}
                                            onClick={(event, checked) => this.handleChangeValue(event, checked, 'gradePG')}
                                        />}
                                />,
                                <ListItem
                                    key={"SE3"}
                                    primaryText="SE - AP"
                                    leftCheckbox={
                                        <Checkbox
                                            checked={this.state.gradeAP}
                                            onClick={(event, checked) => this.handleChangeValue(event, checked, 'gradeAP')}
                                        />}
                                />,
                                <ListItem
                                    key={"SE4"}
                                    primaryText="SE - AN"
                                    leftCheckbox={
                                        <Checkbox
                                            checked={this.state.gradeAN}
                                            onClick={(event, checked) => this.handleChangeValue(event, checked, 'gradeAN')}
                                        />}
                                />,
                            ]}
                        />
                        <ListItem
                            primaryText="Office"
                            leftCheckbox={<Checkbox checked={this.state.office}/>}
                            initiallyOpen={false}
                            nestedItems={[
                                <ListItem
                                    key={"DPS"}
                                    primaryText="Bali"
                                    leftCheckbox={<Checkbox checked={this.state.officeDPS}/>}
                                />,
                                <ListItem
                                    key={"JOG"}
                                    primaryText="Yogyakarta"
                                    leftCheckbox={<Checkbox checked={this.state.officeJOG}/>}
                                />,
                                <ListItem
                                    key={"BDG"}
                                    primaryText="Bandung"
                                    leftCheckbox={<Checkbox checked={this.state.officeBDG}/>}
                                />,
                                <ListItem
                                    key={"JKT"}
                                    primaryText="Jakarta"
                                    leftCheckbox={<Checkbox checked={this.state.officeJKT}/>}
                                />,
                                <ListItem
                                    key={"SBY"}
                                    primaryText="Surabaya"
                                    leftCheckbox={<Checkbox checked={this.state.officeSBY}/>}
                                />,
                            ]}
                        />
                    </List>
            </Dialog>
        );
    }
}

export default FilterDialog;