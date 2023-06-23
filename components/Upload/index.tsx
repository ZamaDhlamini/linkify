import { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from './Upload.module.css';

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

  

  const documentTypesRow1 = documentTypes.slice(0, 6);
  const documentTypesRow2 = documentTypes.slice(6);

  return (
    <div>
      <h1 className={styles.Heading}>Upload Documents</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {documentTypesRow1.map((type, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <Upload
              name={`file${index}`}
              action="/api/upload" // Replace with your upload endpoint/ use your backend api to plugin the specific point of uploading
              fileList={fileList[index] ? [fileList[index]] : []} // Show uploaded file, if any
              onChange={(info) => handleChange(info, index)}
              multiple={false}
            >
              <Button>{type}</Button>
            </Upload>
            
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {documentTypesRow2.map((type, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <Upload
              name={`file${index + 6}`} // Add an offset to the index to match the correct fileList index
              action="/api/upload" // Replace with your upload endpoint/ use your backend api to plugin the specific point of uploading
              fileList={fileList[index + 6] ? [fileList[index + 6]] : []} // Show uploaded file, if any
              onChange={(info) => handleChange(info, index + 6)} // Add an offset to the index
              multiple={false}
            >
              <Button>{type}</Button>
            </Upload>
          </div>
        ))}
      </div>
      <Button onClick={handleUpload} disabled={fileList.length !== 11} icon={<UploadOutlined />}>
        Upload
      </Button>
    </div>
  );
  
};

export default UploadPage;
