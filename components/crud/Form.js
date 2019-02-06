import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import JsonForm from "react-jsonschema-form";
import { ObjectFieldTemplate, FieldTemplate } from "../JsonFormTemplates";
import { toast } from 'react-toastify';
import Router from 'next/router'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formData: {}
        }
    }

    componentWillMount() {

        const { data, schema } = this.props;
        let formData = {};

        // Break down full data into form segments
        Object.keys(schema.properties).map(key => {
            let object = {};
            Object.keys(schema.properties[key].properties).map(name => {
                object[name] = data[name];
            })
            formData[key] = object;
        })

        this.setState({ formData });
    }

    handleSubmit = (formData, action) => {

        let data = {};

        // Merge all form data 
        Object.keys(formData).map(key => {
            data = { ...data, ...formData[key] };
        });

         toast.success("Successfully saved!");
         Router.push('/folders?saved=true');
         return;

        action({ variables: data }).then(({ data }) => {
            // toast.success("Successfully saved!");
            Router.push('/folders');
        }).catch(err => {
            
            console.log(err.message)
            
            // toast.error(err.graphQLErrors['message']);
            toast.error(err.message);

        })
    }

    handleError = (errors) => {
        // console.log(errors);
    }

    render() {

        const { formData } = this.state;
        const { mutation, schema, uischema } = this.props;

        return (
            <Mutation mutation={mutation}>
                {(action, { loading, error }) => {
                    return (<div>
                        <div className="row">
                            <div className="col-12">
                                <JsonForm schema={schema} uiSchema={uischema} formData={formData}
                                    ObjectFieldTemplate={ObjectFieldTemplate}
                                    // FieldTemplate={FieldTemplate}
                                    onSubmit={({ formData }) => this.handleSubmit(formData, action)}
                                    onError={this.handleError} >
                                    <div>
                                        <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
                                    </div>
                                </JsonForm>
                            </div>
                        </div>
                    </div>)
                }}
            </Mutation>
        )
    }
}
