import React, { useEffect, useState } from 'react'
import "../styles/password.scss"
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Password = () => {
    const [password, setPassword] = useState({
        isShow: true,
        passwordValue: "",
        progressBar: 0
    });
    const isShowPassHandler = () => {
        setPassword(prev => ({ ...prev, isShow: !prev.isShow }));
    };
    const pwdCheckHandler = (e) => {
        const { value } = e.target;
        setPassword(prev => ({ ...prev, passwordValue: value }));
    };
    const passwordValid = [
        {
            type: "Uppercase",
            isTrue: /[A-Z]/.test(password.passwordValue)
        },
        {
            type: "Lowercase",
            isTrue: /[a-z]/.test(password.passwordValue)
        },
        {
            type: "Special character",
            isTrue: /[^a-zA-Z0-9]/.test(password.passwordValue)
        },
        {
            type: "Number",
            isTrue: /\d/.test(password.passwordValue)
        }
    ];
    const getStrengthLabel = () => {
        if (password.progressBar === 0) return "";
        if (password.progressBar <= 25) return "Weak";
        if (password.progressBar <= 50) return "Intermediate";
        return "Strong";
    };
    useEffect(() => {
        const validCount = passwordValid.filter(item => item.isTrue).length;
        const progress = (validCount / passwordValid.length) * 100;
        setPassword(prev => ({ ...prev, progressBar: progress }));
    }, [password.passwordValue]);
    return (
        <div className='passwordCoantainer'>
            <h3>Password StrengthCheck 🔐</h3>
            <div className="passwordInput">
                <input
                    type={password.isShow ? "password" : "text"}
                    onChange={pwdCheckHandler}
                    value={password.passwordValue}
                />
                <div className="isShowPassword" onClick={isShowPassHandler}>
                    {password.isShow ? <FaEyeSlash color='red' /> : <FaEye color='blue'/>}
                </div>
            </div>
            <div className="progressContainer">
                <div
                    className="progressBar"
                    style={{
                        width: `${password.progressBar}%`,
                        background: password.progressBar === 100 ? "#00c853" : "#ffab00",
                        textAlign: "center",
                    }}
                >
                    {getStrengthLabel()}
                </div>
            </div>
            <div className="passwordStrong">
                {
                    passwordValid.map(({ type, isTrue }, idx) => (
                        <div className="password" key={idx}>
                            <input type="checkbox" checked={isTrue} readOnly />
                            <span>{type}</span>
                        </div>
                    ))
                }
            </div>
            <div className='author'>
                <b>Author- 🧑🏼‍💻mr-jiteshpandey</b>
            </div>
        </div>
    );
}
