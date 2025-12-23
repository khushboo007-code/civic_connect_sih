import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Clock } from 'lucide-react';

const Explore = () => {
    const issues = [
        {
            id: 1,
            title: "Pothole on Main Street",
            category: "Roads",
            location: "Indiranagar, Sector 4",
            status: "In Progress",
            timestampp: "2 hours ago",
            color: "orange"
        },
        {
            id: 2,
            title: "Garbage Pileup near Park",
            category: "Sanitation",
            location: "JP Nagar, Phase 2",
            status: "Resolved",
            timestamp: "1 day ago",
            color: "green"
        },
        {
            id: 3,
            title: "Street Light Malfunction",
            category: "Electricity",
            location: "Koramangala, 5th Block",
            status: "Open",
            timestamp: "3 hours ago",
            color: "red"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="container py-16 flex-grow">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Explore Issues</h1>
                    <button className="btn btn-primary">Filter</button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {issues.map(issue => (
                        <div key={issue.id} style={{
                            backgroundColor: 'white',
                            borderRadius: '0.75rem',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid #e5e7eb'
                        }}>
                            <div style={{ height: '200px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
                                Image Placeholder
                            </div>
                            <div className="p-4" style={{ padding: '1.5rem' }}>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    color: 'var(--primary-color)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>{issue.category}</span>
                                <h3 className="text-xl font-bold mb-2 mt-1">{issue.title}</h3>

                                <div className="flex items-center gap-2 text-gray-500 mb-4" style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                                    <MapPin size={16} /> {issue.location}
                                </div>

                                <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid #f3f4f6' }}>
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        backgroundColor: issue.status === 'Resolved' ? '#dcfce7' : issue.status === 'In Progress' ? '#ffedd5' : '#fee2e2',
                                        color: issue.status === 'Resolved' ? '#166534' : issue.status === 'In Progress' ? '#9a3412' : '#991b1b'
                                    }}>
                                        {issue.status}
                                    </span>
                                    <span className="flex items-center gap-1 text-gray-400 text-sm">
                                        <Clock size={14} /> {issue.timestamp}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Explore;
