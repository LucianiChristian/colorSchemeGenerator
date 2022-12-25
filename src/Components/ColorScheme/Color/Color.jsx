import classes from "./Color.module.css";

export default function Color({hex, name}) {
    return (
        <div className={classes.container}>
            <div>Color Here</div>
            <p>Hex Code: {hex}</p>
            <p>Name {name}</p>
        </div>
    )
}