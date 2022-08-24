import React, { FC,useEffect, useState,ReactNode  } from 'react';
import "./scss/index.scss";
// @ts-ignore
import brandLogo from '../../../images/brand-logo-light.png';
import PropTypes from 'prop-types';
import "../../../scss/loading-screen.scss"
import 'react-loading-skeleton/dist/skeleton.css'
import { Oval } from  'react-loader-spinner'
export interface BlockConfigProps {
  /**
   * Name Of The Block
   */
  name?:string;
  /**
   * Description About The Block
   */
  description?:string;
  /**
   * Block Icon
   */
  icon?:ReactNode;
  /**
   * Block Configuration Content
   */
  children?:ReactNode;
  /**
   * Is Component Content Loading
   */
  isLoading?:boolean
}



/**
 * A Component To Display Guternberg Block Configuration
 */
export const GuternbergBlockConfig:FC<BlockConfigProps> = ({ name, description, icon, children,isLoading }) => {

  const loading = () => {
    const skeletonColor = 'rgb(209, 209, 209)'
    return(
        <div className='loading block-config'>
          <Oval
            height = "60"
            width = "60"
            color = {skeletonColor}
            ariaLabel = 'three-dots-loading'    
            secondaryColor={skeletonColor}
            strokeWidth='4'
          />
        </div>
    )
  }


  //isLoading Default Is False
    if(!isLoading){
      isLoading = false
    }
  return (
    <>
    {
      isLoading === false ?
      <div className='block-config'>
        {brandLogo &&
          <img src={brandLogo} alt='brand logo' className='block-config__details-brand-logo' />
        }
        <div className='block-config__details'>
          <div className='block-config__details-top'>
            {icon &&
              <div className='block-config__details-icon'>
                {icon}
              </div>
            }
            {name &&
              <h1 className='block-config__details-heading'>
                {/* Block Name */}
                {name}
              </h1>
            }
          </div>
          {description &&
            <p className='block-config__details-description'>
              {/* Block Description */}
              {description}
            </p>
          }
        </div>
        {children}
      </div>
      :
      //component loading screen
      loading()
    }
      
    </>
  );
}


/**
 * Component Args
 */
 GuternbergBlockConfig.propTypes = {
  /**
   * Block Name
   */
  // @ts-ignore
  name: PropTypes.string,
  /**
   * Block Description
   */
  // @ts-ignore
  description: PropTypes.string,
  /**
   * Block Icon
   */
  icon:PropTypes.element,
  /**
   * Guternberg Block Config Content
   */
  children:PropTypes.element,
  /**
   * Is Component Content Loading
   */
  isLoading:PropTypes.bool
};