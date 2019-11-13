import React from 'react';
import { Query } from 'react-apollo';

import formatText from '../../lib/formatText';
import PageInfo from '../../components/PageInfo/PageInfo';
import CollectionHeader from './CollectionHeader/CollectionHeader';
import CollectionCard from './CollectionCard/CollectionCard';
import Spinner from '../Spinner/Spinner';

import CollectionStyles from './CollectionStyles';

const Collection = ({ collectionQuery, collectionName, pageLink, onCollectionPreview, spacing }) => {

  return ( 
    <Query query={collectionQuery} >
      {
        ({ data, loading }) => {
          if (loading) {
            return <Spinner spacing={spacing}/>
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
                          { ...item} key={item.id} onCollectionPreview={onCollectionPreview}
                        />
                      ))
                    }
                  </div>
              </CollectionStyles>
            </>
          )
        }
      }
    </Query>
  );
}

export default Collection;
