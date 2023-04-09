import { useEffect, useState } from "react";

export const useFetch = (url) => {
  //

  const [info, setInfo] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  //
  const getFetch = async () => {
    setInfo({ ...info, isLoading: true });
    const resp = await fetch(url);
    const data = await resp.json();

    setInfo({ data, isLoading: false, hasError: null });
    // console.log(data);
  };

  useEffect(() => {
    getFetch();
  }, [url]);
  //
  return {
    // data: info.state,
    // isLoading: info.isLoading,
    // hasError: info.hasError,
    info,
    ...info,
  };
};
