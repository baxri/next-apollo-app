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
                // email: { type: "string", title: "Email" },
                first_name: { type: "string", title: "Firstname" },
                middle_name: { type: "string", title: "Middle Name" },
                last_name: { type: "string", title: "Lastname" },

                prefix: { type: "string", title: "Prefix" },
                suffix: { type: "string", title: "Suffix" },
                initials: { type: "string", title: "Initials" },
                birthday: { type: "string", title: "Birthday" },
                title: { type: "string", title: "Title" },
                signature: { type: "string", title: "Signature" },
                home_phone: { type: "string", title: "Home Phone" },
                work_phone: { type: "string", title: "Work Phone" },
                ext: { type: "string", title: "Ext" },
                direct_phone: { type: "string", title: "Direct Phone" },
                mobile: { type: "string", title: "Mobile" },
                fax: { type: "string", title: "Fax" },
                
                twitter: { type: "string", title: "Twitter" },
                facebook: { type: "string", title: "Facebook" },
                youtube: { type: "string", title: "Youtube" },
                google: { type: "string", title: "Google" },
                instagram: { type: "string", title: "Instagram" },
                snapchat: { type: "string", title: "Snapchat" },
                linkedin: { type: "string", title: "Linkedin" },

                // status: {
                //     type: "string",
                //     enum: ["active", "inactive"],
                //     enumNames: ["Active", "inactive"]
                // },
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
