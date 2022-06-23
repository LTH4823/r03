import React, {useCallback, useContext} from 'react';
import {CountContext} from "./index";

const CountButtons = () => {


    const {changeNum} = useContext(CountContext)

    const clickChange = (value) => {
        changeNum(value)
    }

    return (
        <div>
            <h4>Buttons</h4>
            <button onClick={() => clickChange(1)}>+</button>
            <button onClick={() => clickChange(-1)}>-</button>
        </div>
    );
};

export default CountButtons;