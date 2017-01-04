import React, {Component} from 'react';
import sortBy from 'array-sort-by';

import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import SortingDialogCriteria from './SortingDialogCriteria'

const sortingData = [
    {
       sortingBy: "firstName",
       sortingType: "ASC",
    },
    {
       sortingBy: "grade",
       sortingType: "ASC",
    },

];

class SortingDialog extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            sortings: sortingData,
            sorting: sortingData[0],
        }
    }

    addSortingCriteria(){
        var sortingData = this.state.sortings
        sortingData.push({
            sortingBy: null,
            sortingType: null
        })
        //console.log("-- Add New Sorting Criteria --");
        this.setState({ sortings: sortingData });
    }

    updateSortingCriteria(indexCriteria, nextState) {
        var sortingData = this.state.sortings;
        sortingData[indexCriteria] = nextState.sorting;
        //console.log("-- Update sorting["+indexCriteria+"] --");
        this.setState({
            sortings: sortingData,
            sorting: nextState
        });
    }

    handleSortingOption(){
        var employees = this.props.employees;
        this.state.sortings.map( (sorting, index) =>  {
            //console.log("-- Sorting["+index+"-"+sorting.sortingBy+"] --");
            sortBy(employees, (e) =>   [e[sorting.sortingBy]]  );
        });
        this.props.setCurrentEmployee(employees[0]);
        this.props.handleResetSearch();
        this.handleCloseSortingDialog();
    }

    handleCloseSortingDialog() {
        this.props.handleCloseSortingDialog();
    }

    render() {
        var sortingDialogCriteria = this.state.sortings.map ( (sorting,index) =>
            <SortingDialogCriteria
                key={index} indexCriteria={index}
                updateSortingCriteria={this.updateSortingCriteria.bind(this)}
                sorting={sorting} />
        )

        const actionsSortingBtn = [
            <RaisedButton
                label="Ok"
                secondary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSortingOption.bind(this)}
            />
        ];

        return(
            <Dialog
                title="Sorting Option"
                open={this.props.sortingDialogIsOpen}
                actions={actionsSortingBtn}
                onRequestClose={this.handleCloseSortingDialog.bind(this)}
                >
                <div>
                    <div>
                        <div className="content">
                            <span>Sort By</span>
                        </div>
                        <div className="content">
                            <span>Sort type</span>
                        </div>
                    </div>
                    {sortingDialogCriteria}
                    <div className="panel-list-add">
                        <FloatingActionButton onTouchTap={this.addSortingCriteria.bind(this)}
                            secondary={true} mini={true}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>
                </div>
            </Dialog>
        );
    }
}

export default SortingDialog;