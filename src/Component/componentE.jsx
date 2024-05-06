import React, { useContext } from 'react';
import ComponentF from './componentF';
import { Channelcontext, UserContext } from '../App';

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(Channelcontext)
  return (
    <div>
      <h1>ComponentE user - {user} channel - {channel}</h1>
     
      <ComponentF/>
    </div>
  );
}

export default ComponentE;
