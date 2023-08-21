<template>
  <VNavigationDrawer v-if="isMobile" v-model="drawer" location="right" temporary>
    <VList nav>
      <VListItem to="/">
        <template #prepend><VIcon icon="mdi-home"></VIcon></template>
        <VListItemTitle>首頁</VListItemTitle>
      </VListItem>
      <VListItem to="/orders">
        <template #prepend><VIcon icon="mdi-book-open-page-variant-outline"></VIcon></template>
        <VListItemTitle>文章</VListItemTitle>
      </VListItem>
      <VListItem v-if="!isLogin" to="/register">
        <template  #prepend ><VIcon icon="mdi-account-plus"></VIcon></template>
        <VListItemTitle>註冊</VListItemTitle>
      </VListItem>
      <VListItem v-if="!isLogin" to="/login">
        <template  #prepend ><VIcon icon="mdi-login"></VIcon></template>
        <VListItemTitle>登入</VListItemTitle>
      </VListItem>
      <VListItem v-if="isLogin" to="/cart">
        <template #prepend><VIcon icon="mdi-heart"></VIcon></template>
        <VListItemTitle>收藏</VListItemTitle>
      </VListItem>
      <VListItem v-if="isLogin" to="/admin">
        <template #prepend><VIcon icon="mdi-cog"></VIcon></template>
        <VListItemTitle>管理</VListItemTitle>
      </VListItem>
      <VListItem v-if="isLogin" @click="logout">
        <template #prepend><VIcon icon="mdi-logout"></VIcon></template>
        <VListItemTitle>登出</VListItemTitle>
      </VListItem>
    </VList>
  </VNavigationDrawer>
  <VAppBar color="">
    <VContainer class="d-flex align-center">
      <VBtn to="/" :active="false">
        <VAppBarTitle><VImg max-height="40" :max-width="270" src="../assets/transform.gif"></VImg></VAppBarTitle>
      </VBtn>
      <VSpacer></VSpacer>
      <VAppBarNavIcon v-if="isMobile" @click="drawer = true"></VAppBarNavIcon>
      <template></template>
      <VBtn v-if="!isMobile" to="/" prepend-icon="mdi-home">首頁</VBtn>
      <VBtn v-if="!isMobile " to="/orders" prepend-icon="mdi-book-open-page-variant-outline">文章</VBtn>
      <VBtn v-if="!isMobile && !isLogin" to="/register" prepend-icon="mdi-account-plus">註冊</VBtn>
      <VBtn v-if="!isMobile && !isLogin" to="/login" prepend-icon="mdi-login">登入</VBtn>
      <VBtn v-if="!isMobile && isLogin" to="/cart" prepend-icon="mdi-heart">收藏</VBtn>
      <VBtn v-if="!isMobile && isLogin"  to="/admin" prepend-icon="mdi-cog">管理</VBtn>
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
const { isLogin } = storeToRefs(user)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

const drawer = ref(false)

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
