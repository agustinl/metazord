const Footer = () => {
    return (
        <footer>

            <div>
				<img src="logo-gray.svg" alt="Metazord.io Logo" />
				<h1 className="sr-only">metazord.io</h1>
			</div>

            <div>
                <p>made by <a href="https://www.agustinl.com" target="_blank" rel="noreferrer">@agustinl</a> {/* | <a href="!#" target="_blank" rel="noreferrer">GitHub</a> */}</p>
                <p><small>{new Date().getFullYear()}</small></p>
            </div>

            <div>
                <p><a href="https://iconos8.es/" target="_blank" rel="noreferrer">Icons by Icons8</a></p>
            </div>

        </footer>
    );
}
 
export default Footer;