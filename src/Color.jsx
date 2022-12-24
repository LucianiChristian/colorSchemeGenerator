export default function Color({hex, name}) {
    return (
        <div className="color-container">
            <div>Color Here</div>
            <p>Hex Code: {hex}</p>
            <p>Name {name}</p>
        </div>
    )
}