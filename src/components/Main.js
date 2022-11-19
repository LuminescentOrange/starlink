import React from 'react';
import { Row, Col } from 'antd';
import SatSetting from './SatSetting';

function Main(){
        return (
            <Row>
                <Col span={8} className="left-side"
                    style={{padding:"20px"}}
                >
                    <SatSetting/>
                </Col>
                <Col span={16} className="right-side"
                    style={{height:"760px"}}
                >
                    right
                </Col>
            </Row>
        )
    }
export default Main;
