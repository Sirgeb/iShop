import React from 'react';
import PageInfo from '../components/PageInfo/PageInfo';
import IncredibleOffer from '../components/IncredibleOffer/IncredibleOffer';
import Collection from '../components/CollectionPreview/Collection';

const Home = () => (
  <div>
    <PageInfo message1={`WELCOME TO iSHOP`} message2={`🔥 Hot Deals for you 👇`} />
    <IncredibleOffer />
    <Collection />
    <Collection />
    <Collection />
    <Collection />
    <Collection />
  </div>
);

export default Home;
