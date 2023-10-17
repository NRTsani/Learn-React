function form() {
    return (

        <>
        
        <section class="contactPage">
            <h1 class="contact">Hubungi Kami</h1>
            <p class="subcon">Ingin lebih tau tentang nutrikid? Ayo hubungi kami dengan mengisi form dibawah ini !</p>
            <form id="contactForm">
                <p class="isiform">Nama</p>
                <input type="text" id="name"/>
                <p class="isiform">Kota/Kabupaten</p>
                <input type="text" id="city"/>
                <p class="isiform">Alamat Email</p>
                <input type="text" id="email"/>
                <p class="isiform">Zip-Code</p>
                <input type="text" id="zip-code"/>
                <label id="check">Dengan ini saya menyatakan data yang diisi pada form ini adalah benar dan telah sesuai </label>
                <input type="checkbox" id="status"/>
                <button type="submit" id="submit-form">Submit</button>
                <div id="warning"></div>
            </form>
    
        </section>
        
        </>

    )
}

export default form