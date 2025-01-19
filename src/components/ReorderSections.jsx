import React from 'react';

function ReorderSections({ sections, setSections }) {
  const moveSection = (index, direction) => {
    const newSections = [...sections];
    const targetIndex = index + direction;
    if (targetIndex >= 0 && targetIndex < newSections.length) {
      [newSections[index], newSections[targetIndex]] = [newSections[targetIndex], newSections[index]];
      setSections(newSections);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6 w-100">
      <h2 className="text-xl font-bold mb-4">Reorder Sections</h2>
      {sections.map((section, index) => (
        <div key={section.id} className="flex items-center justify-between mb-2">
          <span>{section.label}</span>
          <div>
            <button
              onClick={() => moveSection(index, -1)}
              disabled={index === 0}
              className="px-2 py-1 bg-gray-300 rounded mr-2"
            >
              Up
            </button>
            <button
              onClick={() => moveSection(index, 1)}
              disabled={index === sections.length - 1}
              className="px-2 py-1 bg-gray-300 rounded"
            >
              Down
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReorderSections;
