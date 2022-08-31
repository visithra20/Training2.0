import React from "react";
export const TextComponent = ({
    label,styleProps,CustomTag = "div",
  }) => (
    <CustomTag style={styleProps}>{label}</CustomTag>
  );
  export const Dropdown = (props) => {
    return (
      <div >
        <select style={{
            boxSizing: "borderBox",
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
            borderRadius: "5px"
        }}>
          {props.options?.map((m) => (
            <option value={m}>{m}</option>
          ))}
        </select>
      </div>
    );
  };
  export const Dropdown1 = (props) => {
    return (
      <div >
        <select style={{
            boxSizing: "borderBox",
            display: "flex",
            // flexDirection: "row",
            // justifycontent: "center",
            // alignitems: "center",
            // MarginLeft:"51.12px",
           
           padding: "8px 16px 8px 16px",

            gap: "8px",
            width: "1090px",
            height: "56px",
            background: "#FFFFFF",
            border: "1px solid #E8E8EA",
            borderRadius: "5px"
        }}>
          {props.options?.map((m) => (
            <option value={m}>{m}</option>
          ))}
        </select>
      </div>
    );
  };
  export const Dropdown2 = (props) => {
    return (
      <div >
        <select style={{
           boxSizing:"borderBox",
           display: "flex",
           flexBirection: "row",
           //justifyContent: "center",
           //alignItems:"center",
           //margin:"12px 18px 30px 56.06px",
           width: "181px",
           height: "56px",
           background: "#FFFFFF",
           border: "1px solid #E8E8EA",
           borderRadius: "10px",
           //alignSelf: "stretch",
           //flexGrow: "0",
        }}>
          {/* {props.options?.map((m) => (
            <option value={m}>{m}</option>
          ))} */}
           <option>19HSM002</option>
           <option>19CTR105</option>
          <option>19QSA011</option>
        <option>19MNS202</option>
        <option>19ASR008</option>
        
        </select>
      </div>
    );
  };
  export const Date=()=>
  {   return <div>
            <input type="date"  style={{
                background: "#FFFFFF",
                border: "1px solid #E5E5E5",
                width:"260px",
                height:"56px",
                borderRadius: "4px"
            }}/>
              </div>
  }
  export const Box=({ children, ...props }) =>{
    return (
    <div {...props}>{children}
    </div>)
}
export const FN = () => {
    return <button onclick=" "  style={{
      boxSizing: "border-box",
          height: "56px",
          width: "68px",
          borderRadius:"5px",
          border: " 1px solid #5375E2",
          borderRadius: "5px",
          padding: "19px 22.22px",
          background:"white",
          //marginRight:"18px"
    }}>FN</button>;
  };
export const AN = () => {
    return <button onclick=" "  
    style={{
      boxSizing: "border-box",
      height: "56px",
      width: "68px",
      borderRadius:"5px",
      border: " 1px solid #5375E2",
      borderRadius: "5px",
      padding: "19px 22.22px",
      background:"white",
    }}>AN</button>;
  };
  export const InputComponent = (props) => {
    return (
        <div
        style={{
          display: "flex",
          flexDirection: (props.type === "text"  || props.type === "number" )? "column" : "row",
        }}
      >
        <TextComponent
          label={props.label}
          
          CustomTag={(props.type === "text" || props.type === "number")? "div" : "span"}
        />
        {(props.type === "text" || props.type === "number" )&& <input {...props}></input>}
      </div>
      );
    };
     export const SubName=()=>{
        return(
        <InputComponent type="text"
                style={{
                            marginLeft:"18px",
                            marginRight:"18px",
                            background: "#F2F2F2",
                            border: "1px solid #E8E8EA",
                            borderRadius: "5px",
                            width: "434px",
                            height: "56px",
                }}
                    />
        )
    }
export const Range=()=>{
    return(
        <>
            <div>
          <input
            type="number"
            min="0" 
            max="12"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E8E8E8",
               width: "68.53px",
               height: "56px",
               borderRadius: "5px"
            }}/>
            </div>
          </>
          )}


export const Check = ()=>{
  return (
    
    <div style={{padding:"24px",marginLeft:"144.41px",marginTop:"-15px"}}>
      <input type="checkbox" />
    </div>
    )};
  

       