import "./index.scss";
import PropTypes from "prop-types";
import React, { FC,ReactNode } from "react";

interface PopupGroupProps {
  /**
   * Label Of Group
   */
  label?: string;
  /**
   * Group Content
   */
  children?: ReactNode;
}

/** To Group Popup Content */
export const PopupGroup: FC<PopupGroupProps> = ({ label, children }) => {
  return (
    <div className="block-config__popup-group">
      <div className="block-config__popup-group-label">{label}</div>
      {children}
    </div>
  );
};

/**
 * Component Args
 */
PopupGroup.propTypes = {
  /**
   * Label Of Group
   */
  // @ts-ignore
  label: PropTypes.string,
  /**
   * Group Content
   */
  // @ts-ignore
  children: PropTypes.element,
};
