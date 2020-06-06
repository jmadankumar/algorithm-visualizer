import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../assets/images/algorithm.svg';
import { Link } from 'gatsby';

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
                <Link to="/" className="flex flex-row items-center">
                    <img src={Logo} alt="logo" className="w-10 h-10 mr-5" />
                    <h2 className="text-xl">{data.site.siteMetadata.title}</h2>
                </Link>
            </Toolbar>
        </AppBar>
    );
}