import React,{useState,useEffect,useRef, FC} from "react"
import "./index.scss"
import "../../scss/theme.scss"
import "../scss/input-fields.scss"
import PropTypes from 'prop-types';

interface TextInputControlProps {
    /**
     * Add Input Field Label
     */
     label?: string,
     /**
      * Value To Display In The Input Field
      */
     value?: string,
     /**
      * Placeholder Value Of The Input Field
      */
     placeholder?: string,
     /**
      * Run The Function When Input Value Is Changing
      */
     onChange?: () => void,
     /**
      * Maximum Character Count
      */
     max?: number,
     /**
      * Error Message To Display
      */
     errMsg?: string,
     /**
      * Add A Class Name To The Input Field
      */
     className?: string
}


/** Text Input Field */
const TextInputControl:FC<TextInputControlProps> = ({label,placeholder,onChange,value,max,errMsg,className}) => {
    const [isSelected,setIsSelected] = useState(false)
    const [isExpanded,setIsExpanded] = useState(false)
    const textInput: any = useRef();

    useEffect(() => {
        if(value !== undefined){
            setIsExpanded(true)
        } 
    },[])

    const onInputFocus = (e) => {
        setIsSelected(true)
        setIsExpanded(true)
        //Focus On The Input Field
        textInput.current.focus()
    }

    const onInputBlur = (e) => {
        setIsSelected(false)
        if(e.target.value === ""){
            setIsExpanded(false)
        }
    }

    // replace spaces with "-"
    const stringToName = (label: string) => {
        const charToRemove = " " //space
        if(label){
            const replaceCharIndex = label.indexOf(charToRemove)
            let labelArr:string | string[] = label.split("")
            labelArr[replaceCharIndex] = "-"
            labelArr = labelArr.join('')
            return labelArr.toLowerCase()
        }
    }
    return(
        <>
            <div className={`input-field ${className && className} ${isSelected === true && 'selected'} ${isExpanded === true && 'expanded'}`} onFocus={onInputFocus} onBlur={onInputBlur} onClick={onInputFocus}>
                <label htmlFor={label && stringToName(label)}>{label && label}</label>
                <input type="text" className={`input-field__input`} name={label && stringToName(label)} onChange={onChange && onChange} maxLength={max && max} value={value && value} ref={textInput} placeholder={placeholder}/>
            </div>
            {errMsg &&
                <p className="err-msg">{errMsg}</p>
            }
        </>
    )
}

export default TextInputControl

/**
 * Component Args
 */
 TextInputControl.propTypes = {
    /**
     * Add Input Field Label
     */
    label: PropTypes.string,
    /**
     * Value To Display In The Input Field
     */
    value: PropTypes.string,
    /**
     * Placeholder Value Of The Input Field
     */
    placeholder:PropTypes.string,
    /**
     * Run The Function When Input Value Is Changing
     */
    onChange:PropTypes.func,
    /**
     * Maximum Character Count
     */
    max:PropTypes.number,
    /**
     * Error Message To Display
     */
    errMsg:PropTypes.string,
    /**
     * Add A Class Name To The Input Field
     */
    className:PropTypes.string
  };