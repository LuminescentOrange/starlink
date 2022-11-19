import React from "react";
import { Button, List, Avatar, Checkbox, Spin } from "antd";
import satellite from "../assets/images/satellite.svg";


const SatelliteList = (props) => {
    const satList = props.satInfo ? props.satInfo.above : [];
    const { isLoad } = props;

    return(
        <div 
            className="sat-list-box"
            style={{
                border:"2px solid #ccc",
                height:"380px",
                marginTop:"10px",
                padding:"10px",
            }}
            >
        <div 
            className="btn-container"
            style={{
                textAlign:"center",
            }}
            >
            <Button
                className="sat-list-btn"
                type="primary"
            >Track</Button>
        </div>
        <hr/>
        {
                    isLoad ?
                        <div 
                            className="spin-box"
                            style={{
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                height:"335px",
                            }}
                        >
                            <Spin tip="Loading..." size="large" />
                        </div>
                        :
                        <List
                            className="sat-list"
                            style={{
                                height:"300px",
                                overflow:"scroll"
                            }}
                            itemLayout="horizontal"
                            size="small"
                            dataSource={satList}
                            renderItem={item => (
                                <List.Item
                                    actions={[<Checkbox dataInfo={item} onChange={() =>{}}/>]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar size={50} src={satellite} />}
                                        title={<p>{item.satname}</p>}
                                        description={`Launch Date: ${item.launchDate}`}
                                    />

                                </List.Item>
                            )}
                        />
                }

    </div>
    );
}

export default SatelliteList;

