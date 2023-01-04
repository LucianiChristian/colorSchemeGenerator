import { createContext, useState } from "react";

const ColorContext = createContext();

function ColorContextProvider({children}) {
    const [colors, setColors] = useState([]);
    const [mode, setMode] = useState("Monochrome");

    function refreshColors(seed) {
        let api_seed = seed.slice(1);
        let api_mode = mode.toLowerCase();
        
        fetch(`https://www.thecolorapi.com/scheme?hex=${api_seed}&mode=${api_mode}&count=5`)
            .then(response => response.json())
            .then(data => setColors(data.colors.map(color => ({
                hex: color.hex.value,
                name: color.name.value,
            }))));
    }
    
    return ( 
        <ColorContext.Provider value={{colors, refreshColors, setMode}}>
            {children}
        </ColorContext.Provider>
    );
}

export { ColorContextProvider, ColorContext };