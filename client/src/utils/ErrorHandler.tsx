import axios from 'axios';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';

export const handleError = (error: AxiosError) => {
  if (axios.isAxiosError(error)) {
    const err = error.response as {
      data: { errors?: Record<string, string[]>; message?: string };
      status?: number;
    };

    console.error('err', err);
    if (Array.isArray(err?.data.errors)) {
      for (const val of err.data.errors) {
        toast.warning(val.description);
      }
    } else if (typeof err?.data.errors === 'object') {
      for (const key in err.data.errors) {
        toast.warning(err.data.errors[key][0]);
      }
    } else if (err?.data) {
      toast.warning(err.data.message);
    } else if (err?.status == 401) {
      toast.warning('Vous devez vous connecter');
      window.history.pushState({}, 'LoginPage', '/connexion');
    } else if (err) {
      console.error('err.data');
      toast.warning(err.data.message);
    }
  }
};
