import React from 'react';
import Header from '../shared/Header'
import Head from 'next/head';

const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user, isSiteOwner, cannonical } = props;
    const headerType = props.headerType || 'default';
    const title = props.title || 'Laycon Muriziq'
    return (
        <>
        <head>
        <title>{title}</title>
        <meta name="description" content="My Name is Laycon Muriziq, I'm a System Administrator & Full Stack Web Developer from Minneapolis, MN. 
        I aim to make a difference through my creative solution."/>
        <meta name="keywords" content="Laycon Portfolio, Laycon Webdeveloper, Laycon Freelancing, Laycon Software developer" />
        <meta property="og:title" content="Laycon Muriziq-programmer, Web developer, ERP System Administrator"/>
        <meta property="og:locale" content="en-US" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website"  />
        <meta property="og:description" content="My Name is Laycon Muriziq, I'm a System Administrator & Full Stack Web Developer from Minneapolis, MN. 
        I aim to make a difference through my creative solution."  />
       {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}

        <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="manifest" href="/static/site.webmanifest"></link>
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