import { useEffect, useState } from 'react';

type IUseInit = {
  isReady: boolean;
};

 const useInit = (): IUseInit => {
  
  const [isReady, setIsReady] = useState(false);

  // In real app load some assets here
  useEffect(() => {
    setIsReady(true);
  }, []);

  return {
    isReady,
  };
};

export default useInit;