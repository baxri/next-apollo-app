import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import Form from "react-jsonschema-form";
import { FieldTemplate, ObjectFieldTemplate } from "../../../components/JsonFormTemplates";
import { toast } from 'react-toastify';

import { UPDATE_USER as MUTATION } from "../../../gql/User";

export default class componentName extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formData: {
                row_1: {
                    first_name: this.props.user.first_name,
                    middle_name: this.props.user.middle_name,
                    last_name: this.props.user.last_name,
                },
                row_2: {
                    prefix: this.props.user.first_name,
                    suffix: this.props.user.middle_name,
                    initials: this.props.user.last_name,
                },
                row_3: {
                    birthday: this.props.user.birthday,
                    title: this.props.user.title,
                    signature: this.props.user.signature,
                },
                row_4: {
                    home_phone: this.props.user.home_phone,
                    work_phone: this.props.user.work_phone,
                    ext: this.props.user.ext,
                },
                row_5: {
                    direct_phone: this.props.user.home_phone,
                    mobile: this.props.user.mobile,
                    fax: this.props.user.fax,
                },

                contact_information_1: {
                    twitter: this.props.user.twitter,
                    facebook: this.props.user.facebook,
                    youtube: this.props.user.youtube,
                },

                contact_information_2: {
                    instagram: this.props.user.instagram,
                    snapchat: this.props.user.snapchat,
                    linkedin: this.props.user.linkedin,
                }
            },
        };

        this.schema = {
            type: "object",
            properties: {
                row_1: {
                    title: "none",
                    type: "object",
                    properties: {
                        first_name: { type: "string", title: "Firstname" },
                        middle_name: { type: "string", title: "Middle Name" },
                        last_name: { type: "string", title: "Lastname" },
                    }
                },
                row_2: {
                    type: "object",
                    title: "none",
                    properties: {
                        prefix: { type: "string", title: "Prefix" },
                        suffix: { type: "string", title: "Suffix" },
                        initials: { type: "string", title: "Initials" },
                    }
                },
                row_3: {
                    type: "object",
                    title: "none",
                    properties: {
                        birthday: { type: "string", title: "Birthday" },
                        title: { type: "string", title: "Title" },
                        signature: { type: "string", title: "Signature" },
                    }
                },
                row_4: {
                    type: "object",
                    title: "none",
                    properties: {
                        home_phone: { type: "string", title: "Home Phone" },
                        work_phone: { type: "string", title: "Work Phone" },
                        ext: { type: "string", title: "Ext" },
                    }
                },
                row_5: {
                    type: "object",
                    title: "none",
                    properties: {
                        direct_phone: { type: "string", title: "Direct Phone" },
                        mobile: { type: "string", title: "Mobile" },
                        fax: { type: "string", title: "Fax" },
                    }
                },
                contact_information_1: {
                    title: "Contact Information",
                    type: "object",
                    properties: {
                        twitter: { type: "string", title: "Twitter" },
                        facebook: { type: "string", title: "Facebook" },
                        youtube: { type: "string", title: "Youtube" },
                    }
                },
                contact_information_2: {
                    title: "none",
                    type: "object",
                    properties: {
                        instagram: { type: "string", title: "instagram" },
                        snapchat: { type: "string", title: "snapchat" },
                        linkedin: { type: "string", title: "linkedin" },
                    }
                }
            }
        }

        this.uiSchema = {
            row_1: { classNames: "one-line", "ui:options": { label: false }, },
            row_2: { classNames: "one-line", "ui:options": { label: false }, },
            row_3: { classNames: "one-line", "ui:options": { label: false }, },
            row_4: { classNames: "one-line", "ui:options": { label: false }, },
            row_5: { classNames: "one-line", "ui:options": { label: false }, },
            contact_information_1: { classNames: "one-line", "ui:options": { label: false }, },
            contact_information_2: { classNames: "one-line", "ui:options": { label: false }, },
        };
    }

    handleChange = ({ formData }) => {
        // console.log(formData);
    }

    handleSubmit = (formData, action) => {
        const { row_1, row_2, row_3, row_4, row_5, contact_information_1, contact_information_2 } = formData;
        const { user } = this.props;
        const data = { ...user, ...row_1, ...row_2, ...row_3, ...row_4, ...row_5, ...contact_information_1, ...contact_information_2 };

        console.log(data)

        toast.success("Successfully saved!");
    }

    handleError = (errors) => {
        // console.log(errors);
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
                                    // FieldTemplate={FieldTemplate}
                                    ObjectFieldTemplate={ObjectFieldTemplate}
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
