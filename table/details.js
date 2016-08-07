import React from 'react';

export default class extends React.Component {
    render() {
        if (!this.props.obj) return null;

        let adress = this.props.obj.adress;
        let description = this.props.obj.description;

        return <div>
            <textarea value={description} readOnly="readonly"/>
            <br/>
            Адрес проживания: <b>{adress.streetAddress}</b>
            <br/>
            Город: <b>{adress.city}</b>
            <br/>
            Провинция/штат: <b>{adress.state}</b>
            <br/>
            Индекс: <b>{adress.zip}</b>
        </div>
    }
}
