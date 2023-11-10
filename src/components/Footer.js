import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Home</Link></li>
                    <li class="nav-item"><Link to="/smart_phone" class="nav-link px-2 text-body-secondary">Smartphone</Link></li>
                    <li class="nav-item"><Link to="/tablet" class="nav-link px-2 text-body-secondary">Tablet</Link></li>
                    <li class="nav-item"><Link to="/laptop" class="nav-link px-2 text-body-secondary">Laptop</Link></li>
                    <li class="nav-item"><Link to="/smart_watch" class="nav-link px-2 text-body-secondary">Smartwatch</Link></li>
                    <li class="nav-item"><Link to="/contact_us" class="nav-link px-2 text-body-secondary">Contact Us</Link></li>
                </ul>
                <ul className="nav justify-content-center">
                    <Link to=""  class=" nav-link px-2 text-body-secondary"><i class="fa-brands fa-facebook"></i></Link>
                    <Link to=""  class=" nav-link px-2 text-body-secondary"><i class="fa-brands fa-telegram"></i></Link>
                    <Link to=""  class=" nav-link px-2 text-body-secondary"><i class="fa-brands fa-twitter"></i></Link>
                    <Link to=""  class=" nav-link px-2 text-body-secondary"><i class="fa-brands fa-instagram"></i></Link>
                </ul>
                <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
            </footer>
        </>

    )
}
export default Footer;