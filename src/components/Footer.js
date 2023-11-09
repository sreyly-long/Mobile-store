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
                </ul>
                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                </ul>
                <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
            </footer>
        </>

    )
}
export default Footer;