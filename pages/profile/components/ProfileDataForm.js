import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import Form from "react-jsonschema-form";
import { FieldTemplate } from "../../../components/FieldTemplate";

import { UPDATE_USER as MUTATION } from "../../../gql/User";


export default class componentName extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formData: this.props.user,
        };

        this.schema = {
            type: "object",
            required: ["email"],
            properties: {
                // regitered_at: { type: "string", title: "Registered at" },
                email: { type: "string", title: "Email" },
                first_name: { type: "string", title: "Firstname" },
                last_name: { type: "string", title: "Lastname" },
                status: {
                    type: "string",
                    enum: ["active", "inactive"],
                    enumNames: ["Active", "inactive"]
                },
                // published: { type: "boolean", title: "Published", default: true },
            }
        }

        this.uiSchema = {
            published: {
                // "ui:widget": "radio", 
                // "ui:options": {
                //     inline: true
                // }
            },
            regitered_at: {
                "ui:widget": "alt-date",
                "ui:options": {
                    yearsRange: [1980, 2030],
                    hideNowButton: true,
                    hideClearButton: true,
                    inline: true
                },
            }
        };

    }

    handleChange = ({ formData }) => {
        console.log(formData);
    }

    handleSubmit = (formData, action) => {
        console.log(formData);
    }

    handleError = (errors) => {
        console.log(errors);
    }

    render() {

        const { formData } = this.state;

        return (
            <Mutation mutation={MUTATION}>
                {(action, { loading, error }) => {
                    return (<div>
                        <div className="row">
                            <div className="col-12">
                                <Form schema={this.schema} uiSchema={this.uiSchema} formData={formData}
                                    FieldTemplate={FieldTemplate}
                                    onChange={this.handleChange}
                                    onSubmit={({ formData }) => this.handleSubmit(formData, action)}
                                    onError={this.handleError} />
                            </div>
                        </div>
                    </div>)
                }}
            </Mutation>
        )
    }
}
