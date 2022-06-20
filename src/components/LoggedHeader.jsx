import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoggedHeader = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('role')
        navigate('/')
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand">Przygarnij psiaka</a>
                    <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                            <li onClick={logout} class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded">Wyloguj się</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br /><br /><br /><br /><br /><br />
        </>
    )
}

export default LoggedHeader
