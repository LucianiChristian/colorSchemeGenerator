import { useState } from "react";
import classes from "./DropdownMenu.module.css";

function DropdownMenu() {
    const [display, setDisplay] = useState();
    const toggleDisplay = () => setDisplay(prevDisplay => !prevDisplay);

    const [value, setValue] = useState("");
    const selectValue = (event) => {
        const value = event.target.textContent;
        setValue(value);
        toggleDisplay();
    };
    
    return (
        <div className={classes.container}>
            <div className={classes.header} onClick={toggleDisplay}>
                <div className={classes.headerValue}>{value}</div>
                <div className={classes.headerIcon}>+</div>
            </div>
            { display && 
                <div className={classes.dropdown}>
                    <div className={classes.option} onClick={selectValue}>Monochrome</div>
                    <div className={classes.option} onClick={selectValue}>Analogic</div>
                    <div className={classes.option} onClick={selectValue}>Complement</div>
                </div>
            }
        </div>
    );
}

export default DropdownMenu;