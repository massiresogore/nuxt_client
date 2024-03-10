<script lang="js" setup>
const { $apiFetch } = useNuxtApp()

//Remove user in the local storage
const {removeUser, isLoggedIn, getUser} = useAuth();


 const title = useState('title', ()=>'Nuxt 3 blog'); //title dinamiquely
async function logout() {
  try {
    await $apiFetch('/logout', {
      method: 'POST',
    })
  } catch (err) {
    console.log(err.data)
  } finally {
    removeUser();
    window.location.pathname = '/'
  }
}

if (typeof localStorage !== 'undefined') {
  localStorage.setItem('key', 'value');
} else if (typeof sessionStorage !== 'undefined') {
  // Fallback to sessionStorage if localStorage is not supported
  sessionStorage.setItem('key', 'value');
} else {
  // If neither localStorage nor sessionStorage is supported
  console.log('Web Storage is not supported in this environment.');
}


</script>

<template>
  <Title>{{ title }}</Title>
  <div>
    <!-- component -->
      <header class="bg-gray-800">
        <nav class="container mx-auto px-6 py-3">
          <div class="flex items-center justify-between">

            <div class="text-white font-bold text-xl">
             <ClientOnly>
              <NuxtLink to="/">Logo</NuxtLink>
             </ClientOnly>
            </div>
            <div class="hidden md:block">
              <ClientOnly>
                <ul class="flex items-center space-x-8">
                  <li><NuxtLink to="/" class="text-white">Home</NuxtLink></li>
                  <li><NuxtLink to="/create" class="text-white">Create post</NuxtLink></li>
                  <li><NuxtLink to="/about" class="text-white">About</NuxtLink></li>
                  <li><NuxtLink to="/contact"  class="text-white">Contact</NuxtLink></li>
                  <li v-if="!isLoggedIn" ><NuxtLink to="/login" class="text-white">Login</NuxtLink></li>
                  <li v-if="!isLoggedIn" ><NuxtLink to="/register" class="text-white">Register</NuxtLink></li>
                  <li><NuxtLink to="/my-info" class="text-white">My info</NuxtLink></li>
                  <li v-if="isLoggedIn" ><NuxtLink to="/logout" class="text-white" @click.prevent="logout">Logout</NuxtLink></li>
                  <li v-if="isLoggedIn" ><NuxtLink to="/logout" class="text-white" >{{ getUser()?.name }}</NuxtLink></li>

                </ul>
              </ClientOnly>
            </div>
            <div class="md:hidden">
              <button class="outline-none mobile-menu-button">
                <svg class="w-6 h-6 text-white" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="mobile-menu hidden md:hidden">
            <ClientOnly>
              <ul class="mt-4 space-y-4">
                <li><NuxtLink to="/" class="block px-4 py-2 text-white bg-gray-900 rounded">Home</NuxtLink></li>
                <li><NuxtLink to="/about" class="block px-4 py-2 text-white bg-gray-900 rounded">About</NuxtLink></li>
                <li><NuxtLink to="/contact" class="block px-4 py-2 text-white bg-gray-900 rounded">Contact</NuxtLink></li>
              </ul>
            </ClientOnly>
          </div>
          
        </nav>
      </header>
    <slot />
  </div>
</template>


