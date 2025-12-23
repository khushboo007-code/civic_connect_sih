import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            padding: '5rem 0',
            background: 'linear-gradient(to bottom, #f0fdf4, #ffffff)'
        }}>
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <div style={{
                        backgroundColor: '#dcfce7',
                        color: '#166534',
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        marginBottom: '1.5rem'
                    }}>
                        Building Better Cities Together
                    </div>

                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        lineHeight: '1.2',
                        marginBottom: '1.5rem',
                        maxWidth: '800px',
                        background: 'linear-gradient(to right, #16a34a, #0d9488)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Report Problems.<br />Transform Your City.
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: '#4b5563',
                        maxWidth: '600px',
                        marginBottom: '2.5rem',
                        lineHeight: '1.75'
                    }}>
                        Join thousands of citizens using JanSahyog to report civic issues,
                        track progress, and work with volunteers to create sustainable change.
                    </p>

                    <div className="flex gap-4">
                        <button className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                            Report an Issue <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </button>
                        <button className="btn" style={{
                            backgroundColor: 'white',
                            border: '1px solid #e5e7eb',
                            color: '#374151',
                            fontSize: '1.125rem', padding: '1rem 2rem'
                        }}>
                            Join as Volunteer
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
