import classes from "./ColorForm.module.css";

export default function ColorForm() {
    return (
        <div className={classes.container}>
            <input type="color"/>
            <select>
                <option value="monochrome">Monochrome</option>
                <option value="monochrome-dark">Monochrome-dark</option>
                <option value="monochrome-light">Monochrome-light</option>
                <option value="analogic">Analogic</option>
                <option value="complement">Complement</option>
                <option value="analogic-complement">Analogic-complement</option>
                <option value="triad">Triad</option>
                <option value="quad">Quad</option>
            </select>
            <button>Get color scheme</button>
        </div>
    )
}