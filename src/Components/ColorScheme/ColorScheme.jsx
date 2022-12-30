import classes from "./ColorScheme.module.css";
import Color from "./Color/Color";
import { ColorContext } from "../../colorContext";
import { useContext } from "react";

export default function ColorScheme() {
    const { colors } = useContext(ColorContext);
    
    return (
        <main className={classes.container}>
            {
                colors.map((color, index) => <Color key={index} hex={color.hex} name={color.name}/>)
            }
        </main>
    )
}