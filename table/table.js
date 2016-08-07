import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sort: {
                column: 'id',
                type: 'asc'
            }
        };

        this.sort = this.sort.bind(this)
    }

    sort(column) {
        let sortType = 'asc';
        if (column == this.state.sort.column) {
            sortType = sortType == this.state.sort.type ? 'desc' : 'asc'
        }
        this.setState({
            sort: {
                column: column,
                type: sortType
            }
        });
        this.props.selectPage(0);
    }

    render() {
        let props = this.props;
        let titles = Object.keys(props.data[0])
            .filter((key) => !props.details.includes(key))
            .map((key) => <Title key={key} column={key} sort={this.sort} sortState={this.state.sort}/>);
        let rows = props.data;
        let sort = this.state.sort;
        let compare = (a, b) => {
            let result = 0;
            if (a[sort.column] < b[sort.column])
                result = -1;
            if (a[sort.column] > b[sort.column])
                result = 1;

            return sort.type == 'asc' ? result : (-1) * result;
        };

        rows.sort(compare);

        console.log("Sorting: ", sort.column, sort.type);
        console.log("Pagination: ", props.pageSize * props.page, props.pageSize * (props.page + 1));

        rows = rows
            .slice(props.pageSize * props.page, props.pageSize * (props.page + 1))
            .map((obj) => <Row key={JSON.stringify(obj)}
                               obj={obj}
                               details={props.details}
                               selectedObj={props.selectedObj}
                               onSelect={props.onSelect}/>);

        return (
            <table>
                <thead>
                <tr>{titles}</tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
}

class Title extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.sort(this.props.column)
    }

    render() {
        let arrow = this.props.sortState.column == this.props.column
            ? <div className={this.props.sortState.type}></div>
            : <div></div>;

        return (
            <th className="title" onClick={this.handleClick}>
                {this.props.column}{arrow}
            </th>
        );
    }
}

class Row extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.onSelect(this.props.obj)
    }

    render() {
        let details = this.props.details;
        let obj = this.props.obj;
        let selectedObj = this.props.selectedObj;
        let selectedClass = selectedObj && JSON.stringify(selectedObj) == JSON.stringify(obj) ? "selected" : "";
        let cells = Object.keys(obj)
            .filter((key) => !details.includes(key))
            .map((key) => <td key={key}>{obj[key]}</td>);

        return <tr className={selectedClass} onClick={this.handleClick}>{cells}</tr>;
    }
}