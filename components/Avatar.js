import React, { Component } from 'react'

export default class Avatar extends Component {
    render() {

        const { user } = this.props;

        return (
            <div>
                <img src={user.profile_url} className="rounded-circle" width="120" height="120" />

                <style jsx>{`

                    img{
                        border: 2px solid lightgray;
                    }

                `}</style>
            </div>
        )
    }
}
