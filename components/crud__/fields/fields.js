import React from 'react'

export const File = (props) => {

    const { value } = props;

    return (
        <div>
            {value && <div>
                <img height="100" src={value} />
                <br />
                <br />
            </div>}

            <input type="file"
                required={props.required}
                onChange={(event) => processFile(event.target.files).then(props.onChange)} />
            <hr />
        </div>
    )
};

function processFile(files) {
    const f = files[0];
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        console.log(event.target.result)
        reader.onload = (event) => resolve(event.target.result);
        reader.readAsDataURL(f);
    });
}
