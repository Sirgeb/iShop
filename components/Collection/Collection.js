import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import formatText from '../../lib/formatText';
import PageInfo from '../../components/PageInfo/PageInfo';
import CollectionHeader from './CollectionHeader/CollectionHeader';
import CollectionCard from './CollectionCard/CollectionCard';

import CollectionStyles from './CollectionStyles';

const Collection = ({ collectionQuery, collectionName, pageLink, onCollectionPreview }) => {

  const { data, loading, error } = useQuery(collectionQuery);

  if (loading) {
    return <p>loading</p>
  }

  return ( 
    <>
      {
        !onCollectionPreview && (
          <PageInfo 
            message1={` ${formatText(data.items.length, collectionName)} `}
          />
        )
      }

      {
        onCollectionPreview && (
          <CollectionHeader 
            currentItem={data.currentItem} 
            collectionName={collectionName} 
            pageLink={pageLink}
          />
        )
      }

      <CollectionStyles>
          <div className="collection-items">
            {
              data.items.map(item => (
                <CollectionCard 
                  { ...item} key={item.id}
                />
              ))
            }
          </div>
      </CollectionStyles>
    </>
  );
}

export default Collection;
