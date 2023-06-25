import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface Grant {
    id: string;
    grantType: string;
    createdAt: string;
    grantDescription: string;
    approval: string;
    grantName: string;
    surname: string;
  }
  
  type GrantTableProps = {
    data: Grant[];
  };
  
  const GrantTable: React.FC<GrantTableProps> = ({ data }) => {
    // Define the table columns
    const columns: ColumnsType<Grant> = [
      {
        title: 'Grant Type',
        dataIndex: 'grantType',
        key: 'grantType',
      },
      {
        title: 'Description',
        dataIndex: 'grantDescription',
        key: 'description',
      },
      {
        title: 'Grant Name',
        dataIndex: 'grantName',
        key: 'name',
      },
    ];
  
    return <Table dataSource={data} columns={columns} />;
  };
  
  export default GrantTable;
  