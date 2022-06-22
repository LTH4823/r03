import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {getStoreList} from "../../api/storAPI";


const MapDiv = styled.div`
  width: 100vw;
  height: 30vh;
  background-color: pink;
`

let map

const MapEx = () => {

    const kakao = window.kakao;

    const mapContainer = document.querySelector(".mapDiv")


    const mapOption = {
        center: new kakao.maps.LatLng(37.5704368, 126.9853984), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };

    const [stores, setStores] = useState([])

    useEffect(()=>{

         map = new kakao.maps.Map(mapContainer||document.querySelector(".mapDiv"), mapOption);

        getStoreList().then(stores => setStores(stores))

    },[])

    return (
        <>
            <MapDiv className={"mapDiv"}>
            </MapDiv>
            <ul>
                {stores.map(s => <li key={s.id}>{s.id}--{s.sname}</li>)}
            </ul>
        </>
    );
};

export default MapEx;