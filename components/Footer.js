const Footer = () => {
    return (
        <footer>

            <div>
                <p>{new Date().getFullYear()}</p>
            </div>

            <div>
                <img src="logo-gray.svg" alt="Metazord.io Logo" />
                <h1 className="sr-only">metazord.io</h1>
            </div>

            <div>
                <p><small>made by <a href="https://www.agustinl.com" target="_blank" rel="noreferrer">@agustinl</a></small></p>
                <p><small><a href="https://iconos8.es/" target="_blank" rel="noreferrer">Icons by Icons8</a></small></p>
            </div>

        </footer>
    );
}
 
export default Footer;