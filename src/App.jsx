import { useContext, useEffect } from "react";
import classes from "./App.module.css";
import { ColorContext } from "./colorContext";
import ColorForm from "./Components/ColorForm/ColorForm";
import ColorScheme from "./Components/ColorScheme/ColorScheme";

export default function App () {
    const { colors, refreshColors } = useContext(ColorContext);

    useEffect(() => refreshColors(colors), []);

    return (
        <div className={classes.pageContainer}>
            <div className={classes.appContainer}>
                <ColorForm />
                <ColorScheme />
            </div>
        </div>
    )
}