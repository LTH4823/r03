import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {getStoreList} from "../../api/storAPI";

const MapDiv = styled.div`
  width: 100vw;
  height: 30vh;
  background-color: pink;
`
const kakao = window.kakao;

const MapEx = () => {

    const mapRef = useRef()

    useEffect(()=>{


    },[])


    return (
        <>
            <MapDiv ref={mapRef}></MapDiv>
        </>
    );
};

export default MapEx;