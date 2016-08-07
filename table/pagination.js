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
            .map((size) => {
                let active = this.props.pageSize == size ? "active" : "";
                return <a href="#" key={size} className={active}
                          onClick={this.handleSelectPageSize.bind(this, [size])}>{size}</a>
            });
        let numbers = [];
        for (let i = 0; i < Math.ceil(this.props.dataSize / this.props.pageSize); i++) {
            let active = this.props.page == i ? "active" : "";
            numbers.push(<a href="#" key={i} className={active}
                            onClick={this.handleSelectPage.bind(this, [i])}>{i + 1}</a>)
        }

        return (
            <div>
                <div className="pageNumbers">
                    <a href="#" onClick={this.prev.bind(this)}>«</a>
                    <a href="#" onClick={this.next.bind(this)}>»</a>
                    {numbers}
                </div>

                <div>{sizes}</div>
            </div>
        );
    }
}
