import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {getStoreList} from "../../api/storAPI";


const MapDiv = styled.div`
  width: 100vw;
  height: 30vh;
  background-color: pink;
`

const kakao = window.kakao;

// let map

//컴포넌트를 재사용할려면 전역변수 사용시 이상이 있을수 있다
const MapEx = () => {

    const mapRef = useRef()
    const [stores, setStores] =useState([])
    const [map,setMap] = useState()
    console.log("MapEX.....................................", map)

    useEffect(()=>{
        console.log("MapEX useEffect....................................." + mapRef.current)

        const mapOption = {
            center: new kakao.maps.LatLng(37.5704368, 126.9853984), // 지도의 중심좌표
            level: 5 // 지도의 확대 레벨
        };
        //map 초기화
        const map = new kakao.maps.Map(mapRef.current, mapOption);
        map.markers = [] //js는 프로퍼티 추가/삭제가 자유롭다

        setMap(map)

        getStoreList().then(data => {
            console.log(data)
            setStores(data)
            //    이게 비동기라 다음작업할때 makemarkers하는데 값이 안들어간 상태에서 만들어진거지
        })
    },[])

    useEffect(() => {
        console.log("useEffect... by Stores")
        makeMarkers()
    },[stores])

    const makeMarkers = ()=>{
        for (let i = 0; i < stores.length; i++) {
            const {id,lat,lng,sname} =stores[i]
            console.log(id,lat,sname)
            // 마커가 표시될 위치입니다
            const markerPosition  = new kakao.maps.LatLng(lat, lng);

            // 마커를 생성합니다
            const marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map)
            //map 이 아예 마커 배열을 가지고 있으면 편하지
            map.markers.push(marker)
            //map의 빈 배열에 때려박는다
        }//end for
    }

    function clearAll(){
        let marker
        while (marker = map.markers.pop(0)){
            //0을 반복적으로 꺼내는게 지우는거지
            marker.setMap(null)
        }
        console.log(map.markers)
    }


    return (
        <>
            <MapDiv ref={mapRef}>
            </MapDiv>
            <button onClick={clearAll}>clearALL</button>
        </>
    );
};

export default MapEx;