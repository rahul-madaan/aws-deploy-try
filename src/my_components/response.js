import {useState} from "react";
import axios from "axios";



export const Response = () => {
    const [text , setText] = useState("Initial text")
    const handleClick = (e) => {
        e.preventDefault()
        axios.get("http://localhost:9000/testapi",
        ).then(result => {
            console.log(result.data)
            setText(result.data)
        })
    }




    return (
        <>
            <p>Number</p>
            <>{text}</>
            <div>
                <button onClick={handleClick}>Click to change text</button>
            </div>
        </>
    )
}