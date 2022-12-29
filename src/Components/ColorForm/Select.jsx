import classes from "./Select.module.css";

function Select({textContent, value, selectValue}) {
    const selected = value === textContent;

    return (  
        <div 
            className={`${classes.option} ${selected && classes.selected}`} 
            onClick={selectValue}
        >
            {textContent}
            {selected && <i className="ri-check-fill"></i>}
        </div>
    );
}

export default Select;