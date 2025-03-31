import './../styles/components/footer.css';

const Footer = () => {
    return (
        <footer className='footerBar'>

            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="footerBarLinks">

                <box-icon type='logo' name='linkedin-square' className="footerBarLinksIcon"></box-icon>

            </a>
            <a href="https://github.com/mortalboy680" target="_blank" rel="noopener noreferrer" className="footerBarLinks">

                <box-icon name='github' type='logo' className="footerBarLinksIcon"></box-icon>

            </a>
            <a href='https://www.instagram.com/yago_ron?igsh=MThzNWRrNWNqODIzdw%3D%3D&utm_source=qr' target="_blank" rel="noopener noreferrer" className="footerBarLinks">

                <box-icon type='logo' name='instagram-alt' className="footerBarLinksIcon"></box-icon>
            
            </a>
            
        </footer>
    );
};

export default Footer;