import React, { Component } from 'react'

import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from "moment";

export default class DatePicker extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: null,
        }
    }

    componentWillMount() {
        const { name } = this.props;
        this.setState({ name });
    }

    handleEvent = (event, picker) => {

        const { onChange } = this.props;
        const { name } = this.state;

        const e = {
            target: {
                name: name,
                value: picker.startDate.format("YYYY-MM-DD"),
            }
        };

        if (onChange) onChange(e);
    }

    render() {
        const { children, value } = this.props;

        let date = new Date();

        if (value) {
            date = moment(value)
        }

        return (
            <DateRangePicker startDate={date} singleDatePicker={true} onEvent={this.handleEvent}>
                {children}
            </DateRangePicker>
        )
    }
}
