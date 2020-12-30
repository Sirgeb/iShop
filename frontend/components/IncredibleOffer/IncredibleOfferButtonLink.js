import React from 'react';
import { useRouter } from 'next/router';

import IncredibleOfferButtonLinkStyles from './IncredibleOfferButtonLinkStyles';

const IncredibleOfferButtonLink = () => {
  const router = useRouter();
  
  return (
    <IncredibleOfferButtonLinkStyles 
        onClick={() => router.push('/incredible-offer')}
    >
      Explore Incredible offers&nbsp;<span>&#8594;</span>
    </IncredibleOfferButtonLinkStyles>
  );
}

export default IncredibleOfferButtonLink;
