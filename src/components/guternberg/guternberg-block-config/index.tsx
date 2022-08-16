import React, { FC,useEffect, useState,ReactNode  } from 'react';
import "./scss/index.scss";
import brandLogo from '../../../images/brand-logo-light.png';
import "../../../scss/theme.scss"
import PropTypes from 'prop-types';

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
  icon?:any;
  /**
   * Block Configuration Content
   */
  children?:HTMLElement | ReactNode;
}

/**
 * A Component To Display Guternberg Block Configuration
 */
export const GuternbergBlockConfig:FC<BlockConfigProps> = ({ name, description, icon, children }) => {
  return (
    <>
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
};