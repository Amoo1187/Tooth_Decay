// FileUpload.js
import React, { useState } from 'react';
import { Button, Alert, Container, Row, Col, Form } from 'react-bootstrap';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('');

  // Handle file selection
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
    setMessage('');
  };

  // Handle file upload
  const onFileUpload = () => {
    if (!file) {
      setVariant('danger');
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
    <Container className="mt-5">
    <Row className="justify-content-center">
    <Col md={6}>
    <div className="text-center">
            <h2 className="mb-4">File Upload</h2>
          </div>

          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" onChange={onFileChange} />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" onClick={onFileUpload} size="lg">
                Upload
              </Button>
            </div>
          </Form>

          {/* Display message with conditional rendering */}
          {message && (
            <Alert className="mt-4 text-center" variant={variant}>
              {message}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FileUpload;
