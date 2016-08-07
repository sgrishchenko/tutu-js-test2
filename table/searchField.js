import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onSearch(this.refs.searchInput.value)
    }

    render() {
        return <input ref="searchInput" type="search" value={this.props.searchText} onChange={this.handleChange}/>
    }
}