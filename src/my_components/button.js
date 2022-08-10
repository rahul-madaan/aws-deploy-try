import { useState} from "react";

export const Button = () => {
    const [button, setButton] = useState(0);
    function handleClick() {
        setButton(button+1);
    }
    return (
        <>
            <p>Number</p>
            <>{button}</> 
            <div>
                <button onClick={handleClick}>Click to increase number</button>
            </div>
        </>
    )
}
