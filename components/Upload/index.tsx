import { useState } from 'react';
import { Upload, Button, message, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Link from 'next/link';
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
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleChange = (info: any, index: number) => {
    let newFileList = [...fileList];
    newFileList[index] = info.file; // Update the file in the respective index
    setFileList(newFileList);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log(fileList);
    message.success('Uploaded successfully');
  };

  const handleSubmit = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  

  const documentTypesRow1 = documentTypes.slice(0, 6);
  const documentTypesRow2 = documentTypes.slice(6);

  return (
    <div>
       {/* <Button onClick={handleSubmit} className={styles.submitButton}>
        Submit form
      </Button> */}

      <Modal
        title="Form Submitted"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <p>Your form has been submitted successfully!</p>
        <Link href="/DashBoard">
          <Button className={styles.modalButton}>Go to Dashboard</Button>
        </Link>
      </Modal>
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
      <Button onClick={handleUpload} disabled={fileList.length !== 11} icon={<UploadOutlined />} className={styles.uploadButton}>
        Upload
      </Button>
      {/* <Button  className={styles.u}>
        Submit form
      </Button> */}
      <Button onClick={handleSubmit} className={styles.submitButton}>Submit form</Button>
      <div className={styles.image}>
      <img src="/banner.png" alt="Banner box" />
    </div>
    <div className={styles.imageLogo}>
          <img src="/coatofarms.png" alt="Banner box" />
        </div><div className={styles.paragraph1}>
          <div className={styles.scrollText}>
            <p>
              The Republic of South Africa is a parliamentary republic with a three-tier system of government and an
              independent judiciary, operating in a parliamentary system.
            </p>
          </div>
    </div>
    </div>
    
  );
  
};

export default UploadPage;
