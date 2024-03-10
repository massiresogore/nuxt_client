import Cookies from 'js-cookie';
export default defineNuxtPlugin((nuxtApp) => {
const runtimeConfig = useRuntimeConfig()

    return {
        provide: {
          hello: (msg: string) => `Hello ${msg}!`,
          apiFetch: $fetch.create({
            baseURL: `${runtimeConfig.public.BASE_URL}`,
            credentials: "include",
            headers: {
              Accept: "application/json",
              "X-XSRF-TOKEN": Cookies.get('XSRF-TOKEN')
            }
          })
        }
      }
})
