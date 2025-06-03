// hooks/useFileUpload.js

import { useState } from 'react';
import { uploadResume } from '../services/fileUploadService';

export const useFileUpload = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpload = async (files) => {
    try {
      setLoading(true);
      setStatus('');
      const result = await uploadResume(files);
      setStatus('Upload successful!');
      return result;
    } catch (error) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleUpload, status, loading };
};
