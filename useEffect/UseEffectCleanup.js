import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [clicked, setclicked] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('We are in Use state')

        return(
            ()=>{
                console.log("return of use State")
            }
        )
    },[clicked])

    return (
        <div>
            <button onClick={() => setclicked('Follow')}>
                Follow</button>
            <br />
            <hr />
            <button onClick={() => setclicked('To')}>
                to</button>
            <br />
            <hr />
            <button onClick={() => setclicked('mayura')}>
                mayura</button>
            <h1>{clicked}</h1>
            <button onClick={() => {setCount(count + 1)}}>Increment</button>
            <h1>{count}</h1>
        </div>
    )
}

export default UseEffect
