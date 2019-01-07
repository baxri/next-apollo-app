import React, { Component } from 'react'
import Card from "./Card";

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

                <Card title="Let's Connect">
                    <div className="lets-connect">
                        <a href="https://www.linkedin.com/company/webmation" target="_blank" className="d-inline-flex">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://facebook.com/webmation" target="_blank" className="d-inline-flex">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/webmation/" target="_blank" className="d-inline-flex">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/user/webmationllc" target="_blank" className="d-inline-flex">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://twitter.com/webmation" target="_blank" className="d-inline-flex">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank" className="d-inline-flex">
                            <i className="fa fa-podcast"></i>
                        </a>
                    </div>
                </Card>



                <style jsx>{`

                   .administration a{
                       font-size: 10pt;
                   }

                   .lets-connect a{
                       font-size: 22pt;
                       margin-right: 9px;
                   }

                   .fa-linkedin{
                      color: #007bb5; 
                   }

                   .fa-facebook{
                       color: #3a5998;
                   }

                   .fa-instagram{
                       color: #c42ea4;
                   }

                   .fa-youtube{
                       color: #ff0400;
                   }

                   .fa-twitter{
                       color: #1da1f2;
                   }

                   .fa-podcast{
                        color: #c32361;
                   }

                `}</style>
            </div>
        )
    }
}
