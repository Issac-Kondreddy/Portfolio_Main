import React from 'react';
import '../styles/components/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Issac Kondreddy. All rights reserved.</p>
                <a href="https://linkedin.com/issackondreddy/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com/issac_.36/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="mailto:issackondreddyl@gmail.com">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
