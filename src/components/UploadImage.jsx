// import React from 'react';
// import axios from 'axios';

// function UploadImage({ setEmailConfig }) {
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append('image', file);

//     axios.post('https://email-builder-back-end-1.onrender.com/uploadImage', formData)
//       .then((response) => {
//         setEmailConfig((prev) => ({ ...prev, imageUrl: response.data.imageUrl }));
//       })
//       .catch((err) => console.error('Image upload failed:', err));
//   };

//   return (
//     <div className="mt-4">
//       <label className="block font-bold">Upload Image:</label>
//       <input
//         type="file"
//         onChange={handleImageUpload}
//         className="block border p-2 w-full rounded"
//       />
//     </div>
//   );
// }

// export default UploadImage;



// import React from 'react';
// import axios from 'axios';

// function UploadImage({ setEmailConfig }) {
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append('image', file);

//     axios.post('https://email-builder-back-end-1.onrender.com/uploadImage', formData)
//       .then((response) => {
//         setEmailConfig((prev) => ({ ...prev, imageUrl: response.data.imageUrl }));
//       })
//       .catch((err) => console.error('Image upload failed:', err));
//   };

//   return (
//     <div className="mt-4">
//       <label className="block font-bold">Upload Image:</label>
//       <input
//         type="file"
//         onChange={handleImageUpload}
//         className="block border p-2 w-full rounded"
//       />
//     </div>
//   );
// }

// export default UploadImage;




import React from 'react';
import axios from 'axios';

function UploadImage({ setEmailConfig }) {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    axios.post('https://email-builder-back-end-1.onrender.com/uploadImage', formData)
      .then((response) => {
        setEmailConfig((prev) => ({
          ...prev,
          imageUrl: response.data.imageUrl // Save the image URL here
        }));
      })
      .catch((err) => console.error('Image upload failed:', err));
  };

  return (
    <div className="mt-4">
      <label className="block font-bold">Upload Image:</label>
      <input
        type="file"
        onChange={handleImageUpload}
        className="block border p-2 w-full rounded"
      />
    </div>
  );
}

export default UploadImage;
