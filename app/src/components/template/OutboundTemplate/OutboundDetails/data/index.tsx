export default function miscData() {
  const commonHeadersAttr = {
    align: 'left',
    Cell: ({ value }: any) => value || '',
  };

  const tableHeaders = () => [
    {
      Header: 'Item',
      accessor: 'item',
      ...commonHeadersAttr,
    },
    {
      Header: 'Material',
      accessor: 'material',
      ...commonHeadersAttr,
    },
    {
      Header: 'Material Description',
      accessor: 'description',
      ...commonHeadersAttr,
    },
    {
      Header: 'Batch',
      accessor: 'batch',
      ...commonHeadersAttr,
    },
    {
      Header: 'Expiry Date',
      accessor: 'expiry',
      ...commonHeadersAttr,
    },
    {
      Header: 'Quantity',
      accessor: 'quantity',
      ...commonHeadersAttr,
    },
    {
      Header: 'Unit',
      accessor: 'unit',
      ...commonHeadersAttr,
    },
    {
      Header: 'Volume',
      accessor: 'volume',
      ...commonHeadersAttr,
    },
    {
      Header: 'Unit',
      accessor: 'volumeUnit',
      ...commonHeadersAttr,
    },
  ];

  return {
    tableHeaders,
  };
}
