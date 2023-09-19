import React from "react";
import logo from '../images/Logo .svg'
 const Footer = () => {
    return (
        <Footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3> Important links</h3>
                    <ul>
                        <li><a href='/'> Home </a></li>
                        <li><a href='/'> About </a></li>
                        <li><a href='/'> Menu </a></li>
                        <li><a href='/'> Reservations </a></li>
                        <li><a href='/'> Order Online </a></li>
                        <li><a href='/'> Login </a></li>
                    </ul>
                </div>
                <div>
                    <h3> Contact </h3>
                    <ul>
                        <li> Address: <br/> Whoseville, USA</li>
                        <li> Phone: <br/> 123 456 7891</li>
                        <li> Email: <br/> jane.doe@123.org</li>
                    </ul>
                </div>
            </section>
        </Footer>
    )
 }