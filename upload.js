import React, { useState } from 'react';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    // Handle file selection
    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Handle file upload
    const onFileUpload = async () => {
        if (!file) {
            setMessage('Please select a file first.');
            return;
        }

        // Create FormData object
        const formData = new FormData();
        formData.append('file', file); // Append the file to FormData

        try {
            const res = await fetch('http://localhost:8000/data', { // Update to the correct Flask API endpoint
                method: 'POST',
            
              
              body: formData
            });

           
            const output = res.text()

            console.log(output);
            setMessage('File uploaded successfully!');
        } catch (err) {
            console.error('Error during file upload:', err);
            setMessage('Error uploading file.');
        }
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