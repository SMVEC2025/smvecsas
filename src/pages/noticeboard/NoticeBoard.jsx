// src/components/NoticeBoard.js
import React, { useState, useCallback } from 'react';
import StickyNote from './StickyNote';
import './NoticeBoard.css'; // Import the CSS for the notice board

const NoticeBoard = () => {
    const [fullViewer,setFullViewer] = useState()
    const [notes, setNotes] = useState([
        {
            id: '1',
            text: 'our latest activities',
            x: 10,
            y: 10,
            color: '#FFC',
            image:'/assets/img/notice/img1.png',
            pinColor:'#1421dc',

        },
        {
            id: '1',
            text: 'our latest activities',
            x: 200,
            y: 10,
            color: '#FFC',
            image:'/assets/img/notice/img1.png',
            pinColor:'#dc2114',

        },
    ]);

    const addNote = useCallback(() => {
        const newNote = {
            id: String(Date.now()),
            text: 'New Note',
            x: Math.floor(Math.random() * 200) + 50, // Random x position
            y: Math.floor(Math.random() * 150) + 50, // Random y position
            color: '#FFC', // Default color
        };
        setNotes((prevNotes) => [...prevNotes, newNote]);
    }, []);

    const deleteNote = useCallback((id) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    }, []);

    const updateNoteText = useCallback((id, newText) => {
        setNotes((prevNotes) =>
            prevNotes.map((note) => (note.id === id ? { ...note, text: newText } : note))
        );
    }, []);

    const updateNotePosition = useCallback((id, newX, newY) => {
        setNotes((prevNotes) =>
            prevNotes.map((note) => (note.id === id ? { ...note, x: newX, y: newY } : note))
        );
    }, []);

    const updateNoteColor = useCallback((id, newColor) => {
        setNotes((prevNotes) =>
            prevNotes.map((note) => (note.id === id ? { ...note, color: newColor } : note))
        );
    }, []);
   const handleClose =()=>{
    setFullViewer(false)
   }
    return (
        <div className="notice-board-container">
           
           <div className='layer'>
             <h2>Notice Board</h2>
             <div className="notice-board">
                {notes.map((note) => (
                    <StickyNote
                        key={note.id}
                        id={note.id}
                        initialText={note.text}
                        initialX={note.x}
                        initialY={note.y}
                        image={note.image}
                        pinColor={note.pinColor}
                        initialColor={note.color}
                        onUpdatePosition={updateNotePosition}
                        onUpdateColor={updateNoteColor}
                        setFullViewer={setFullViewer}
                    
                    />
                ))}
            </div>
           {fullViewer && (
             <div className='overlay' onClick={handleClose}>
                <div>
                    <img src={fullViewer} alt="" />
                </div>
            </div>
           )}
           </div>
        </div>
    );
};

export default NoticeBoard;