import { useState } from 'react';
import { Upload, Button } from 'antd';

const UploadPage = () => {
  const [fileList, setFileList] = useState<any[]>([]); // Store uploaded file list

  const handleChange = (info: any) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1); // Allow only one file to be uploaded
    fileList = fileList.map((file: any) => {
      if (file.response) {
        // If server response is available, assign the URL to the file
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(fileList);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log(fileList);
  };

  return (
    <div>
      <h1>Upload Documents</h1>
      <Upload
        name="file"
        action="/api/upload" // Replace with your upload endpoint
        fileList={fileList}
        onChange={handleChange}
        multiple={false}
      >
        <Button>Select File</Button>
      </Upload>
      <Button onClick={handleUpload} disabled={!fileList.length}>
        Upload
      </Button>
    </div>
  );
};

export default UploadPage;
