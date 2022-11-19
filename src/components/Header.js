import React from "react"
import spacex_logo from '../assets/images/spacex_logo.svg'

const Header = () =>{
    return (
        <header 
            // className="App-header"
            style={{
                display:"flex",
                alignItems:"center",
                height:"70px",
                width:"100vm",
                color:"#ffffff",
                backgroundColor:"#00305C",
                boxShadow:"rgb(220, 220, 220) 0px 2px 10px"
            }}
            >
            <img 
                src={spacex_logo} 
                // className="App-logo" 
                alt="logo" 
                style={{
                    height:"28px",
                    marginLeft:"20px",
                    marginBottom:"10px"
                }}
            />
            <p 
            //   className="title"
              style={{
                  fontSize:'20px',
                  fontWeight:"bold",
                  margin:'0px'
                  }}>
                StarLink Tracker
            </p>
    </header>

    );
}
export default Header;