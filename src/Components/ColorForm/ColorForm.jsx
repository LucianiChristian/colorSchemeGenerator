import classes from "./ColorForm.module.css";
import DropdownMenu from "./DropdownMenu";
import { ColorContext } from "../../colorContext";
import { useContext, useState } from "react";

export default function ColorForm() {
    const { refreshColors } = useContext(ColorContext);

    const [colorInput, setColorInput] = useState("#000000"); 
    
    return (
        <div className={classes.container}>
            <input type="color" value={colorInput} onChange={(e) => setColorInput(e.target.value)}/>
            <DropdownMenu />
            <button onClick={() => refreshColors(colorInput)}>Get color scheme</button>
        </div>
    )
}