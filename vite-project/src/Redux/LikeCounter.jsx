import React, { useEffect } from "react";
import {incrementLike,decrementLike} from "./Actions"
import {createStore} from "redux"
import Reducer from "./Reducer";
import reducer from "./Reducer";

const store = createStore(reducer);  //crestore created a store from reducer

const Likecounter = () => {
    const [Like, setLikes]= React.useState(store.getState().likes);
    function handleLike(){
        store.dispatch(incrementLike())
    }

    function handleUnlike(){
        store.dispatch(decrementLike())
    }
    React.useEffect(()=>{
        const subscribe = store.subscribe(()=> setLikes(store.getState().likes));
        return subscribe;
    },[])
    return(
        <div>
            <h1>{Like}</h1>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleUnlike}>Unlike</button>
        </div>
    )
}
export default Likecounter