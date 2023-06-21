import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface Grant {
    id: number;
    grantType: string;
    createdAt: string;
    description: string;
    approval: string;
    name: string;
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
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Approval',
        dataIndex: 'approval',
        key: 'approval',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Surname',
        dataIndex: 'surname',
        key: 'surname',
      },
    ];
  
    return <Table dataSource={data} columns={columns} />;
  };
  
  export default GrantTable;
  