import React, { useState } from 'react'

const Form = () => {

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const [formData, setFormData]= useState({
        name:'',
        email:'',
        password:''
    })

    const handleInput =(e) =>{
        const {name,value} =e.target;

        setFormData({
            [name]:value
        })
    }

    // const handleName = (n) => {
    //     console.log(n.target.value)
    //     setName(n.target.value)
    // }

    // const handleEmail = (e) => {
    //     console.log(e.target.value)
    //     setEmail(e.target.value)
    // }
    // const handlePassword = (p) => {
    //     console.log(p.target.value)
    //     setPassword(p.target.value)
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <lable>
                    Name:<br></br>
                    <input type='text' name="name" value={formData.name} onChange={handleInput}></input><br></br>
                </lable>
                <lable>
                    Email:<br></br>
                    <input type='email' name="email" value={formData.email} onChange={handleInput}></input><br></br>
                </lable>
                <lable>
                    Password:<br></br>
                    <input type='password' name="password" value={formData.password} onChange={handleInput}></input>
                </lable><br></br><br></br>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;
