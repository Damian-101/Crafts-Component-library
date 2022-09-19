import React, { FC, useState, useEffect } from "react";
import "./index.scss";


interface SelectItemProps{
  /** Select Items Image Path */
  image?:string,
  /** Item Text `use `` arround the text you want to highlight`*/
  text?:string,
  /** Value To Select */
  valueToSelect?:string,
  /** On Item Click `return(isSelected,valueToSelect)`*/
  onClick?:(isSelected:boolean,valueToSelect:string) => void,
  /** Loading Screen For The Component */
  isLoading?:boolean
  /**Default Selected? */
  isDefaultSelected?:boolean
  /**Disable Selecting */
  disableSelect?:boolean
}


// Select Item Component 
export const SelectItem:FC<SelectItemProps> = ({ image, text, onClick, valueToSelect, isLoading,isDefaultSelected,disableSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if(isDefaultSelected){
      setIsSelected(isDefaultSelected)
    }
  },[])

  useEffect(() => {
    if(isDefaultSelected){
      setIsSelected(isDefaultSelected)
    }
  },[isDefaultSelected])

  useEffect(() => {
    
  },[text])

  const onToggleSelectClick = (e: any) => {
    if(disableSelect && disableSelect === true){
      setIsSelected(isDefaultSelected);
    }else{
      setIsSelected(!isSelected);
    }
    onClick(!isSelected, valueToSelect);
  };

  // Look For Select Symbol And HighLight Text Between Them
  const highLightText = (text:string) => {
    let symobolLocations:number[] = []
    const textArray = text.split("")
      textArray.map((e,i,arr) => {
        if(e === "`"){
          symobolLocations = [...symobolLocations,i]
        }
      })
    const RenderHighLightedText = symobolLocations.map((value,index) => {
      if(index%2 === 0){
        textArray[value] = "<span class='select-item__select-text'>"
      }
      if(index%2 === 1){
        textArray[value] = "</span>"
      }
    })
    const arrayToString = textArray.join("")
    return arrayToString
  } 


  return (
    <>
      {isLoading ? (
        <div className="select-item crafts loading">
          <div className="select-item__img skeleton"></div>
          <div className="select-item__name skeleton">{'Skeleton'}</div>
        </div>
      ) : (
        <div className="select-item " onClick={onToggleSelectClick}>
          <div
            className="select-item__img"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="select-item__name">{<div dangerouslySetInnerHTML={{__html: highLightText(text)}} />}</div>
          <div
            className={`select-item__icon`}
            style={{ opacity: isSelected === true ? 100 : 0 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="24"
                height="24"
                rx="12"
                className="select-item__icon-bg"
              />
              <path d="M8 12.2222L10.8571 15L16 10" stroke="white" />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};
