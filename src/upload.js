// FileUpload.js
import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  // Handle file selection
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle file upload
  const onFileUpload = () => {
    if (!file) {
      setMessage('Please select a file first.');
      return;
    }

    // Log file details to console (simulate upload)
    console.log('Uploading file:', file);

    // Here you would make the API call to upload the file.
    // Example:
    // const formData = new FormData();
    // formData.append('file', file);
    // fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData,
    // }).then((response) => response.json()).then((data) => console.log(data));

    setMessage('File uploaded successfully!');
  };

  return (
    <div>
      <h2>File Upload Page</h2>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;
