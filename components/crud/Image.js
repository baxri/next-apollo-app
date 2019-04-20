import React, { Component } from 'react'
import Image from "../Image";

export default class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            url: null,
            imagePreviewUrl: '',
            name: null,
            value: null,
            type: 0,
        };
    }

    componentWillMount() {
        const { value, name } = this.props;

        this.setState({
            name: name,
            value: value,
            imagePreviewUrl: value,
        });
    }

    _handleImageUrl = (e) => {

        const { onChange } = this.props;

        this.setState({ file: e.target.value, imagePreviewUrl: e.target.value });

        const event = {
            target: {
                name: this.state.name,
                value: e.target.value,
            }
        };

        if (onChange) onChange(event);
    }

    _handleImageChange(e) {
        e.preventDefault();

        const { onChange } = this.props;

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });

            const event = {
                target: {
                    name: this.state.name,
                    value: file,
                }
            };

            if (onChange) onChange(event);
        }

        reader.readAsDataURL(file)
    }

    setType = (type) => {
        this.setState({ type })
    }

    render() {

        const { schema } = this.props;

        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<Image url={imagePreviewUrl} height="100" />);
            // $imagePreview = (<img className="prev-image" src={imagePreviewUrl} height="100" />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div className="row image-uploader">
                <div className="col-12 col-md-6">

                    <div className="btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" className={this.state.type == 0 ? 'btn btn-primary' : 'btn btn-light'} onClick={() => this.setType(0)}>File</button>
                        <button type="button" className={this.state.type == 1 ? 'btn btn-primary' : 'btn btn-light'} onClick={() => this.setType(1)}>Url</button>
                    </div>

                    <br />

                    {this.state.type === 0 && <div className="custom-file form-group">
                        <input type="file" className="custom-file-input" id="validatedCustomFile" onChange={(e) => this._handleImageChange(e)} />
                        <label className="custom-file-label">Choose file...</label>
                    </div>}

                    {this.state.type === 1 && <div className="form-group ">
                        <label>Enter image url:</label>
                        <input type="text" className="form-control" name="url" onChange={this._handleImageUrl} />
                    </div>}

                </div>

                <div className="col-12 col-md-6 align-items-center d-flex align-items-center">
                    {/* {$imagePreview} */}
                    {/* <img className="prev-image" src={this.state.imagePreviewUrl} height={schema.size ? schema.size : 100} /> */}
                    <Image url={this.state.imagePreviewUrl} height={schema.size ? schema.size : 100} />
                </div>

                <style jsx>{`


                .image-uploader{
                    border-bottom: 1px solid #ececec;
                    border-top: 1px solid #ececec;
                    padding-bottom: 20px;
                    padding-top: 20px;
                }

                .prev-image{
                    border-radius: 5px;
                    border: 1px solid lightgray;
                }

                `}</style>
            </div >


        )
    }
}
