import React, { useState } from 'react'
import axios from 'axios'   
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import LoggedHeader from './LoggedHeader'

const ApplicationForm = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        animalName: "",
        phoneNumber: "",
        decision: ""
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

    const postApplicationFormDataOnSubmit = async (event) => {
        // for not refreshing page:
        event.preventDefault()

        const params = new URLSearchParams();
        params.append('name', formData.name);
        params.append('lastname', formData.lastname);
        params.append('animalName', formData.animalName);
        params.append('phoneNumber', formData.phoneNumber);
        params.append('decision', 'oczekujące');

        try {
            const response = await axios.post("/f/save", params)
            console.log(response)
            // const response = await fetch("/f/save?" + params, {method: 'POST'})
            toast.success("Pomyślnie wysłano zgłoszenie")
            resetFormData()
            
        } catch(error) {
            console.log(error)
            toast.error("Wystąpił błąd")
        }
    }

    const resetFormData = () => {
        setFormData({
            name: '',
            lastname: '',
            animalName: '',
            phoneNumber: ''
        })
    }

    return (
        <>
        <LoggedHeader />
            <div class="text-center mt-4">
                <a class="btn btn-xl btn-outline-dark" href="/userpage">
                    Anuluj i powróć
                </a>
            </div>
            <section class="page-section" id="contact">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Formularz adopcji</h2>

                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-paw"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>

                    <div class="box">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 col-xl-7">
                                <div id="aboutForm">Wypełnij i poczekaj do tygodnia na decyzję</div>

                                <form onSubmit={postApplicationFormDataOnSubmit} onReset={resetFormData}>

                                    <div class="form-floating">
                                        <input class="form-control" name="name" type="text"
                                            placeholder="Wprowadz imie..."
                                            pattern="[A-z]{3,15}"
                                            value={formData.name} onChange={setDataOnChange}
                                            required />
                                        <label for="name">Imię</label>
                                    </div>
                                    <div class="form-floating>">
                                        <div id="imie_error" class="error_field"></div>
                                    </div>

                                    <div class="form-floating">
                                        <input class="form-control" name="lastname" type="text"
                                            placeholder="Wprowadz nazwisko..."
                                            pattern="[A-z]{3,20}"
                                            value={formData.lastname} onChange={setDataOnChange}
                                            required />
                                        <label for="lastname">Nazwisko</label>
                                    </div>
                                    <div class="form-floating>">
                                        <div id="nazwisko_error" class="error_field"></div>
                                    </div>

                                    <div class="form-floating">
                                        <input class="form-control" type="text" name="animalName"
                                            placeholder="Wprowadz zwierze..."
                                            value={formData.animalName} onChange={setDataOnChange}
                                            required />
                                        <label for="animalName">Jakim zwierzęciem jesteś zainteresowany/a?</label>
                                    </div>
                                    <div class="form-floating>">
                                        <div id="animalName_error" class="error_field"></div>
                                    </div>

                                    <div class="form-floating">
                                        <input class="form-control" name="phoneNumber" type="tel"
                                            placeholder="Wprowadz numer telefonu..."
                                            pattern="[0-9]{9}"
                                            value={formData.phoneNumber} onChange={setDataOnChange}
                                            required />
                                        <label for="phoneNumber">Numer telefonu</label>
                                    </div>
                                    <div class="form-floating>">
                                        <div id="phoneNumber_error" class="error_field"></div>
                                    </div>

                                    <br />

                                    <div class="form-floating">
                                        <div class="form-question">Oświadczam, że:</div>
                                        <p><input name="inputReg" type="checkbox" id="ch1" required /> Jestem osobą odpowiedzialną</p>
                                        <p><input name="inputReg" type="checkbox" id="ch2" required /> Znam koszty posiadania zwierzaka</p>
                                        <p><input name="inputReg" type="checkbox" id="ch3" required /> Akceptuj <strong>Regulamin</strong></p>
                                    </div>
                                    <div class="form-floating>">
                                        <div id="checkbox_error" class="error_field"></div>
                                    </div>

                                    <table>
                                        <tr>
                                            <td><button type="submit" class="btn btn-primary btn-xl" id="submitbtn">Wyślij</button></td>
                                            <td><button class="btn btn-primary btn-xl" id="resetbtn" type="reset">Wyczyść</button></td>                                    </tr>
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

export default ApplicationForm
