import classes from "./App.module.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import DropdownMenu from "./Components/ColorForm/DropdownMenu";
import ColorScheme from "./Components/ColorScheme/ColorScheme";

export default function App () {
    return (
        <div className={classes.pageContainer}>
            <DropdownMenu />
            <div className={classes.appContainer}>
                <ColorForm />
                <ColorScheme />
            </div>
        </div>
    )
}