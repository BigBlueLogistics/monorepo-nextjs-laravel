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
      Header: 'Quantity UOM',
      accessor: 'quantityUom',
      ...commonHeadersAttr,
    },

    {
      Header: 'Volume',
      accessor: 'volume',
      ...commonHeadersAttr,
    },
    {
      Header: 'Volume UOM',
      accessor: 'volumeUom',
      ...commonHeadersAttr,
    },
    {
      Header: 'Weight',
      accessor: 'weight',
      ...commonHeadersAttr,
    },
    {
      Header: 'Pallet',
      accessor: 'palletNo',
      ...commonHeadersAttr,
    },
    {
      Header: 'Document',
      accessor: 'documentNo',
      ...commonHeadersAttr,
    },
    {
      Header: 'Status',
      accessor: 'status',
      ...commonHeadersAttr,
    },
  ];

  return {
    tableHeaders,
  };
}
