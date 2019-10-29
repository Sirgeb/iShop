import React from 'react';
import Link from 'next/link';

import CollectionHeaderStyles from './CollectionHeaderStyles';
import formatText from '../../../lib/formatText';

const CollectionHeader = ({ currentItem, collectionName, pageLink }) => {

  return (
    <CollectionHeaderStyles>
      <div className="collection-info">
        { collectionName } | { formatText(currentItem.length, collectionName) }
      </div>
      <button> 
        <Link href={pageLink}>
          <a>
          See All &#8594;
          </a>
        </Link>
      </button>
    </CollectionHeaderStyles>
  )
}

export default CollectionHeader;
