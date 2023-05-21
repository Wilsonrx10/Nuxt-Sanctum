import nuxtStorage from 'nuxt-storage';
export const useFetch = (respond) => {
  const runtimeConfig = useRuntimeConfig();
  const token = nuxtStorage.localStorage.getData('token');

  const fecthPOST = async (router,param) => {
     await $fetch(`${runtimeConfig.public.baseURL}${router}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: {
        ...param,
      },
    })
      .then((response) => {
        respond.value = response
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fecthGET = async (router) => {
     await $fetch(`${runtimeConfig.public.baseURL}${router}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {fecthPOST,fecthGET}
};
