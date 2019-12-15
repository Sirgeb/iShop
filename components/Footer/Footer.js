import React from 'react';
import Link from 'next/link';

import FooterStyles from './FooterStyles';

const Footer = () => {
  return (
    <FooterStyles>
      iShop - Designed and developed by&nbsp;
      <Link prefetch={false} href="https://www.linkedin.com/in/gabriel-aniora/"> 
        <a target="_blank" title="My Profile Link">Sirgeb</a> 
      </Link>
    </FooterStyles>
  )
}

export default Footer;
