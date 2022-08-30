import React from 'react';
import  ReactDOM  from 'react-dom';
import  {TextComponent}  from './components';
import styled from "styled-components";

const HeadStyle=styled.div`
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 700;
color: white;
background: #5375E2;
width:1440px;

padding:30px;
margin:0px
`
const FootStyle=styled.div`
font-family: 'Nunito';
font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 116%;
display: flex;
margin-bottom:13px;
width: 1440px;
height: 42px;
left: 0px;
top: 858px;
background: #FBFBFB;
align-items: center;
text-align: center;
color: #000000`
const Logo=()=> {
    return (
      <div>
        
        <img src="https://i.ibb.co/2S0PzTc/logo.png" alt="LOGO" />
      </div>
    );
}
 const Vector=()=> {
    return (
      <div style={{marginTop:"-50px",marginLeft:"1260px",display:"flex"
}}>
        <img src="https://i.ibb.co/ckcWSdS/healthicons-ui-user-profile.png" 
       
  />
      </div>
    );
} 
const Person=()=> {
    return (
      <div style={{padding:"184px 499px 0px 499px"}} >
        <img
        src="https://i.ibb.co/m6n1ZR4/Events-rafiki-1.png"
         />   
      </div>
    );
  }
const Header=()=>
{
    return(
        <>
       <HeadStyle>
       
    <TextComponent 
        label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"  
        styleProps={{fontFamily: 'Nunito Sans',marginTop:"19px",marginLeft:"124px",fontSize:"16px" }}/>
        <Logo />
        <Vector/>
        <TextComponent 
        label="Waseem"  
        
        styleProps={{ marginTop:"-32px", marginRight:"50px",textAlign:"right",fontSize:"20px"
        }}/>
    <TextComponent 
        label="Exam Scheduler"  
        styleProps={{ margin:"-10px 0px 8px 121px ",fontSize:"32px"}}/>
    </HeadStyle>
</>
    )

    }
const Footer=()=>
{
    return(
<FootStyle>
    <TextComponent label="Conditions of use & sale" styleProps={{marginLeft:"317px"}} />
    <TextComponent label="Privacy notice" styleProps={{marginLeft:"231px"}} />
    <TextComponent label="Powdered By Incresco" styleProps={{marginLeft:"201px"}}  />
</FootStyle>
)
    }

const App=()=>
{
    return(
      <>
        <Header />
        <Person />
        <TextComponent 
        label="There are no schedules get started by creating schedules"
        styleProps={{
            paddingLeft:"499px",letterSpacing: "0.03em",fontWeight: "600",
            fontSize:"16px"}}/> 
        <div>
     
    </div>
  
      <button style={{background: "#5375E2",borderRadius: "5px",height: "39.96094512939453px",width: "192px",margin:" 30px 624px 245.04px 624px",top: "615px",
}}>
       <TextComponent label="+ Create New" 
    styleProps={{fontFamily: 'Nunito Sans',fontStyle: "normal",fontWeight: "400",fontSize: "20px",lineHeight: "27px",color: "#FFFFFF"}}/>
      </button>
     <Footer/>
     
       </>
       
    )
    
}
ReactDOM.render(<App />, document.getElementById("app"));