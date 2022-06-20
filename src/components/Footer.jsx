import React from "react"

const Footer = () => {
  return (
    <>
<footer class="footer text-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <h4 class="text-uppercase mb-4">Czy było ciężko?</h4>
                    <p class="lead mb-0">
                        Było
                    </p>
                </div>
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <h4 class="text-uppercase mb-4">Znajdź nas w internecie</h4>
                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
                </div>
                <div class="col-lg-4">
                    <h4 class="text-uppercase mb-4">O stronie</h4>
                    <p class="lead mb-0">
                       Strona jest projektem końcowym z przedmiotu "Szkielety programistyczne"
                    </p>
                </div>
            </div>
        </div>
    </footer>
    <div class="copyright py-4 text-center text-white">
        <div class="container"><small>&copy; Szymon Marciniec 2022</small></div>
    </div>
    </>
  )
}

export default Footer
