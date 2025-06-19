// src/components/NoticeReader.js
import React from 'react';

const NoticeReader = ({ note, onClose }) => {
    if (!note) {
        return null; // Don't render if no note is selected
    }

    return (
        <div className="notice-reader-overlay">
            <div className="notice-reader-content" style={{ backgroundColor: note.color }}>
                <button className="close-reader-button" onClick={onClose}>&times;</button>
                {note.image && (
                    <div className="reader-image-container">
                        <img src={note.image} alt="Notice" className="reader-image" />
                    </div>
                )}
                <p className="reader-text">{note.text}</p>
            </div>
        </div>
    );
};

export default NoticeReader;