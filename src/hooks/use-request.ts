/*
 * @Author: jweboy
 * @Date: 2020-11-07 22:55:07
 * @LastEditors: jweboy
 * @LastEditTime: 2020-11-08 23:33:24
 */
import { useEffect, useState } from 'react';

export const useRequest = (
  reqHandler: (options?: any) => Promise<any>,
  options?: any,
  deps: any[] = [],
) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState<boolean>(false);

  setLoading(true);

  console.log(deps);

  useEffect(() => {
    reqHandler(options)
      .then(({ data }) => {
        setData(data);
      })
      .catch(() => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // useEffect(() => {

  // }, [options])

  return { data, loading };
};
