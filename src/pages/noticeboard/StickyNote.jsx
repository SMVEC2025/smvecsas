// src/components/StickyNote.js
import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';

const StickyNote = ({
  id,
  initialText,
  initialX,
  initialY,
  initialColor,
  onDelete,
  pinColor,
  onUpdateText,
  onUpdatePosition,
  onUpdateColor,
  image
}) => {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);
  const [color, setColor] = useState(initialColor);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      textAreaRef.current.focus();
      textAreaRef.current.setSelectionRange(text.length, text.length); // Place cursor at the end
    }
  }, [isEditing, text.length]);

  const handleDragStop = (e, data) => {
    onUpdatePosition(id, data.x, data.y);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdateText(id, text);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Allow Shift+Enter for new lines
      e.preventDefault();
      setIsEditing(false);
      onUpdateText(id, text);
    }
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    onUpdateColor(id, newColor);
  };

  const colors = ['#FFC', '#CFC', '#FCC', '#CCF', '#CFF', '#FCF']; // Available sticky note colors

  return (
    <Draggable
      handle=".note-handle" // Only drag when dragging the handle
      defaultPosition={{ x: initialX, y: initialY }}
      onStop={handleDragStop}
      bounds=".notice-board" // Constrain movement within the notice board
    >
      <div className="sticky-note" style={{ backgroundColor: color }}>
        <div className="note-header note-handle">
          
        
        </div>
        <div className="note-content" >
          <div class="pin" style={{backgroundColor:`${pinColor}`,borderColor:`${pinColor}`}}></div>

            <img src={image} alt="" />
            <p style={{ whiteSpace: 'pre-wrap' }}>{text}</p>
        </div>
      </div>
    </Draggable>
  );
};

export default StickyNote;