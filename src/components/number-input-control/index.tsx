import React, { useState, useEffect, useRef, FC, ReactNode } from "react"
import "./index.scss"
import "../../scss/theme.scss"
import "../scss/input-fields.scss"
import PropTypes from 'prop-types';


interface NumberInputControlProps {
    /**
     * Add Input Field Label
     */
     label?: string
     /**
      * Value To Display In The Input Field
      */
     value?: number
     /**
      * Placeholder Value Of The Input Field
      */
     placeholder?:string
     /**
      * Run The Function When Input Value Is Changing
      */
     onChange?: () => void
     /**
      * Error Message To Display
      */
     errMsg?: string
     /**
      * Add A Class Name To The Input Field
      */
     className?:string
}

/** Number Input Field */
export const NumberInputControl:FC<NumberInputControlProps> = ({ label, placeholder, onChange, value, errMsg, className }) => {
    const [isSelected, setIsSelected] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const textInput:any = useRef();

    useEffect(() => {
        if (value !== undefined) {
            setIsExpanded(true)
        }
    }, [])

    const onInputFocus = (e:any) => {
        setIsSelected(true)
        setIsExpanded(true)
        //Focus On The Input Field
        textInput.current.focus()
    }

    const onInputBlur = (e:any) => {
        setIsSelected(false)
        if (e.target.value === "") {
            setIsExpanded(false)
        }
    }

    // replace spaces with "-"
    const stringToName = (label?: string) => {
        const charToRemove = " " //space
        if (label) {
            const replaceCharIndex = label.indexOf(charToRemove)
            let labelArr:string[] | string = label.split("")
            labelArr[replaceCharIndex] = "-"
            labelArr = labelArr.join('')
            return labelArr.toLowerCase()
        }
    }

    const diableAlphebets = (e:any) => {
        if ((e.keyCode >= 64 && e.keyCode <= 91) || (e.keyCode >= 96 && e.keyCode <= 123)) {
            e.preventDefault();
        }
    }

    const disableSpecialCharacters = (e:any) => {
        const regex = /[`!@#$%^&*()_+\-=\[\]\s{};':"\\|,.<>\/?~]/g
        if (regex.test(e.key)) {
            e.preventDefault();
        }
    }

    const onKeyDown = (e:any) => {
        diableAlphebets(e)
        disableSpecialCharacters(e)
    }

    return (
        <>
            <div className={`input-field ${className && className} ${isSelected === true && 'selected'} ${isExpanded === true && 'expanded'}`} onFocus={onInputFocus} onBlur={onInputBlur} onClick={onInputFocus} onKeyDown={onKeyDown}>
                <label htmlFor={stringToName(label)}>{label && label}</label>
                <input type="number" inputMode="numeric" className={`input-field__input`} name={stringToName(label)} onChange={onChange && onChange} value={value && value} ref={textInput} placeholder={placeholder} />
            </div>
            {errMsg &&
                <p className="err-msg">{errMsg}</p>
            }
        </>
    )
}

/**
 * Component Args
 */
 NumberInputControl.propTypes = {
    /**
     * Add Input Field Label
     */
    //@ts-ignore
    label: PropTypes.string,
    /**
     * Value To Display In The Input Field
     */
    //@ts-ignore
    value: PropTypes.number,
    /**
     * Placeholder Value Of The Input Field
     */
    //@ts-ignore
    placeholder:PropTypes.string,
    /**
     * Run The Function When Input Value Is Changing
     */
    //@ts-ignore
    onChange:PropTypes.func,
    /**
     * Error Message To Display
     */
    //@ts-ignore
    errMsg:PropTypes.string,
    /**
     * Add A Class Name To The Input Field
     */
    //@ts-ignore
    className:PropTypes.string
  };