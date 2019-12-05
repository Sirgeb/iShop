import React from 'react';
import { Query } from 'react-apollo';

import formatText from '../../lib/formatText';
import PageInfo from '../../components/PageInfo/PageInfo';
import CollectionHeader from './CollectionHeader/CollectionHeader';
import CollectionCard from './CollectionCard/CollectionCard';
import User from '../User/User';

import CollectionStyles from './CollectionStyles';

const Collection = ({ collectionQuery, collectionName, pageLink, onCollectionPreview }) => {

  return ( 
    <User>
      {
        ({ data, loading, error}) => {

          if (loading) return null;

          return (
            <Query query={collectionQuery} >
              {
                ({ data, loading }) => {
                  if (loading) return null;

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
          )
        }
      }
  </User>
  )
}

export default Collection;
