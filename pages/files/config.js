
export const entity = 'File';
export const entityPlurar = 'Files';

export const resource = '/filemanager/folders';
export const route = 'files';

export const schema = {
    name: {
        label: 'Name',
        placeholder: 'Enter name',
        type: 'text',
        fillable: true,
        default: ''
    },
    status: {
        label: 'Status',
        type: 'select',
        options: [
            { label: 'Published', value: 1 },
            { label: 'Unpublished', value: 0 },
        ],
        fillable: true,
        default: 1,
        render: (status) => {
            return status == 1 ? 'Published' : 'Unbublished'
        }
    },
    created_at: {
        label: 'Ceated At',
        type: 'date',
        fillable: false,
    },
};