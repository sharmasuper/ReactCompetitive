import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    loading:true,
    error:'',
    ch:"",
    post :{}
}
const reducer = (state,action) =>{
 switch(action.type){
    case 'Fetch_Success' :
        return {
            loading:false,
            post:action.payload ,
            ch:action.payload.title+" Mohit sharma ",
            error :""
        }
      case 'Fetch_Error' :
        return {
            loading :false,
            post:{},
            error : "something went wrong"
     }  
        default :
           return state

 }
}

function DataFetchingTwo() {
    const [state,dispatch] = useReducer(reducer,initialState)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
               dispatch({ type: "Fetch_Success", payload: response.data });
            } catch (error) {
                dispatch({ type: 'Fetch_Error' });
            }
        };
    
        fetchData();
    }, []);
    
  

  return (
   <>
   <h3>{state.loading ?"loading ..." :state.post.title}</h3>
   <h4>{state.ch}</h4>
   </>
  );
}

export default DataFetchingTwo;
