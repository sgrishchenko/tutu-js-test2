import $ from 'jquery'
import React from 'react';
import ReactDOM from 'react-dom';

import SearchField from 'searchField';
import Details from 'details';
import PaginationTable from 'paginationTable';

class TableWithData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            detailObj: null,
            page: 0
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.selectPage = this.selectPage.bind(this);
    }

    handleSearch(text) {
        this.selectPage(0);
        this.setState({
            searchText: text
        })
    }

    handleSelect(obj) {
        this.setState({
            detailObj: obj
        })
    }

    selectPage(page) {
        this.setState({
            page: page
        })
    }

    render() {
        return (
            <div>
                <SearchField onSearch={this.handleSearch} searchText={this.state.searchText}/>
                <PaginationTable sizes={[10, 20, 50]}
                                 data={this.props.data}
                                 details={this.props.details}

                                 page={this.state.page}
                                 searchText={this.state.searchText}
                                 selectedObj={this.state.detailObj}

                                 selectPage={this.selectPage}
                                 onSelect={this.handleSelect}/>
                <Details obj={this.state.detailObj}/>
            </div>
        );
    }
}

$(() => {
    let url = 'http://www.filltext.com/';
    let params = {
        rows: 1000,
        id: '{number|1000}',
        firstName: '{firstName}',
        lastName: '{lastName}',
        email: '{email}',
        phone: '{phone|(xxx)xxx-xx-xx}',
        adress: '{addressObject}',
        description: '{lorem|32}'
    };
    $.getJSON(url, params, (data) => {
        ReactDOM.render(
            <TableWithData data={data} details={['adress', 'description']}/>,
            document.getElementById('content')
        );
    })
});