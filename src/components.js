import React from "react";
export const TextComponent = ({
    label,styleProps,CustomTag = "div",
  }) => (
    <CustomTag style={styleProps}>{label}</CustomTag>
  );
export const Image=({
    Name,
    source,
    style
})=>{
    return(
        <img src={source.src} style={style} alt={Name}/>
    );
}
export const Box = (props) => (
    <>
        <TextComponent label={props.header} />
          <div >{props.children}</div>
        </>
      )
