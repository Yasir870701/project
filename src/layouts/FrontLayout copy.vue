<template>
  <VNavigationDrawer v-if="isMobile" v-model="drawer" location="right" temporary>
    <VList nav>
      <VListItem v-if="!isLogin" to="/register">
        <template  #prepend >
          <VIcon icon="mdi-account-plus"></VIcon>
        </template>
        <VListItemTitle>註冊</VListItemTitle>
      </VListItem>
      <template v-for="navItem in navItems" :key="navItem.to">
        <VListItem v-if="navItem.show" :to="navItem.to">
          <template #prepend>
            <VIcon :icon="navItem.icon"></VIcon>
          </template>
          <template #append>
            <VBadge color="success" :content="cart.toString()" v-if="navItem.to === '/cart'"></VBadge>
        </template>
          <VListItemTitle>{{ navItem.text }}</VListItemTitle>
        </VListItem>
      </template>
      <VListItem v-if="isLogin" @click="logout">
        <template #prepend>
          <VIcon icon="mdi-logout"></VIcon>
        </template>
        <VListItemTitle>登出</VListItemTitle>
      </VListItem>
    </VList>
  </VNavigationDrawer>
  <VAppBar color="primary">
    <VContainer class="d-flex align-center">
      <VBtn to="/" :active="false">
        <VAppBarTitle>Transform!</VAppBarTitle>
      </VBtn>
      <VSpacer></VSpacer>
      <VAppBarNavIcon v-if="isMobile" @click="drawer = true"></VAppBarNavIcon>
      <template v-if="!isMobile">
        <template v-for="navItem in navItems" :key="navItem.to">
          <VBtn variant="text" :prepend-icon="navItem.icon" :to="navItem.to" v-if="navItem.show">
            {{ navItem.text }}
            <VBadge color="success" :content="cart.toString()" floating v-if="navItem.to === '/cart'"></VBadge>
          </VBtn>
        </template>
      </template>
      <template></template>
      <VBtn v-if="!isMobile && !isLogin" to="/register" prepend-icon="mdi-account-plus">註冊</VBtn>
      <VBtn v-if="!isMobile && isLogin" variant="text" prepend-icon="mdi-logout" @click="logout">登出</VBtn>
    </VContainer>
  </VAppBar>
  <VMain>
    <RouterView :key="$route.path"></RouterView>
  </VMain>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

const drawer = ref(false)

const navItems = computed(() => [
  // { to: '/register', text: '註冊', icon: 'mdi-account-plus', show: !isLogin.value },
  { to: '/login', text: '登入', icon: 'mdi-login', show: !isLogin.value },
  // { to: '/cart', text: '購物車', icon: 'mdi-cart', show: isLogin.value },
  // { to: '/orders', text: '訂單', icon: 'mdi-format-list-numbered', show: isLogin.value },
  { to: '/admin', text: '管理', icon: 'mdi-cog', show: isLogin.value && isAdmin.value }
])

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
}
</script>
