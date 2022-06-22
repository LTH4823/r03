import React, {useRef} from 'react';

const jquery = window.jQuery
//public 에 jqu

const Ex1 = () => {

    const taget = useRef()
    //ref안에는 current 있고 이건 Dom의 요소다

    const clickHide = () =>{
        const ele = jquery(taget.current)
        console.log(ele)

        ele.hide('slow')
    }
    const clickShow = () =>{
        const ele = jquery(taget.current)
        console.log(ele)

        ele.show('slow')
    }

    return (
        <div>
            <h1 ref={taget} className={"sample"}>Ex1</h1>

            <div>
                <button onClick={()=> clickHide()}>HIDE</button>
                <button onClick={()=> clickShow()}>SHOW</button>

            </div>
        </div>
    );
};

export default Ex1;