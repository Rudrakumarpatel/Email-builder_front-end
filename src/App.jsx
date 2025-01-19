import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Editor from './components/Editor';
import ReorderSections from './components/ReorderSections';
import UploadImage from './components/UploadImage';

function App() {
  const [layoutHTML, setLayoutHTML] = useState('');
  const [emailConfig, setEmailConfig] = useState({
    title: { value: '', style: {} },
    content: { value: '', style: {} },
    footer: { value: '', style: {} },
    imageUrl: '',
  });
  const [sections, setSections] = useState([]);
  const [savedConfigs, setSavedConfigs] = useState([]);

  useEffect(() => {
    // Fetch layout and saved configs
    axios.get('https://email-builder-back-end-1.onrender.com/getEmailLayout').then((response) => {
      setLayoutHTML(response.data.layout);
      setSections([
        { id: 'title', label: 'Title', type: 'text' },
        { id: 'content', label: 'Content', type: 'text' },
        { id: 'footer', label: 'Footer', type: 'text' },
        { id: 'image', label: 'Image', type: 'image' },
      ]);
    });

    axios.get('https://email-builder-back-end-1.onrender.com/getEmailConfigs').then((response) => {
      setSavedConfigs(response.data);
    });
  }, []);

  const handleSave = () => {
    const orderedConfig = sections.reduce((config, section) => {
      if (section.id === 'image') {
        config[section.id] = emailConfig[section.id];
      } else {
        config[section.id] = {
          value: emailConfig[section.id].value,
          style: emailConfig[section.id].style,
        };
      }
      return config;
    }, {});

    axios
      .post('https://email-builder-back-end-1.onrender.com/uploadEmailConfig', emailConfig)
      .then((response) => {
        axios.get('https://email-builder-back-end-1.onrender.com/getEmailConfigs').then((response) => {
          alert("Email-Template Save Successfully");
          setSavedConfigs(response.data); 
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">Email Builder</h1>
      <div className="md:grid-cols-2 gap-6">
        <div>
          <ReorderSections sections={sections} setSections={setSections} />
          <Editor layoutHTML={layoutHTML} emailConfig={emailConfig} setEmailConfig={setEmailConfig} sections={sections} />
          <UploadImage setEmailConfig={setEmailConfig} />
          <button
            onClick={handleSave}
            className="mt-6 w-full px-4 py-2 bg-blue-500 text-white text-lg rounded hover:bg-blue-600"
          >
            Save Template
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-blue-600 text-center mt-8">All Saved Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {savedConfigs.map((config, index) => (
          <div key={index} className="bg-white shadow p-4 rounded-lg">
            <h3
              className="text-xl font-bold mb-2"
              style={config.title.style || {}}
            >
              {config.title.value}
            </h3>
            <p style={config.content.style || {}}>{config.content.value}</p>
            <p
              className="text-sm text-gray-500 mt-2"
              style={config.footer.style || {}}
            >
              {config.footer.value}
            </p>
            {config.imageUrl && (
              <img
                src={config.imageUrl}
                alt={`Template ${index + 1}`}
                className="mt-4 rounded-lg max-h-40 w-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
