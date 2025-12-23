import React from 'react';
import { MapPin, Users, Building2, Activity } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <MapPin size={32} color="#16a34a" />,
            title: "Geo-Tagging",
            description: "Pinpoint issue locations with precise GPS accuracy for faster resolution."
        },
        {
            icon: <Users size={32} color="#16a34a" />,
            title: "Community Action",
            description: "Gather support and form volunteer groups to tackle local problems."
        },
        {
            icon: <Building2 size={32} color="#16a34a" />,
            title: "Authority Connect",
            description: "Direct line of communication with municipal departments."
        },
        {
            icon: <Activity size={32} color="#16a34a" />,
            title: "Real-time Tracking",
            description: "Monitor the status of your reports from submission to resolution."
        }
    ];

    return (
        <section style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
            <div className="container">
                <div className="text-center mb-8">
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Why Choose JanSahyog?
                    </h2>
                    <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                        A complete ecosystem for civic engagement and smart city management.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8" style={{ marginTop: '3rem' }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            padding: '2rem',
                            borderRadius: '1rem',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid #f3f4f6'
                        }}>
                            <div style={{
                                backgroundColor: '#dcfce7',
                                display: 'inline-flex',
                                padding: '1rem',
                                borderRadius: '0.75rem',
                                marginBottom: '1.5rem'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                {feature.title}
                            </h3>
                            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
