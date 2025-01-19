// import React from 'react';
// import TextFieldEditor from './TextFieldEditor';

// function Editor({ emailConfig, setEmailConfig, sections }) {
//   const handleFieldChange = (field, value) => {
//     setEmailConfig({ ...emailConfig, [field]: value });
//   };

//   return (
//     <div className="bg-white shadow p-6 rounded-lg">
//       {sections.map((section, index) =>
//         section.type === 'text' ? (
//           <TextFieldEditor
//             key={section.id}
//             label={section.label}
//             value={emailConfig[section.id] || ''}
//             onChange={(value) => handleFieldChange(section.id, value)}
//           />
//         ) : null
//       )}
//     </div>
//   );
// }

// export default Editor;


import React from 'react';
import TextFieldEditor from './TextFieldEditor';

function Editor({ emailConfig, setEmailConfig, sections }) {
  const handleFieldChange = (field, value, style) => {
    setEmailConfig({
      ...emailConfig,
      [field]: { value, style },
    });
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      {sections.map((section) =>
        section.type === 'text' ? (
          <TextFieldEditor
            key={section.id}
            label={section.label}
            value={emailConfig[section.id]?.value || ''}
            style={emailConfig[section.id]?.style || {}}
            onChange={(value, style) => handleFieldChange(section.id, value, style)}
          />
        ) : null
      )}
    </div>
  );
}

export default Editor;
