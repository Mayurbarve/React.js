import React, { useContext } from 'react'
import {GreetContext} from './A'


export default function C ()  {
  const useCon = useContext(GreetContext);
  console.log(useCon);
  return (
    <h1>Greet:{useCon.greet} {useCon.greet2}</h1>
  )
}







/* <GreetContext.Consumer>
{
  (val)=>{
    return(
      <Greet2Context.Consumer>
        {
          (val2)=>{
            return <h1>Greet: {val} {val2}</h1>
          }
        }
      </Greet2Context.Consumer>
    )
  }
}
</GreetContext.Consumer> */