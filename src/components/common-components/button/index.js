import "./index.scss"

const Button = ({type,category,name,onClick,className,buttonName}) => {
    if(!category){
        category='primary'
    }
    const buttonCategories = [
        {
            category:'primary',
            className:'btn--primary'
        },
        {
            category:'secondary',
            className:'btn--secondary'
        }
    ]
    // render button styles according to the type 
    const renderButtonClassName = () => {
        let buttonClassName
        buttonCategories.map(btnCategory => {
            if(category.toLowerCase() === btnCategory.category.toLowerCase()){
                buttonClassName = btnCategory.className
            }
        })
        return buttonClassName
    }

    console.log(renderButtonClassName())

    return(
        <button 
            type={type} 
            className={`btn ${renderButtonClassName()} ${className}`} 
            onClick={onClick} 
            name={name}
        >
            {buttonName}
        </button>
    )
}

export default Button