import React from 'react';
import PageInfo from '../components/PageInfo/PageInfo';
import IncredibleOffer from '../components/IncredibleOffer/IncredibleOffer';
import Collection from '../components/CollectionPreview/Collection';

const Home = () => {

  return (
    <>
      <PageInfo message1={`WELCOME TO iSHOP`} message2={`🔥 Hot Deals for you 👇`} />
      <IncredibleOffer />
      <Collection pageLink="/collection/bag" collectionName="Bag"/>
      <Collection pageLink="/collection/shirt" collectionName="Shirt"/>
      <Collection pageLink="/collection/device" collectionName="Device"/>
      <Collection pageLink="/collection/wrist-watch" collectionName="Wrist Watch"/>
      <Collection pageLink="/collection/shoe" collectionName="Shoe"/>
    </>
  )
}

export default Home;
