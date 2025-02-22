export interface FormField<T> {
  value: T;
  isRequired: boolean;
  error: string;
  label: string;
  placeholder: string;
}

export interface CardFormData {
  name: FormField<string>;
  bankName: FormField<string>;
  cardType: FormField<string>;
  cardNumber: FormField<string>;
  validTill: FormField<string>;
  cvv: FormField<string>;
  isDefault: FormField<boolean>;
  addToGPay: FormField<boolean>;
}

export interface CardDetails {
  holderName: string;
  number: string;
  validTill: string;
  bankName: string;
  cardType: string;
  isActive: boolean;
  id: string | null;
  isArchived: boolean | null;
  isDefault: boolean | null;
  addToGPay: boolean | null;
}

export interface Transaction {
  id: number;
  title: string;
  date: string;
  description: string;
  amount: string;
  type: 'credit' | 'debit';
}