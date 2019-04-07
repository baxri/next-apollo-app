
export const schema = {
    name: {
        label: 'Name',
        placeholder: 'Enter name',
        type: 'text',
        fillable: true,
    },
    status: {
        label: 'Status',
        type: 'select',
        options: [
            { label: 'Published', value: 1 },
            { label: 'Unpublished', value: 0 },
        ],
        fillable: true,
    },
    created_at: {
        label: 'Ceated At',
        type: 'date',
        fillable: false,
    },
};