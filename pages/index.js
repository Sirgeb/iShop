import React from 'react';
import gql from 'graphql-tag';

import PageInfo from '../components/PageInfo/PageInfo';
import IncredibleOffer from '../components/IncredibleOffer/IncredibleOffer';
import Collection from '../components/Collection/Collection';

const BAG_COLLECTION_QUERY = gql`
query {
    items(where: { category: BAG }, first: 5, orderBy: createdAt_DESC) {
      id
      itemName
      discountPercent
      category
      image1
      image2
      amount
      newPrice
      description
    }
    currentItem(where: { category: BAG }){
      id
    }
  }
`;
const SHIRT_COLLECTION_QUERY = gql`
query {
    items(where: { category: SHIRT }, first: 5, orderBy: createdAt_DESC) {
      id
      itemName
      discountPercent
      category
      image1
      image2
      amount
      newPrice
      description
    }
    currentItem(where: { category: SHIRT }){
      id
    }
  }
`;
const DEVICE_COLLECTION_QUERY = gql`
query {
    items(where: { category: DEVICE }, first: 5, orderBy: createdAt_DESC) {
      id
      itemName
      discountPercent
      category
      image1
      image2
      amount
      newPrice
      description
    }
    currentItem(where: { category: DEVICE }){
      id
    }
  }
`;
const WRIST_WATCH_COLLECTION_QUERY = gql`
query {
    items(where: { category: WRISTWATCH }, first: 5, orderBy: createdAt_DESC) {
      id
      itemName
      discountPercent
      category
      image1
      image2
      amount
      newPrice
      description
    }
    currentItem(where: { category: WRISTWATCH }){
      id
    }
  }
`;
const SHOE_COLLECTION_QUERY = gql`
query {
    items(where: { category: SHOE }, first: 5, orderBy: createdAt_DESC) {
      id
      itemName
      discountPercent
      category
      image1
      image2
      amount
      newPrice
      description
    }
    currentItem(where: { category: SHOE }){
      id
    }
  }
`;

const INCREDIBLE_OFFER_QUERY = gql`
  query {
    items(where: {
      discountPercent_gt: 15
    }, first: 4, orderBy: createdAt_DESC) {
      id
      itemName
      discountPercent
      category
      image1
      image2
      amount
      newPrice
      description
    }
  }
`;


const Home = () => {

  return (
    <>
      <PageInfo message1={`WELCOME TO iSHOP`} message2={`🔥 Hot Deals for you 👇`} />

      <IncredibleOffer
        pageLink="/incredible-offer"
        collectionName="Incredible Offer"
        collectionQuery={INCREDIBLE_OFFER_QUERY}
        onCollectionPreview={true}
      />

      <Collection 
        pageLink="/collection/bag" 
        collectionName="Bag" 
        collectionQuery={BAG_COLLECTION_QUERY}
        onCollectionPreview={true}
      />

      <Collection 
        pageLink="/collection/shirt" 
        collectionName="Shirt" 
        collectionQuery={SHIRT_COLLECTION_QUERY}
        onCollectionPreview={true}
      />

      <Collection 
        pageLink="/collection/device" 
        collectionName="Device" 
        collectionQuery={DEVICE_COLLECTION_QUERY}
        onCollectionPreview={true}
      />

      <Collection 
        pageLink="/collection/wrist-watch" 
        collectionName="Wrist Watch" 
        collectionQuery={WRIST_WATCH_COLLECTION_QUERY}
        onCollectionPreview={true}
      />

      <Collection 
        pageLink="/collection/shoe" 
        collectionName="Shoe" 
        collectionQuery={SHOE_COLLECTION_QUERY}
        onCollectionPreview={true}
      />
    </>
  )
}

export default Home;
