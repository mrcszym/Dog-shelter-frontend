import React, { useEffect, useState } from 'react'
import LoggedHeader from './LoggedHeader'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminPage = () => {

    const navigate = useNavigate()

    const [isAuthenticated, setAuthenticated] = useState(() => {
        const token = localStorage.getItem('access_token')
        const role = localStorage.getItem('role')
        return token !== null && role !== '[ROLE_USER]'
    });

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate('/')
        }
    }, [isAuthenticated])

    return (
        <>
            <LoggedHeader />
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
                Zalogowano jako administrator
            </h2>
            <div class="text-center mt-4">
                <a class="btn btn-xl btn-outline-dark" href="/applicationsmanagement">
                    Zarządzaj zgłoszeniami
                </a>
            </div>
        </>
    )
}

export default AdminPage
