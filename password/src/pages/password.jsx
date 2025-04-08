import React, { useState } from 'react'
import "../styles/password.scss"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


export const Password = () => {
    const [password, setPassword] = useState(
        {
            isShow: true
        }
    )
    const isShowPassHandler = () => {
        setPassword({ ...password, isShow: !password.isShow })
    }
    const pwdCheckHandler = () => {

    }
    const passwordValid = [
        {
            type: "Uppercase"
        },
        {
            type: "Lowercase"
        },
        {
            type: "Special charector"
        }
    ]

    return (
        <div className='passwordCoantainer'>
            <h3>Password hide/show</h3>
            <div className="passwordInput">
                <input type={password.isShow ? "password" : "text"} />
                <div className="isShowPassword" onClick={isShowPassHandler}>
                    {password.isShow ? <FaEyeSlash /> : <FaEye />}
                </div>
            </div>
            <div className="passwordStrong">
                {
                    passwordValid.map((passwordData) => {
                        return (
                            <div className="password">
                                <input type="checkbox" name="" id="" />
                                <span>{passwordData.type}</span>
                            </div>
                        )
                    })
                }
            </div>
            <b>🧑🏼‍💻mr-jiteshpandey</b>
        </div>
    )
} 