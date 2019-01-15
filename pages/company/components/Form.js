import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import JsonForm from "react-jsonschema-form";
import { FieldTemplate, ObjectFieldTemplate } from "../../../components/JsonFormTemplates";
import { toast } from 'react-toastify';

import { UPDATE_USER as MUTATION } from "../../../gql/User";

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formData: {
                row_1: {
                    account_number_prefix: this.props.user.account_number_prefix,
                    account_number_start: this.props.user.account_number_start,
                    account_number_last: this.props.user.account_number_last,
                    max_users: this.props.user.max_users,
                },
                row_2: {
                    name: this.props.user.name,
                    address1: this.props.user.address1,
                    address2: this.props.user.address2,
                },
                row_3: {
                    city: this.props.user.city,
                    state: this.props.user.state,
                    postal: this.props.user.postal,
                    postal4: this.props.user.postal4,
                    country: this.props.user.country,
                },
                row_4: {
                    phone: this.props.user.phone,
                    fax: this.props.user.fax,
                    website: this.props.user.website,
                },

                row_5: {
                    domain: this.props.user.domain,
                    domain_tld: this.props.user.domain_tld,
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
                        account_number_prefix: { type: "string", title: "Account Number Prefix" },
                        account_number_start: { type: "integer", title: "Starting Account Number" },
                        account_number_last: { type: "integer", title: "Last Account Number" },
                        max_users: { type: "integer", title: "Number of Users" },
                    }
                },
                row_2: {
                    type: "object",
                    title: "none",
                    properties: {
                        name: { type: "string", title: "Name" },
                        address1: { type: "string", title: "Address" },
                        address2: { type: "string", title: "Apt/Suite/Unit" },
                    }
                },
                row_3: {
                    type: "object",
                    title: "none",
                    properties: {
                        city: { type: "string", title: "City" },
                        state: { type: "string", title: "State" },
                        postal: { type: "string", title: "Postal" },
                        postal4: { type: "string", title: "Postal4" },
                        country: { type: "string", title: "Country" },
                    }
                },
                row_4: {
                    type: "object",
                    title: "none",
                    properties: {
                        phone: { type: "string", title: "Phone" },
                        fax: { type: "string", title: "Fax" },
                        website: { type: "string", title: "Website" },
                    }
                },

                row_5: {
                    type: "object",
                    title: "none",
                    properties: {
                        domain: { type: "string", title: "Domain" },
                        domain_tld: { type: "string", title: "Domain Ext" },
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


        toast.success("Successfully saved!");

        console.log(data);
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
                                <JsonForm schema={this.schema} uiSchema={this.uiSchema} formData={formData}
                                    // FieldTemplate={FieldTemplate}
                                    ObjectFieldTemplate={ObjectFieldTemplate}
                                    onChange={this.handleChange}
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
