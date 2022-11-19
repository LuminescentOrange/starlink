import React, { useState } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';

import SatSetting from './SatSetting';
import SatelliteList from './SatelliteList';
import { SAT_API_KEY, BASE_URL, NEARBY_SATELLITE, STARLINK_CATEGORY } from "./constants";

function Main(){
    const [setting, setSetting] = useState()
    const [satInfo, setSatInfo] = useState()
    const [satList, setSatList] = useState([])
    const [isLoadingList, setIsLoadingList] = useState(false)

    const showNearbySatellite = (setting) => {
        console.log('show nearby')
        setSetting(setting)
        fetchSatellite(setting);
        // this.setState({
        //     setting: setting
        // })
        // this.fetchSatellite(setting);
    }

    const fetchSatellite = (setting) => {
        console.log("fetching")
        const { latitude, longitude, elevation, altitude } = setting;
        const url = `${BASE_URL}/${NEARBY_SATELLITE}/${latitude}/${longitude}/${elevation}/${altitude}/${STARLINK_CATEGORY}/&apiKey=${SAT_API_KEY}`;
        setIsLoadingList(true);
        // this.setState({
        //     isLoadingList: true
        // });

        axios.get(url)
            .then( res => {
                console.log(res.data);
                setSatInfo(res.data)
                setIsLoadingList(false)
                // this.setState({
                //     satInfo: res.data,
                //     isLoadingList: false
                // })
            })
            .catch( error => {
                setIsLoadingList(false)
                // this.setState({
                //     isLoadingList: false
                // });
                console.log('err in fetch satellite -> ', error);
            })
    }

    return (
        <Row>
            <Col span={8} className="left-side"
                style={{padding:"20px"}}
            >
                <SatSetting 
                    // onShow={this.showNearbySatellite}
                    onShow={showNearbySatellite}
                />
                <SatelliteList 
                    satInfo={satInfo}
                    isLoad={isLoadingList}
                />
            </Col>
            <Col span={16} className="right-side"
                style={{height:"760px"}}
            >
                right
            </Col>
        </Row>
    );
}
export default Main;
