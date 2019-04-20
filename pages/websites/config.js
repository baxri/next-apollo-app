
import Image from "../../components/Image";

export const entity = 'Website';
export const entityPlurar = 'Websites';

export const resource = '/websites';
export const route = 'websites';


export const schema = {

    domain_name: {
        label: 'Domain Name',
        placeholder: 'Enter domain name',
        type: 'text',
        fillable: true,
        default: ''
    },
    domain: {
        label: 'Domain ',
        placeholder: 'Enter Domain',
        type: 'text',
        fillable: true,
        default: ''
    },

    color_primary: {
        label: 'Primary color',
        placeholder: 'Enter primary color',
        type: 'color',
        fillable: true,
        default: '',
        hideFromTable: true,
    },
    color_secondary: {
        label: 'Secondary color',
        placeholder: 'Enter secondary color',
        type: 'color',
        fillable: true,
        default: '',
        hideFromTable: true,
    },
    color_alert: {
        label: 'Color Alert',
        placeholder: 'Enter alert color',
        type: 'color',
        fillable: true,
        default: '',
        hideFromTable: true,
    },
    color_success: {
        label: 'Success color',
        placeholder: 'Enter success color',
        type: 'color',
        fillable: true,
        default: '',
        hideFromTable: true,
    },

    logo_url: {
        label: 'Logo',
        placeholder: 'Enter logo url',
        type: 'image',
        fillable: true,
        default: '',
        render: (value) => {
            // return <img src={value} height="50" className="rounded" />
            return <Image url={value} />
        }
    },

    footer_logo_url: {
        label: 'Footer logo',
        placeholder: 'Enter footer logo url',
        type: 'image',
        fillable: true,
        default: '',
        render: (value) => {
            return <Image url={value} />
        }
    },
    favicon_url: {
        label: 'Favicon url',
        placeholder: 'Enter facicon url',
        type: 'image',
        fillable: true,
        default: '',
        // hideFromTable: true,
        size: 30,
        render: (value) => {
            return <Image url={value} />
        }
    },
    // status: {
    //     label: 'Status',
    //     type: 'select',
    //     options: [
    //         { label: 'Published', value: 1 },
    //         { label: 'Unpublished', value: 0 },
    //     ],
    //     fillable: true,
    //     default: 1,
    //     render: (status) => {
    //         return status == 1 ? 'Published' : 'Unbublished'
    //     }
    // },
    created_at: {
        label: 'Ceated At',
        type: 'date',
        fillable: false,
    },
};