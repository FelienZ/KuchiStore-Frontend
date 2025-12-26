/* eslint-disable react-hooks/set-state-in-effect */
import { AuthContext } from "@/context/AuthContext";
import type { User } from "@/utils/types/Auth/Response/User";
import type { UserDetail } from "@/utils/types/Auth/Response/UserDetail";
import type React from "react";
import { useEffect, useState } from "react";
import useUser from "../Hooks/Auth/useUser";
import { queryClient } from "../Helper/QueryClientInstance";
import { RequestInterceptor } from "@/utils/services/interceptor";
import { useLocation } from "react-router";

const dummy = {
  id: null,
  username: null,
  email: null,
  detail: null,
  created_at: null,
};

type AuthStatus = "loading" | "authenticated" | "unauthenticated";
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [account, setAccount] = useState<User<UserDetail>>(dummy);
  const [isAuthStatus, setIsAuthStatus] = useState<AuthStatus>("loading");
  const { data, isError } = useUser();
  const location = useLocation();
  function login(data: User<UserDetail>) {
    setAccount(data);
    setIsAuthStatus("authenticated");
  }
  function logout() {
    setAccount(dummy);
    setIsAuthStatus("unauthenticated");
    queryClient.removeQueries({ queryKey: ["me"] });
  }
  function revalidateAuth() {
    setIsAuthStatus("loading");
    if (account.id !== null) {
      return login(account);
    } else if (isError && !account.id) {
      return logout();
    }
  }
  useEffect(() => {
    if (data?.payload) {
      login(data.payload);
    }
  }, [data]);
  useEffect(() => {
    RequestInterceptor(logout);
  }, [location.pathname]);
  const isAuthenticated = isAuthStatus === "authenticated";
  const isLoadingAuth = isAuthStatus === "loading";
  return (
    <AuthContext.Provider
      value={{
        account,
        isAuthenticated,
        isLoading: isLoadingAuth,
        isError,
        revalidateAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
