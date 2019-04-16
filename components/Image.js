import React from 'react'

export default ({ url }) => {

    console.log(url)

    if (url.length == 0) {

        return (
            <img src="https://www.freeiconspng.com/uploads/no-image-icon-6.png" height="50" className="rounded" />
        )
    }

    return (
        <img src={url} height="50" className="rounded" />
    )
}
