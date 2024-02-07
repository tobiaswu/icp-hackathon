import { useEffect, useState } from 'react';
import { useAuth } from '.';
import { Doc, listDocs } from '@junobuild/core-peer';

export const useShop = () => {
  const { user } = useAuth();
  const [hasShop, setHasShop] = useState<boolean>(true);
  const [data, setData] = useState<Doc<unknown>[]>([]);

  const shops = async () => {
    const shopList = await listDocs({
      collection: 'shops',
      filter: {
        owner: user?.owner,
      },
    }).then((data) => data);

    setHasShop(shopList.items_length > 0);
    setData(shopList.items);
  };

  useEffect(() => {
    (async () => await shops())();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { hasShop, data };
};
