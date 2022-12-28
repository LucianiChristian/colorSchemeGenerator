import classes from "./ColorForm.module.css";
import DropdownMenu from "./DropdownMenu";

export default function ColorForm() {
    return (
        <div className={classes.container}>
            <input type="color"/>
            <DropdownMenu />
            <button>Get color scheme</button>
        </div>
    )
}
            // <select>
            //     <option value="monochrome">Monochrome</option>
            //     <option value="monochrome-dark">Monochrome-dark</option>
            //     <option value="monochrome-light">Monochrome-light</option>
            //     <option value="analogic">Analogic</option>
            //     <option value="complement">Complement</option>
            //     <option value="analogic-complement">Analogic-complement</option>
            //     <option value="triad">Triad</option>
            //     <option value="quad">Quad</option>
            // </select>