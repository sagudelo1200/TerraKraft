import React from "react";

// reactstrap components
import {
	Navbar,
	Container,
	NavbarBrand,
	UncontrolledTooltip,
	Nav,
	NavItem,
	NavLink,
	Collapse
} from "reactstrap";

function IndexNavbar() {
	const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
	const [collapseOpen, setCollapseOpen] = React.useState(false);
	React.useEffect(() => {
		const updateNavbarColor = () => {
			if (
				document.documentElement.scrollTop > 399 ||
				document.body.scrollTop > 399
			) {
				setNavbarColor("");
			} else if (
				document.documentElement.scrollTop < 400 ||
				document.body.scrollTop < 400
			) {
				setNavbarColor("navbar-transparent");
			}
		};
		window.addEventListener("scroll", updateNavbarColor);
		return function cleanup() {
			window.removeEventListener("scroll", updateNavbarColor);
		};
	});
	return (
		<>
			{collapseOpen ? (
				<div
					id="bodyClick"
					onClick={() => {
						document.documentElement.classList.toggle("nav-open");
						setCollapseOpen(false);
					}}
				/>
			) : null}
			<Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
				<Container>
					<div className="navbar-translate">
						<NavbarBrand
							href="/"
							id="navbar-brand"
						>
							TerraKraft
						</NavbarBrand>
						<UncontrolledTooltip target="#navbar-brand">
							Creado por _Thebe_
							Apoyado por Nibek
						</UncontrolledTooltip>
						<button
							className="navbar-toggler navbar-toggler"
							onClick={() => {
								document.documentElement.classList.toggle("nav-open");
								setCollapseOpen(!collapseOpen);
							}}
							aria-expanded={collapseOpen}
							type="button"
						>
							<span className="navbar-toggler-bar top-bar"></span>
							<span className="navbar-toggler-bar middle-bar"></span>
							<span className="navbar-toggler-bar bottom-bar"></span>
						</button>
					</div>
					<Collapse
						className="justify-content-end"
						isOpen={collapseOpen}
						navbar
					>
						<Nav navbar>
							<NavItem>
								<NavItem>
									<NavLink
										href="#terra"
										onClick={(e) => {
											e.preventDefault();
											document
												.getElementById("reglas")
												.scrollIntoView();
										}}
									>
										<i className="fas fa-file-contract"></i>
										<p>Reglas</p>
									</NavLink>
								</NavItem>
							</NavItem>
							<NavItem>
								<NavLink
									href="#terra"
									onClick={(e) => {
										e.preventDefault();
										document
											.getElementById("tienda")
											.scrollIntoView();
									}}
								>
									<i className="fas fa-store"></i>
									<p>Tienda</p>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									href="#terra"
									onClick={(e) => {
										e.preventDefault();
										document
											.getElementById("contacto")
											.scrollIntoView();
									}}
								>
									<i className="fas fa-envelope"></i>
									<p>Contacto</p>
								</NavLink>
							</NavItem>
							<NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Siguenos en Twitter
                </UncontrolledTooltip>
              </NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default IndexNavbar;
