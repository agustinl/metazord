const Footer = () => {
    return (
        <footer className="flex items-center mt-10 w-full bg-gray-100 py-8 px-5">

            <div className="w-4/12">
				<img src="logo-gray.svg" alt="Metazord.io" className="h-8" />
				<h1 className="sr-only">metazord.io</h1>
			</div>

            <div className="w-4/12 flex items-center justify-center text-tiny text-gray-400 text-center">
                <p>made by <a href="https://www.agustinl.com" target="_blank" rel="noreferrer">@agustinl</a> | <a href="!#" target="_blank" rel="noreferrer">GitHub</a> | {new Date().getFullYear()}</p>
            </div>

            <div className="w-4/12 text-tiny text-gray-400 text-right">
                <a href="https://iconos8.es/" target="_blank" rel="noreferrer">Icons by Icons8</a>
            </div>

        </footer>
    );
}
 
export default Footer;