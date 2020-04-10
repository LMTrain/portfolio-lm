import React from 'react';
import Header from '../shared/Header'
import Head from 'next/head';

const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user, isSiteOwner } = props;
    const headerType = props.headerType || 'default';

    return (
        <>
        <head>
            <title>Laycon Muriziq</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        </head>
            <div className="layout-container" >               
                <Header className={`port-nav-${headerType}`} 
                    isAuthenticated={isAuthenticated} 
                    user={user} 
                    isSiteOwner={isSiteOwner}
                />
                <main className={`cover ${className}`}>
                    <div className="wrapper">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}

export default BaseLayout;