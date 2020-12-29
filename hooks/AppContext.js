import { createContext, useContext } from "react";
import { useQuery } from '@apollo/client';
import { CURRENT_USER_QUERY } from '../components/User/User';

const AppCtx = createContext();

const AppContext = ({ children }) => {
  const { data, loading } = useQuery(CURRENT_USER_QUERY);

  let userData = { data, loading };

  return (
    <AppCtx.Provider value={{
      userData
    }}>
      {children}
    </AppCtx.Provider>
  )
}

export const useUserData = () => {
  const { userData } = useContext(AppCtx);
  return userData;
};

export default AppContext;