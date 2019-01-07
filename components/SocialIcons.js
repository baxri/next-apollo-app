import React, { Component } from 'react'
import Card from "./Card";

export default class SocialIcons extends Component {
    render() {
        return (<Card title="Let's Connect">
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

            <style jsx>{`

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
        </Card>
        )
    }
}
