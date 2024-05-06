import React from 'react';
import { Channelcontext, UserContext } from '../App';

function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user   =>{
                    return (
                        <Channelcontext.Consumer>
                            {
                                channel => {
                                    return <div>User contaxt value - {user} and channel -  {channel}</div>
                                }
                            }
                        </Channelcontext.Consumer>
                    )
                }
               
            }  
           
        </UserContext.Consumer>
      
    </div>
  );
}

export default ComponentF;
