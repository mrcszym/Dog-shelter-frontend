import React, { useState } from "react"
import { Modal, Button } from 'react-bootstrap'
import Header from "./Header"
import Footer from "./Footer"

const WelcomePage = () => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const clearStorage = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('role')
    }

    return (
        <>
            {clearStorage()}
            {/* HEADER */}
            <Header />
            <header class="masthead bg-primary text-white text-center">
                <div class="container d-flex align-items-center flex-column">
                    <img class="masthead-avatar mb-5" src="/assets/img/front_page_corgi.png" alt="..." />
                    <h1 class="masthead-heading text-uppercase mb-0">Witaj w naszym domu!</h1>
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-paw"></i>
                        </div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <p class="masthead-subheading font-weight-light mb-0">Schroniska dla psów oraz kotów w całej Lubelszczyźnie</p>
                </div>
            </header>
            {/* ZDJĘCIA NA POCZĄTKU */}
            <section class="page-section portfolio" id="portfolio">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Czym się zajmujemy?</h2>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-paw"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row justify-content-center">

                        <div class="col-md-6 col-lg-4 mb-5" onClick={handleShow}>
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-paw"></i></div>
                                </div>
                                <img class="img-fluid" src="../assets/img/startphotos/dogfood.jpg" alt="..." />
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-5" onClick={handleShow}>
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-paw"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/startphotos/doghome.jpg" alt="..." />
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-5" onClick={handleShow}>
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-paw"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/startphotos/doghappy.jpg" alt="..." />
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-5" onClick={handleShow}>
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-paw"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/startphotos/dogwalk.jpg" alt="..." />
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-5" onClick={handleShow}>
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-paw"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/startphotos/dogandfriends.jpg" alt="..." />
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-5" onClick={handleShow}>
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-paw"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/startphotos/cat.jpg" alt="..." />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* JAK DOJECHAĆ */}
            <section class="page-section bg-primary text-white mb-0" id="about">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-white">Nasza lokalizacja</h2>
                    <div class="text-center mt-4">
                        <a class="btn btn-xl btn-outline-light" href="https://jakdojade.pl/lublin/trasa/">
                            <i class="fas fa-download me-2"></i> Sprawdź jak do nas dojechać!
                        </a>
                    </div>
                </div>
            </section>
            {/* LOGOWANIE*/}
            <section class="page-section bg-primary text-white mb-0" id="about">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-white">Chcesz adoptować? Zaloguj się!</h2>
                    <div class="text-center mt-4">
                        <a class="btn btn-xl btn-outline-light" href="/login">
                            <i class=""></i> Przejdź do logowania
                        </a>
                    </div>
                </div>
            </section>
            {/* STOPKA */}
            <Footer />


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Dokarmianiem zwierząt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Dokarmiamy je pożywnym jedzeniem!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Zamknij
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default WelcomePage