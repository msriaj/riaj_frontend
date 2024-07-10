export const useBackendAPI = () => {
  const config = useRuntimeConfig();
  return {
    baseURL: config.apiBase || config.public.apiBase,
  };
};
