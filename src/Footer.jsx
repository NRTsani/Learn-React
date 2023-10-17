import nutrikidText from './assets/Images/logo-nutrikid-text.png'
import skillvul from './assets/Images/skillvul.png'
import instagram from './assets/Images/instagram.png'
import linkedin from './assets/Images/linkedin.png'
import facebook from './assets/Images/facebook.png'


function footer() {
    return (

        <>
        
            <footer class="footer">
                <div class="tentang">
                <div class="nutrikiddetails">
                    <div class="alamatbox">
                    <img class="logo-footer" width="256" height="64" viewBox="0 0 256 64" fill="none" src={nutrikidText} />
        
                    <div class="alamatnutrikid">
                        XYZ Tower<br/>Jl. Kemana Saja No. 15<br/>Jakarta
                    </div>
                    </div>
                    <div class="aboutlist">
                    <div class="about">About</div>
                    <div class="list1">
                        <div class="textlist1">FAQ</div>
                        <div class="textlist1">Syarat &amp; Ketentuan</div>
                        <div class="textlist1">Kebijakan Privasi</div>
                        <div class="textlist1">Kebijakan Finansial</div>
                    </div>
                    </div>
                    <div class="aboutlist">
                        <div class="about">Collaboration</div>
                        <div class="list1">
                        <div class="textlist1">Karir</div>
                        <div class="textlist1">Kerjasama &amp; Ketentuan</div>
                        <div class="textlist1">Membership</div>
                        </div>
                    </div>
                    <div class="contactlist">
                    <div class="about">Contact Us</div>
                    <div class="textlist1">
                        Email : customerservice@nutrikid.com
                    </div>
                    <div class="textlist1">Phone : +621 234 567 890</div>
                    </div>
                </div>
                <div class="credit">
                    <div class="publish">Nutrikid Publishing 2023</div>
                    <div class="social-icons">
                        <a href="https://skilvul.com" id="link"><img class="skilvul" width="24" height="24" viewBox="0 0 24 24" fill="none" src={skillvul}/></a>
                        <a href="https://instagram.com"><img class="instagram" width="24" height="24" viewBox="0 0 24 24" fill="none" src={instagram}/></a>
                        
                        <a href="https://facebook.com"><img class="facebook" width="24" height="24" viewBox="0 0 24 24" fill="none" src={facebook}/></a>
                    
                        <a href="https://linkedin.com"><img class="linkedin" width="24" height="24" viewBox="0 0 24 24" fill="none" src={linkedin}/></a>
                    </div>
                </div>
                </div>
            </footer>
        
        </>

    )
}

export default footer