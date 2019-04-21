import React from 'react'

export default ({ url, height }) => {
    if (url.length == 0) {
        return (
            <img src="https://www.freeiconspng.com/uploads/no-image-icon-6.png" height={height ? height : 50} className="rounded" />
        )
    }
    return (
        <img src={url} height={height ? height : 50} className="rounded" />
    )
}
