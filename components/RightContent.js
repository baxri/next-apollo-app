import React, { Component } from 'react'
import Card from "./Card";
import SocialIcons from "./SocialIcons";

export default class componentName extends Component {
    render() {
        return (
            <div>

                <Card title="Tenant Administration">
                    <ul className="administration">
                        <li><a href="#">Admin Accounts</a></li>
                        <li><a href="#">Admin users</a></li>
                        <li><a href="#">Link Tenant</a></li>
                        <li><a href="#">Create New User</a></li>
                        <li><a href="#">Admin Announcement</a></li>
                    </ul>
                </Card>

                <SocialIcons />

                <style jsx>{`

                   .administration a{
                       font-size: 10pt;
                   }

                `}</style>
            </div>
        )
    }
}
