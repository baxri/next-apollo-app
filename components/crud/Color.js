import React, { Component } from 'react'
import { ChromePicker } from 'react-color'

class Color extends Component {
    state = {
        name: null,
        background: '#fff',
        displayColorPicker: false,
    };

    componentWillMount() {
        const { value, name } = this.props;

        this.setState({
            name: name,
            background: value,
        });
    }

    handleClick = (e) => {

        e.preventDefault();

        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChangeComplete = (color) => {
        const { onChange, name } = this.props;
        this.setState({ background: color.hex });

        const event = {
            target: {
                name: name,
                value: color.hex,
            }
        };

        if (onChange) onChange(event);
    };

    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
            marginTop: '10px',
        }
        const cover = {
            // position: 'fixed',
            // top: '0px',
            // right: '0px',
            // bottom: '0px',
            // left: '0px',
        }
        return (

            <React.Fragment>
                {/* <button onClick={this.handleClick}>Pick Color</button> */}
                <input type="text" placeholder="Choose color" readOnly name={this.state.name} style={{borderBottomColor: this.state.background, borderBottomWidth: 3}} onFocus={this.handleClick} onBlur={this.handleClose} value={this.state.background} className="form-control" aria-describedby="emailHelp" />
                {this.state.displayColorPicker ? <div style={popover}>
                    <div style={cover} onClick={this.handleClose} />
                    <ChromePicker
                        color={this.state.background}
                        onChangeComplete={this.handleChangeComplete}
                    />
                </div> : null}
            </React.Fragment>
        )
    }
}

export default Color;
