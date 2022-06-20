import React, { useEffect, useState } from 'react'
import LoggedHeader from './LoggedHeader'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UserPage = () => {

    const navigate = useNavigate()

    const [isAuthenticated, setAuthenticated] = useState(() => {
        const token = localStorage.getItem('access_token')
        const role = localStorage.getItem('role')
        return token !== null && role !== '[ROLE_ADMIN]'
    });

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate('/')
        }
    }, [isAuthenticated])



    return (
        <>
            <LoggedHeader />

            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-paw"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
                Witaj na swoim profilu!
            </h2>
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-line"></div>
                <div class="divider-custom-line"></div>
            </div>
            <div class="text-center mt-4">
                <a class="btn btn-xl btn-outline-dark" href="/applicationform">
                    Dodaj nowy formularz aplikacji
                </a>
            </div>
            <div class="text-center mt-4">
                <a class="btn btn-xl btn-outline-dark" href="/userapplications">
                    Wyświetl dotychczasowe aplikacje
                </a>
            </div>
            <div class="container d-flex align-items-center flex-column">
                <img class="masthead-avatar mb-5" src="../assets/img/userpagedogs.png" alt="..." />
            </div>
            <Footer />
        </>
    )
}

export default UserPage
