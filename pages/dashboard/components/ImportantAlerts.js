import React, { Component } from 'react'

export default class ImportantAlerts extends Component {
    render() {
        return (
            <div className="alerts">
                <div className="alert alert-warning" role="alert">
                    File Manager Added: We are happy to announce the ability to manage and upload files directory through your Webmation portal.
                This is a warning alert—check it out!
                </div>
                <div className="alert alert-warning" role="alert">
                Faster Coding: Our team has been hard at work at automating as much of the coding process as possible. We will be able to bring more features to you sooner with the capability.
                </div>
                <style jsx>{`
                    .alerts{
                        font-size: 10pt;
                    }
                `}</style>
            </div>
        )
    }
}
