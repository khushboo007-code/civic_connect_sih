import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Camera, MapPin, AlertCircle } from 'lucide-react';

const ReportIssue = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="container py-20 text-center flex-grow flex flex-col justify-center items-center">
                    <div style={{ backgroundColor: '#dcfce7', padding: '2rem', borderRadius: '1rem', marginBottom: '1rem' }}>
                        <div style={{ color: '#16a34a', marginBottom: '1rem' }}>
                            <AlertCircle size={48} className="mx-auto" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Report Submitted!</h2>
                        <p className="text-gray-600 mb-4">Thank you for being a responsible citizen. We have received your report.</p>
                        <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Submit Another</button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="container py-16 flex-grow">
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h1 className="text-3xl font-bold mb-2 text-center">Report a Civic Issue</h1>
                    <p className="text-center text-gray-500 mb-8">Help us identify and fix problems in your neighborhood.</p>

                    <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: 'var(--shadow-md)' }}>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Issue Title</label>
                            <input type="text" placeholder="e.g. Broken Street Light" required className="w-full"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db' }}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Category</label>
                            <select className="w-full" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db' }}>
                                <option>Roads & Traffic</option>
                                <option>Garbage & Sanitation</option>
                                <option>Electricity & Lighting</option>
                                <option>Water Supply</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Description</label>
                            <textarea rows="4" placeholder="Describe the issue in detail..." required
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db' }}
                            ></textarea>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2">Upload Photo</label>
                            <div style={{ border: '2px dashed #d1d5db', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center', cursor: 'pointer' }}>
                                <Camera className="mx-auto mb-2 text-gray-400" />
                                <span className="text-sm text-gray-500">Click to upload image</span>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Report</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ReportIssue;
