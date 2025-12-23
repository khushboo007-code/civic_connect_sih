import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '3rem 0', marginTop: 'auto' }}>
            <div className="container">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 'bold' }}>JanSahyog</h3>
                        <p style={{ color: '#9ca3af' }}>
                            Empowering citizens to build smarter, better cities together.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', color: '#9ca3af' }}>
                            <li className="mb-4"><a href="/report">Report Issue</a></li>
                            <li className="mb-4"><a href="/explore">Explore Issues</a></li>
                            <li className="mb-4"><a href="/about">About Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Connect</h4>
                        <div className="flex gap-4">
                            <Twitter color="#9ca3af" />
                            <Github color="#9ca3af" />
                            <Mail color="#9ca3af" />
                        </div>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #374151', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center', color: '#9ca3af' }}>
                    &copy; 2025 JanSahyog. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
