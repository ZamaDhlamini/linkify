import { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const documentTypes = [
  'Bank Letter',
  'Bank Statement',
  'Proof of Income',
  'Marriage Certificate',
  'Police Affidavit',
  'Sassa Affidavit',
  'Letter from Principal',
  'Social Worker Report',
  'Spouse Affidavit',
  'Spouse ID Document',
  'UIF Card',
];

const UploadPage = () => {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleChange = (info: any, index: number) => {
    let newFileList = [...fileList];
    newFileList[index] = info.file; // Update the file in the respective index
    setFileList(newFileList);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log(fileList);
  };

  return (
    <div>
      <h1>Upload Documents</h1>
      {documentTypes.map((type, index) => (
        <Upload
          key={index}
          name={`file${index}`}
          action="/api/upload" // Replace with your upload endpoint
          fileList={fileList[index] ? [fileList[index]] : []} // Show uploaded file, if any
          onChange={(info) => handleChange(info, index)}
          multiple={false}
        >
          <Button>{type}</Button>
        </Upload>
      ))}
      <Button onClick={handleUpload} disabled={fileList.length !== 11} icon={<UploadOutlined />}>
        Upload
      </Button>
    </div>
  );
};

export default UploadPage;
