import React, { Component } from 'react'

import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class Wysiwyg extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false,
            editorState: EditorState.createEmpty(),
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show: true
            });
        })
    }

    getCode = () => {
        alert(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    }

    render() {

        const { show } = this.state;

        if (!show) return <div></div>

        return (
            <div>
                <Editor
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorStateChange}
                />

                <button className="btn btn-primary" onClick={this.getCode}>Display Code</button>
            </div>
        )
    }
}
