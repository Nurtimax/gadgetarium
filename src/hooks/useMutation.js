import axios from "axios";
import { useCallback, useState } from "react";
import { SWAGGER_API } from "../utils/constants/fetch";

const useMutation = (methodCRUD = "POST") => {
  const [state, setState] = useState({
    isLoading: false,
    error: null,
    data: null,
  });

  const getLinkHandler = useCallback(
    async (file) => {
      const bodyFormData = new FormData();
      bodyFormData.append("file", file[0]);
      axios({
        method: methodCRUD,
        url: `${SWAGGER_API}file`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          setState((prevState) => ({
            ...prevState,
            data: response.data,
            error: null,
          }));
        })
        .catch((error) => {
          setState((prevState) => ({ ...prevState, error: error.message }));
        });
    },
    [state]
  );

  return [state, getLinkHandler];
};

export default useMutation;
