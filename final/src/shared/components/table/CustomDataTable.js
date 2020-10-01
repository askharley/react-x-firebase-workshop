import React from 'react';
import { Table } from 'antd';

export default function CustomDataTable({ schema, data, onClick }) {
  return (
    <Table
      columns={schema}
      dataSource={data}
      loading={data === null}
      onRow={(record, rowIndex) => {
        return {
          onClick: () => onClick(record, rowIndex)
        };
      }}
    />
  );
}
