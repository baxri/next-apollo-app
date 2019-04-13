import React, { Component } from 'react'

import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class Wysiwyg extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: null,
            show: false,
            editorState: null,
        };
    }

    getCode = (e) => {
        e.preventDefault();
        const content = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
        alert(content);
    }

    componentDidMount() {
        const { value, name } = this.props;

        const contentBlock = htmlToDraft(value);
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);

        setTimeout(() => {
            this.setState({
                name: name,
                show: true,
                editorState: editorState,
            });
        })
    }

    onEditorStateChange = (editorState) => {

        const { onChange } = this.props;
        const { name } = this.state;

        this.setState({
            editorState,
        });

        const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

        const event = {
            target: {
                name: name,
                value: content,
            }
        };

        if (onChange) onChange(event);
    }

    render() {

        const { show, editorState } = this.state;

        if (!show) return <div></div>

        return (
            <div>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={this.onEditorStateChange}
                />

                <button className="btn btn-primary" onClick={this.getCode}>Display Code</button>
            </div>
        )
    }
}
