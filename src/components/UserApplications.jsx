import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import LoggedHeader from './LoggedHeader'
import { Modal, Button } from 'react-bootstrap'

const UserApplications = () => {

    const [formsList, setFormsList] = useState([])
    const [currentId, setCurrentId] = useState([]);

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const getApplicationForms = async () => {

        const params = new URLSearchParams();
        params.append('access_token', localStorage.getItem('access_token'));

        try {
            const response = await axios.get("f/forms", params)
            setFormsList(response.data)
        } catch {
            toast.error("Wystąpił błąd")
        }
    }

    const deleteForm = async () => {
        try {
            const response = await axios.delete(`f/delete/${currentId}`)
            toast.success("Usunięto")
            getApplicationForms()
        } catch {
            toast.error("Wystąpił bład")
        }
    }

    // immediately invoked function
    useEffect(() => {
        (async () => {
            await getApplicationForms()
        })()
    }, [])

    return (
        <>
            <LoggedHeader />
            <div class="text-center mt-4">
                <a class="btn btn-xl btn-outline-dark" href="/userpage">
                    Powrót
                </a>
            </div>
            <div class="modal-body text-center pb-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <br /> <br />
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Twoje dotychczasowe zgłoszenia</h2>
                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon"><i class="fas fa-paw"></i></div>
                                <div class="divider-custom-line"></div>
                            </div>
                            {
                                formsList.length !== 0 ?

                                    <table id="applicatonsTable">
                                        <tr>
                                            <th><h4>Status</h4></th>
                                            <th><h4>Imię</h4></th>
                                            <th><h4>Nazwisko</h4></th>
                                            <th><h4>Zwierze</h4></th>
                                            <th><h4>Nr telefonu</h4></th>
                                            <th><h4></h4></th>
                                        </tr>
                                        {
                                            formsList.map((row) => {
                                                return (
                                                    <tr>
                                                        <td><strong>{row.decision}</strong></td>
                                                        <td>{row.name}</td>
                                                        <td>{row.lastname}</td>
                                                        <td>{row.animalName}</td>
                                                        <td>{row.phoneNumber}</td>
                                                        <td>
                                                            <button id="deletebtn" onClick={
                                                                () => {
                                                                    handleShow()
                                                                    setCurrentId(row.id)
                                                                }
                                                            }>
                                                                usuń
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </table>

                                    : <h2>Brak zgłoszeń</h2>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Usuwanie zgłoszenia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Czy na pewno chcesz usunąć zgłoszenie? Zostanie ono wycofane i straci możliwośc zaakceptowania przez administratora.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={deleteForm}>
                        Tak
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Nie
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default UserApplications
