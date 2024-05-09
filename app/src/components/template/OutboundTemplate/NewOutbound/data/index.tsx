import type { TValidationSchema } from '../validationScheme';

export default function miscData() {
  const defaultValuesFormOutbound: TValidationSchema = {
    customer: '',
    deliverTo: '',
    wh: '',
    refNo: '',
    giDateFrom: new Date(),
    giDateTo: new Date(),
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
