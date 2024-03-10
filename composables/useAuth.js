export const useAuth = () => {
  function setUser(name) {
    localStorage.setItem('user', JSON.stringify({ name }))
  }

  function getUser() {
    return JSON.parse(localStorage.getItem('user'))
  }

  function removeUser() {
    localStorage.removeItem('user')
  }

  const isLoggedIn = computed(() => {
    //permet d'acceder au window car les composant serveurs nònt pas access a windows ni console.log
    if (process.client) {
      return !!localStorage.getItem('user');
    }
  })

  return { setUser, getUser, removeUser, isLoggedIn }
}
