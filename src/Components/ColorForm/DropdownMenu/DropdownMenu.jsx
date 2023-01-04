import { useContext, useEffect, useRef, useState } from "react";
import classes from "./DropdownMenu.module.css";
import Select from "../Select/Select";
import { ColorContext } from "../../../colorContext";

function DropdownMenu() {
    const { setMode } = useContext(ColorContext);

    const [display, setDisplay] = useState(false);
    const displayRef = useRef(display);
    useEffect(() => {
        displayRef.current = display;
    }, [display]);

    const toggleDisplay = () => setDisplay(prevDisplay => !prevDisplay);

    const [value, setValue] = useState("Monochrome");
    const selectValue = (event) => {
        const value = event.target.textContent;
        setValue(value);
        setMode(value);
        toggleDisplay();
    };

    const dropdownRef = useRef(null);
    useEffect(() => {
        document.body.addEventListener("mousedown", (e) => {
            const wasDropdownClicked = dropdownRef.current.contains(e.target);
            wasDropdownClicked === false && displayRef.current === true && setDisplay(false);
        });
    }, [])

    return (
        <div ref={dropdownRef} className={classes.container}>
            <div className={classes.header} onClick={toggleDisplay}>
                <div className={classes.headerValue}>{value}</div>
                <div className={classes.headerIcon}><i className="ri-arrow-down-s-line"></i></div>
            </div>
            { display && 
                <div className={classes.dropdown}>
                    <Select textContent="Monochrome" value={value} selectValue={selectValue}/>
                    <Select textContent="Monochrome-dark" value={value} selectValue={selectValue}/>
                    <Select textContent="Monochrome-light" value={value} selectValue={selectValue}/>
                    <Select textContent="Analogic" value={value} selectValue={selectValue}/>
                    <Select textContent="Complement" value={value} selectValue={selectValue}/>
                    <Select textContent="Analogic-complement" value={value} selectValue={selectValue}/>
                    <Select textContent="Triad" value={value} selectValue={selectValue}/>
                </div>
            }
        </div>
    );
}

export default DropdownMenu;