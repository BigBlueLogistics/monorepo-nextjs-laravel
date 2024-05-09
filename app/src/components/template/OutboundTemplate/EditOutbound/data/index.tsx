import type { TValidationSchema } from '../validationScheme';

export default function miscData() {
  const defaultValuesFormOutbound: TValidationSchema = {
    customer: '',
    wh: '',
    refNo: '',
    giDateFrom: new Date(),
    giDateTo: new Date(),
    available: '',
    soNum: '',
    refDate: '',
    subRows: [
      {
        item: 0,
        material: '',
        batch: '',
        expiryDate: '',
        qty: 0,
        unit: '',
        tolerance: false,
        remarks: '',
      },
    ],
  };

  return {
    defaultValuesFormOutbound,
  };
}
