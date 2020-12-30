import React from 'react';
import { useQuery } from '@apollo/client';

import { useUserData } from '../../hooks/AppContext';
import formatText from '../../lib/formatText';
import PageInfo from '../../components/PageInfo/PageInfo';
import CollectionHeader from './CollectionHeader/CollectionHeader';
import CollectionCard from './CollectionCard/CollectionCard';
import Spinner from '../Spinner/Spinner';

import CollectionStyles from './CollectionStyles';

const Collection = ({ collectionQuery, collectionName, pageLink, onCollectionPreview, variables }) => {
  const { data } = useUserData();
  const { data: collectionData, loading } = useQuery(collectionQuery, { variables })

  if (data === undefined) return null;
  if (loading) return <Spinner spacing="200px" />;

  return (
    <>
      {
        !onCollectionPreview && (
          <PageInfo 
            message1={` ${formatText(collectionData.currentItem.length, collectionName)} `}
          />
        )
      }
    
      {
        onCollectionPreview && (
          <CollectionHeader 
            currentItem={collectionData.currentItem} 
            collectionName={collectionName} 
            pageLink={pageLink}
          />
        )
      }

      <CollectionStyles>
        <div className="collection-items">
          {
            collectionData.items.map(item => (
              <CollectionCard 
                { ...item} key={item.id} me={data.me} onCollectionPreview={onCollectionPreview}
              />
            ))
          }
        </div>
      </CollectionStyles>
    </>
  )
}

export default Collection;
