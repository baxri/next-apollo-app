import React, { Component } from 'react'
import Card from "./Card";
import SocialIcons from "./SocialIcons";

export default class componentName extends Component {
    render() {
        return (
            <div>

                <Card title="10 Reasons to dump your CRM">
                    <p>Too Confusing
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <p>Too Expensive
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Card>

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
