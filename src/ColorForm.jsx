export default function ColorForm() {
    return (
        <div>
            <input type="color" />
            <select>
                <option value="monochrome">monochrome</option>
                <option value="monochrome-dark">monochrome-dark</option>
                <option value="monochrome-light">monochrome-light</option>
                <option value="analogic">analogic</option>
                <option value="complement">complement</option>
                <option value="analogic-complement">analogic-complement</option>
                <option value="triad">triad</option>
                <option value="quad">quad</option>
            </select>
            <button>Get Scheme</button>
        </div>
    )
}