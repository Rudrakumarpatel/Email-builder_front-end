// import React, { useState } from 'react';

// function TextFieldEditor({ label, value, onChange }) {
//   const [styles, setStyles] = useState({
//     color: '#000000',
//     fontSize: '16px',
//     textAlign: 'left',
//   });

//   const handleStyleChange = (styleKey, styleValue) => {
//     setStyles({ ...styles, [styleKey]: styleValue });
//   };

//   return (
//     <div className="mb-6">
//       <label className="block text-gray-700 font-bold mb-2">{label}</label>
//       <textarea
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         style={styles}
//         className="border rounded w-full p-2"
//       />
//       <div className="mt-2 flex space-x-4">
//         <input
//           type="color"
//           value={styles.color}
//           onChange={(e) => handleStyleChange('color', e.target.value)}
//           className="w-10 h-10 border rounded"
//         />
//         <select
//           value={styles.textAlign}
//           onChange={(e) => handleStyleChange('textAlign', e.target.value)}
//           className="border rounded p-2"
//         >
//           <option value="left">Left</option>
//           <option value="center">Center</option>
//           <option value="right">Right</option>
//         </select>
//         <input
//           type="number"
//           min="12"
//           max="36"
//           value={parseInt(styles.fontSize, 10)}
//           onChange={(e) => handleStyleChange('fontSize', `${e.target.value}px`)}
//           className="border rounded p-2 w-20"
//         />
//       </div>
//     </div>
//   );
// }

// export default TextFieldEditor;


import React, { useState } from 'react';

function TextFieldEditor({ label, value, style, onChange }) {
  const [styles, setStyles] = useState(style);

  const handleStyleChange = (styleKey, styleValue) => {
    const updatedStyles = { ...styles, [styleKey]: styleValue };
    setStyles(updatedStyles);
    onChange(value, updatedStyles);
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value, styles)}
        style={styles}
        className="border rounded w-full p-2"
      />
      <div className="mt-2 flex space-x-4">
        <input
          type="color"
          value={styles.color || '#000000'}
          onChange={(e) => handleStyleChange('color', e.target.value)}
          className="w-10 h-10 border rounded"
        />
        <select
          value={styles.textAlign || 'left'}
          onChange={(e) => handleStyleChange('textAlign', e.target.value)}
          className="border rounded p-2"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
        <input
          type="number"
          min="12"
          max="36"
          value={parseInt(styles.fontSize || '16', 10)}
          onChange={(e) => handleStyleChange('fontSize', `${e.target.value}px`)}
          className="border rounded p-2 w-20"
        />
      </div>
    </div>
  );
}

export default TextFieldEditor;
