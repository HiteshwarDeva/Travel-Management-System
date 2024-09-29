const Footer = () => {
    return (
        <div>
            <footer class="text-center bg-body-tertiary">
                <div class="container pt-4">
                    <section class="mb-4">
                        <a
                            data-mdb-ripple-init
                            class="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a
                            data-mdb-ripple-init
                            class="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-twitter"></i
                        ></a>
                        <a
                            data-mdb-ripple-init
                            class="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-google"></i
                        ></a>
                        <a
                            data-mdb-ripple-init
                            class="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-instagram"></i
                        ></a>
                    </section>
                </div>
                <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                    © 2024 Copyright : 
                    <a class="text-body" href="https://mdbootstrap.com/">Tourism.com</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;