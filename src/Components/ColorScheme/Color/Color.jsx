import classes from "./Color.module.css";

export default function Color({hex, name}) {
    return (
        <div className={classes.container}>
            <div 
                className={classes.colorBlock} 
                style={{backgroundColor: hex}}
            >{name}</div>
            <footer className={classes.hexFooter}>{hex}</footer>
        </div>
    )
}