import React, { FC, useState, useEffect } from "react";
import "./index.scss";


interface SelectItemProps{
  /** Select Items Image Path */
  image?:string,
  /** Item Text */
  text?:string,
  /** Value To Select */
  valueToSelect?:string,
  /** On Item Click `return(isSelected,valueToSelect)`*/
  onClick?:(isSelected:boolean,valueToSelect:string) => void,
  /** Loading Screen For The Component */
  isLoading?:boolean
  /**Default Selected? */
  isDefaultSelected?:boolean
}


// Select Item Component 
export const SelectItem:FC<SelectItemProps> = ({ image, text, onClick, valueToSelect, isLoading,isDefaultSelected }) => {
  const [isSelected, setIsSelected] = useState(false);


  useEffect(() => {
    if(isDefaultSelected){
      setIsSelected(isDefaultSelected)
    }
  },[])

  const onToggleSelectClick = (e: any) => {
    setIsSelected(!isSelected);
    onClick(!isSelected, valueToSelect);
  };

  return (
    <>
      {isLoading ? (
        <div className="select-item">
          <div className="select-item__img skeleton"></div>
          <div className="select-item__name skeleton">{'Skeleton'}</div>
        </div>
      ) : (
        <div className="select-item " onClick={onToggleSelectClick}>
          <div
            className="select-item__img"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="select-item__name">{text}</div>
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
