import React from "react";

const DashNav = props => {
    return (
        <nav className="dashNav">
            <a href={`/dashboard/profile/${localStorage.getItem('User Id')}`}>My Profile</a>
            <span>|</span>
            <a href="/dashboard/search">Search Songs</a>
            <a href={`/dashboard/save/${localStorage.getItem('User Id')}`}>My Songs</a>
            <a className="signOut" href="/">Sign Out</a>
        </nav>
    )
}

export default DashNav;