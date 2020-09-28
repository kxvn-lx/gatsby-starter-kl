import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
    const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (
        <header className="px-4 py-8 border-b border-black">
            <h1>Gatsby Starter KL</h1>
        </header>
    );
}

export default Header;
