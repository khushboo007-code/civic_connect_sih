import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import '../styles/global.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container" style={{ padding: '1rem' }}>
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                        <Globe size={24} />
                        JanSahyog
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8" style={{ display: 'none' }}>
                        {/* Note: In real responsive CSS we use media queries. 
               For now I will use inline style hack or assume layout.css handles it if I add a media query there.
               Actually, let's use a simple CSS class for desktop menu.
            */}
                    </div>
                    {/* Re-doing structure for vanilla CSS responsiveness */}
                    <div className="desktop-menu flex items-center gap-4">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/report" className="nav-link">Report Issue</Link>
                        <Link to="/explore" className="nav-link">Explore</Link>
                        <button className="btn btn-primary">Login</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none' }}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (simplified for now, focusing on desktop first) */}
        </nav>
    );
};

export default Navbar;
