import React from 'react';

import Pagination from 'pagination';
import Table from 'table';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageSize: 10,
            dataSize: props.data.length
        };

        this.selectPageSize = this.selectPageSize.bind(this);
    }

    selectPageSize(size) {
        this.setState({
            pageSize: size
        })
    }

    render() {
        let data = this.props.data.filter(
            (obj) => Object.keys(obj).some(
                (key) => obj[key].toString().toLowerCase().indexOf(this.props.searchText.toLowerCase()) > -1));

        return (
            <div>
                <Pagination sizes={this.props.sizes}

                            dataSize={data.length}
                            page={this.props.page}
                            pageSize={this.state.pageSize}

                            onSelectPage={this.props.selectPage}
                            onSelectPageSize={this.selectPageSize}/>

                <Table data={data}
                       details={this.props.details}
                       onSelect={this.props.onSelect}

                       page={this.props.page}
                       pageSize={this.state.pageSize}/>
            </div>
        );
    }
}