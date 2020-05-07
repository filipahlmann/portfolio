<template>
   <v-container grid-list align-center>
  
<v-layout row wrap justify-content >

        <v-flex xs12 class="my-10">
            <router-link id="btn_link" to="/" ><v-btn color="black" class="ma-9" tile  outlined> Tilbage </v-btn>  </router-link>
        </v-flex>



        <v-flex xs12 sm12 md6 lg6 xl6 pa-2 >
        <v-card hover tile >
        <div data-aos="zoom-in"></div>
        <v-img class="black--text align-center"  max-height="400px" src="../assets/billede1.png"></v-img>
        
        <v-fade-transition>
        <v-overlay v-if="hover" class="text-center test1 test2" data-aos="fade-in" opacity="0.90" absolute color="#FFFFFF">
        <h2 class="black--text mx-9">Layers i Photoshop</h2> 
        <v-btn color="black" class="ma-9" tile  outlined> <router-link id="btn_link" to="/produkt" >Læs mere</router-link> </v-btn>  
        </v-overlay>
        </v-fade-transition>
     

        </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg6 xl6 pa-2 >
        <v-card hover tile >
       
            TEKST TEKST TEKST

        </v-card>
        </v-flex>



</v-layout>
   </v-container>
</template>

<script>
    export default {
        
    
    }
</script>

<style lang="scss" scoped>
#btn_link {
  color: black;
  text-decoration: none;
}
</style>