"use client"

import { useEffect, useState } from "react";
import { getRequest } from "@/utils/api";

export function useEffectGetFetch<T>(provider: string | Promise<T>, mapper?: (data: any) => T) {
  const [data, setData] = useState<null | T>(null);

  const fetchData = async (baseProvider: string | Promise<T>) => {
    try {
      if (typeof baseProvider === "string") {
        setData(await getRequest<T>(baseProvider, mapper));
      } else {
        baseProvider
          .then(responses => {
            setData(mapper ? mapper(responses) : responses);
          })
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(provider);
  }, []);

  return { data, fetchData };
}
