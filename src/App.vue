<template>
  <v-app>

    <webapp-header />
   
   <v-content>
    <router-view></router-view>
    </v-content>
   
    <webapp-footer />
  </v-app>
  
</template>

<script>
import header from './views/header.vue'
import footer from './views/footer.vue'


export default {
  name: 'App',

  components: {
    'webapp-header': header,

    'webapp-footer': footer
    

  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
main {
  background-color: white;
}
#testC {
 color: $testcolor;
}

</style>
