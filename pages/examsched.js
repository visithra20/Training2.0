import React from "react";
import { TextComponent,Dropdown ,Box,Dropdown2,Date,AN,FN, Dropdown1,SubName,Range,Check} from "../src/components";
import { Header,Footer } from "../src/header";
import styled from "styled-components";
import { Font } from "../src/font";


const StyleFont=styled.div`
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 33px;
color: #000000;`
const Time=()=>{
    return(
        <>
        <div style={{display:"flex",flexDirection:"row",gap:"30.45px",marginRight:"30px" ,marginLeft:"50px"}}>
        <Range/>
        <Range/>
        <Range/>
        
        </div>
        </>
    )
}
const Sub=()=>{
    return(
        <div style={{display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        //marginLeft:"55px",
        // padding: " 8px 16px",
        gap: "18px",
        width: "344px",
        height: "56px"}}>
            <Dropdown2 />
            <SubName/>
            <Date/> 
            <FN/>
            <AN/>
            
        </div>
    )
}
const BackButton=()=> {
    return (
      <div style={{marginTop:"35px",marginLeft:"122px",display:"flex"}} >
        <img
        src="https://i.ibb.co/HnM1WDs/Vectorarrow.png"
         />   
      </div>
    );
  }
  <Header />
const ExamScheduler=()=>
{
    return (
        <>
 <Font/>
 <StyleFont>
 <Header/>
 <div style={{display:"flex"}}>
 <div >
    <BackButton/>
    </div>
    <div>
    <TextComponent label="Create new schedule"
    styleProps={{
    marginLeft:"19px",
    marginTop:"35px",
    diplay:"flex",
    fontFamily: 'Nunito',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "33px",
    color: "#000000"}}/>
    </div></div>
    
    <Box style={{
        width: "1196px",
        height: "1600px",
        left: "122px",
        top: "183px",
        background: "#FBFBFB",
        margin:"19.74px 122px 0px 122px ",
        padding:"37.26px 54.81px 49.49px 54px"
    }}>
       
    <div style={{display:"flex",flexDirection: "row",height: "56px",
width: "344px",borderRadius: "10px",padding: "8px 16px 8px 16px",gap:"30px",marginLeft:"51px"
}}>
        <div>
    <TextComponent label="Branch" />
    <Dropdown/>
    </div>
    <div>
    <TextComponent label="Department"/>
    <Dropdown/>
    </div>
    <div>
    <TextComponent label="Semester"/>
    <input type="text"
     style={{ boxSizing: "borderBox",
            display: "flex",
            flexDirection: "row",
            justifycontent: "center",
            alignitems: "center",
            MarginLeft:"51.12px",
            gap: "8px",
            width: "344px",
            height: "56px",
            background: "#FFFFFF",
            border: "1px solid #E8E8EA",
            borderRadius: "5px"}} />
    </div>
    </div>
    <div style={{display:"flex",flexDirection:"row"}}>
    </div> 
    <div style={{marginTop:"30px",marginLeft:"51px",padding: "8px 16px 8px 16px"}}>
    <TextComponent label="Exam Type"/>
    <Dropdown1/>
    </div>
    <div style={{marginLeft:"58px"}}>
        <TextComponent label="Time Range" styleProps={{marginBottom:"12.27px",marginTop:"30px"}}/>
    <div style={{display:"flex",marginBottom:"20px",marginRight:"32.26px"}}> 
    <label style={{marginTop:"15.14px"}}>FN</label>
    <Time/>
    <label style={{marginTop:"15.14px",marginLeft:"30px"}}>to</label>
    <Time/><Check/><label style={{marginTop:"8px",opacity:"0.5"}}>Set all for FN</label>
    </div>
    <div style={{display:"flex",marginBottom:"20px"}}> 
    <label style={{marginTop:"15.14px"}}>AN</label>
    <Time/>
    <label style={{marginTop:"15.14px",marginLeft:"30px"}}>to</label>
    <Time/><Check/><label style={{marginTop:"8px",opacity:"0.5"}}>Set all for AN</label>
    </div>
    </div>
    <div style={{display:"flex",flexDirection:"row"}}>
    <TextComponent label="Subjects" styleProps={{marginLeft:"56px",}}/>
    <TextComponent label="Labs" styleProps={{paddingLeft:"330px"}}/>
    </div>
    <div style={{display:"flex",flexDirection:"row",padding:"8px 16px 8px 16px",gap:"30px",marginLeft:"43px"}}>
    <input type="text" style={{ boxSizing: "borderBox",
            display: "flex",
            flexDirection: "row",
            width: "344px",
            height: "56px",
            background: "#FFFFFF",
            border: "1px solid #E8E8EA",
            borderRadius: "5px"}} />
    <input type="text" style={{ boxSizing: "borderBox",
            display: "flex",
            flexDirection: "row",
           
            width: "344px",
            height: "56px",
            background: "#FFFFFF",
            border: "1px solid #E8E8EA",
            borderRadius: "5px"}} /></div>
<div style={{marginLeft:"56px"}}>
   <div ><div style={{display:"flex",marginTop:"30px",marginBottom:"12px"}}>
   <TextComponent label="Subject1" styleProps={{marginRight:"638px"}}/>
   <TextComponent label="Date" /></div>
   <Sub/></div>
   <div>
    <div style={{display:"flex",marginTop:"30px",marginBottom:"12px"}}>
   <TextComponent label="Subject2" styleProps={{marginRight:"638px"}}/>
   <TextComponent label="Date" /></div>
   <Sub /></div>
   <div>
    <div style={{display:"flex",marginTop:"30px",marginBottom:"12px"}}>
   <TextComponent label="Subject3" styleProps={{marginRight:"638px"}}/>
   <TextComponent label="Date" />
   </div>
   <Sub/></div>
   <div><div style={{display:"flex",marginTop:"30px",marginBottom:"12px"}}>
   <TextComponent label="Subject4" styleProps={{marginRight:"638px"}}/>
   <TextComponent label="Date" /></div>
   <Sub/></div>
   <div><div style={{display:"flex",marginTop:"30px",marginBottom:"12px"}}>
   <TextComponent label="Subject5" styleProps={{marginRight:"638px"}}/>
   <TextComponent label="Date" /></div>
   <Sub/></div>
<div style={{marginTop:"30.46px",marginBottom:"30px"}}>
   <TextComponent label="Lab" styleProps={{fontSize:"20px"}}/>
</div>

   <div>
    <div style={{display:"flex",marginTop:"30px",marginBottom:"12px"}} >
   <TextComponent label="Lab 1"  styleProps={{marginRight:"655px"}}/>
   <TextComponent label="Date" />
   </div>
   <Sub/>
   <div style={{display:"flex",marginTop:"30px",marginBottom:"12px"}}>
   <TextComponent label="Lab 2" styleProps={{marginRight:"655px"}} />
   <TextComponent label="Date" />
   </div>
   <Sub/>
   </div>     
   </div>
    </Box>
    </StyleFont>
    <button style={{marginTop:"183px",
    marginLeft:"1250px",
    padding:"9px 44.4px 12.03px 49.85px",
    fontFamily: 'Nunito Sans',
    fontStyle: "normal",
    fontWeight: "00",
    fontSize: "16px",
    color:"WHITE",
    background: "#5375E2",
    borderRadius: "5px"}} > Save</button>

    <div style={{marginTop:"88.74px",display:"flex",flexDirection:"row"}}> 
   
    <Footer/>
   </div> 
    </>
    )
}
export default ExamScheduler;