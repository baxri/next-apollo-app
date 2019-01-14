this.schema = {
    title: "Main information",
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



    names: {
        classNames: "one-line",
    },
    published: {
        // "ui:widget": "radio", 
        // "ui:options": {
        //     inline: true
        // }
    },
    // regitered_at: {
    //     "ui:widget": "alt-date",
    //     "ui:options": {
    //         yearsRange: [1980, 2030],
    //         hideNowButton: true,
    //         hideClearButton: true,
    //         inline: true
    //     },
    // }
};