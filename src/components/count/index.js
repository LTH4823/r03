import React, {createContext, useState} from 'react';
import CountDisplay from "./CountDisplay";
import CountButtons from "./CountButtons";

export const CountContext = createContext()
const Count = () => {
    const [num,setNum] =useState(10)

    const changeNum =(v)=>{
        setNum(num+v)
    }

    return (
        <CountContext.Provider value={{num,changeNum}}>
            <div>
                <CountDisplay></CountDisplay>
                <CountButtons></CountButtons>
            </div>
        </CountContext.Provider>
    );
};

export default Count;