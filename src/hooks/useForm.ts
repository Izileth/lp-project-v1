import { useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants';

export const useForm = (initialState: any, messageBuilder: (state: any) => string) => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = messageBuilder(formState);
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return { formState, handleInputChange, handleSubmit };
};
