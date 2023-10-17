import nutrikidLogo from './assets/Images/Logo.png'


function header() {
    return (

        <>
        
            <header class="navbox">
                <div class="nav-button">
                    <div class="horizontal-container">
                        <a href="#landingPage" class="dashboard"><img src={nutrikidLogo} alt="Logo" class="logo"/></a>
                        <nav class="navigation">
                            <a href="#programPage" class="program">Program</a>
                            <a href="#konsultasiPage" class="konsultasi">Konsultasi</a>
                            <a href="#artikelPage" class="artikel">Artikel</a>
                        </nav>
                    </div>
                    <div class="buttonbox">
                        <div class="login">Login</div>
                        <div class="signup">Sign Up</div>
                    </div>
                </div>
            </header>
        
        </>

    )
}

export default header