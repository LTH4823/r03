import React, {useContext} from 'react';
import {CountContext} from "./index";

const CountDisplay = () => {

    const {num} =useContext(CountContext)

    return (
        <div>
            <h2>Count {num}</h2>
        </div>
    );
};

export default CountDisplay;