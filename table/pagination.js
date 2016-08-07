import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSelectPage(page) {
        this.props.onSelectPage(parseInt(page))
    }

    handleSelectPageSize(size) {
        this.props.onSelectPageSize(parseInt(size))
    }

    next() {
        if ((this.props.page + 1) * this.props.pageSize >= this.props.dataSize) return;
        this.handleSelectPage(this.props.page + 1)
    }

    prev() {
        if (this.props.page <= 0) return;
        this.handleSelectPage(this.props.page - 1)
    }

    render() {
        let sizes = this.props.sizes
            .map((size) => <a href="#" key={size} onClick={this.handleSelectPageSize.bind(this, [size])}> {size} </a>);
        let numbers = [];
        for (let i = 0; i < Math.ceil(this.props.dataSize / this.props.pageSize); i++) {
            numbers.push(<a href="#" key={i} onClick={this.handleSelectPage.bind(this, [i])}> {i + 1} </a>)
        }

        return (
            <div>
                <a href="#" onClick={this.prev.bind(this)}>«</a>
                {numbers}
                <a href="#" onClick={this.next.bind(this)}>»</a>
                |
                {sizes}
            </div>
        );
    }
}
