import ellipse from './assets/Images/Ellipse-BG.png'
import doctor from './assets/Images/doctor-with-tablet-and-phone.png'


function heropage() {
    return (

        <>
        
            <section class="bannerbox">
                <div class="imagebanner">
                    <img src={ellipse} alt="elipse" class="imgelipse"/>
                    <img src={doctor} alt="doctor" class="imgdoctor"/>
                </div>
                <div class="textbanner">
                    <div class="ctaphrase">
                    Konsultasi Bersama Konsultan Nutrikid yang Berpengalaman
                    </div>
                    <div class="cta">
                        <div class="ctatext">Konsultasi Sekarang</div>
                    </div>
                </div>

            </section>
        
        </>

    )
}

export default heropage