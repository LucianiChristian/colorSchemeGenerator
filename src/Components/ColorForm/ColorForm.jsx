import classes from "./ColorForm.module.css";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import { ColorContext } from "../../colorContext";
import { useContext, useState, useEffect } from "react";

export default function ColorForm() {
    const { refreshColors } = useContext(ColorContext);

    const [colorInput, setColorInput] = useState("#FFFFFF"); 
    
    useEffect(() => refreshColors(colorInput), []);

    return (
        <div className={classes.container}>
            <input className={classes.colorPicker} type="color" value={colorInput} onChange={(e) => setColorInput(e.target.value)}/>
            <DropdownMenu />
            <button onClick={() => refreshColors(colorInput)}>Get color scheme</button>
        </div>
    )
}