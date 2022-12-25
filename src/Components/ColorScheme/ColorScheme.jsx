import classes from "./ColorScheme.module.css";
import Color from "./Color/Color";

export default function ColorScheme() {
    return (
        <main className={classes.container}>
            <Color hex="#DA3287" name="frosty" />
            <Color hex="#DA3287" name="frosty" />
            <Color hex="#DA3287" name="frosty" />
            <Color hex="#DA3287" name="frosty" />
            <Color hex="#DA3287" name="frosty" />
        </main>
    )
}