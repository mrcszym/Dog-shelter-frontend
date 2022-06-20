import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })


    const setDataOnChange = (event) => {
        // ... <- take all fields from obj
        const target = event.target
        setFormData({
            ...formData,
            // not a table:
            [target.name]: target.value
        })
    }

    const postFormDataOnSubmit = async (event) => {
        // for not refreshing page:
        event.preventDefault()

        const params = new URLSearchParams();
        params.append('email', formData.email);
        params.append('password', formData.password);

        try {
            const response = await axios.post("/login", params)

            // 200 = ok
            if (response.status === 200) {
                localStorage.setItem('access_token', response.data.access_token)
                localStorage.setItem('role', response.data.role)
                
                if (response.data.role === "[ROLE_USER]") {
                    navigate('/userpage')
                }
                else if (response.data.role === "[ROLE_ADMIN]") {
                    navigate('/adminpage')
                } 
            } 
        } catch {
            toast.error("Błędne dane logowania")
        }
        
    }

    const resetFormData = () => {
        setFormData({
            email: '',
            password: ''
        })
    }

    return (
        <>
            <div className="text-center mt-4">
                <a className="btn btn-xl btn-outline-dark" href="/">
                    Anuluj i powróć
                </a>
            </div>
            <section className="page-section" id="contact">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Logowanie</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-paw"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="box">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-xl-7">

                                <form onSubmit={postFormDataOnSubmit} onReset={resetFormData}>

                                    <div id="aboutForm">Podaj dane swojego konta</div>

                                    <div className="form-floating">
                                        <input className="form-control" name="email" type="email" placeholder="Wprowadź login..."
                                            value={formData.email} onChange={setDataOnChange} required />
                                        <label for="email">Email</label>
                                    </div>
                                    <div className="form-floating>">
                                        <div id="email_error" className="error_field"></div>
                                    </div>

                                    <div className="form-floating">
                                        <input className="form-control" name="password" type="password" placeholder="Wprowadz hasło..." value={formData.password} onChange={setDataOnChange} required />
                                        <label for="password">Hasło</label>
                                    </div>
                                    <div className="form-floating>">
                                        <div id="password_error" className="password_error"></div>
                                    </div>

                                    <table>
                                        <tr>
                                            <td><button type="submit" className="btn btn-primary btn-xl" id="submitbtn">Zaloguj</button></td>
                                            <td><button className="btn btn-primary btn-xl" id="resetbtn" type="reset">Wyczyść</button></td>
                                        </tr>
                                    </table>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default LoginPage