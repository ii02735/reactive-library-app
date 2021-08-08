import { Navbar } from "react-bootstrap";

const CustomNavbar = () => (
    <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="px-3" href="#home"><strong>Reactive book library</strong></Navbar.Brand>
    </Navbar>
);

export default CustomNavbar;