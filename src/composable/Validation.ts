import type { CardFormData } from '@/types/card'

export type ValidationFunction = (formData: CardFormData) => Promise<boolean>

const isValidExpiryDate = (value: string): boolean => {
  if (!value || value.length !== 5) return false;
  
  const [month, year] = value.split('/').map(Number);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;
  

  if (month < 1 || month > 12) return false;
  

  if (year < currentYear) return false;
  

  if ((year === currentYear && month !== currentMonth && month < currentMonth)) return false;
  
  return true;
}

export const checkError: ValidationFunction = (formData) => {
    return new Promise((resolve, reject) => {
        try {
            let valid = true;
            (Object.keys(formData) as Array<keyof CardFormData>).forEach((key) => {
                if (formData[key].isRequired && !formData[key].value) {
                    valid = false;
                    formData[key].error = `${formData[key].label} is required`;
                }
                else if (key === 'name') {
                    if (formData[key].value.length > 35) {
                        valid = false;
                        formData[key].error = `${formData[key].label} must be less than 35 characters`;
                    }else {
                        formData[key].error = '';
                    }
                }
                else if (key === 'cardNumber') {
                    if (formData[key].value.length !== 16) {
                        valid = false;
                        formData[key].error = `${formData[key].label} must be 16 digits`;
                    }else {
                        formData[key].error = '';
                    }
                } else if (key === 'validTill' && formData[key].value) {
                    if (!isValidExpiryDate(formData[key].value)) {
                        valid = false;
                        formData[key].error = 'Please enter a valid future date';
                    } else {
                        formData[key].error = '';
                    }
                }
                else {
                    formData[key].error = '';
                }
            })
            resolve(valid)
        } catch (error) {
            reject(error)
        }
    })
}

export const allowOnlyNumbers = (event: KeyboardEvent): boolean => {
  if ([
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
  ].includes(event.key)) {
    return true;
  }

  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
    return false;
  }
  return true;
}
