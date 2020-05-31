import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <h2 className="h2">{data.site.siteMetadata.title}</h2>
            </Toolbar>
        </AppBar>
    );
}