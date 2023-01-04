import { useState } from "react";
import classes from "./Color.module.css";

export default function Color({hex, name}) {
    const [ animate, setAnimate ] = useState(false);

    function copyHexToClipboard() {
        navigator.clipboard.writeText(hex);
    }

    return (
        <div 
            className={classes.container}
            onClick={copyHexToClipboard}>
            <div 
                className={classes.colorBlock} 
                style={{backgroundColor: hex}}
            >
                <div className={classes.colorName}>{name}</div>    
            </div>
            <footer className={classes.hexFooter} onClick={() => setAnimate(true)}>
                {hex}
                <div 
                    className={`${classes.hexFooterCopied} ${animate ? classes.fadeUp : ""}`}
                    onAnimationEnd={() => setAnimate(false)}   
                >copied</div>
            </footer>
        </div>
    )
}