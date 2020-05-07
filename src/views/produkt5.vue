<template>
   <v-container grid-list align-center>
  
<v-layout row wrap justify-content >

        <v-flex xs12 sm12 md12 lg12 xl12 pa-2 class="my-10">
            <router-link id="btn_link" to="/" ><v-btn color="black" tile  outlined> Tilbage </v-btn>  </router-link>
        </v-flex>



        <v-flex xs12 sm12 md6 lg6 xl6 pa-2 >

        <v-card hover tile >
        <v-img class="black--text align-center"  max-height="400px" src="../assets/billede5.png"></v-img>
        </v-card>

        </v-flex>

        <v-flex xs12 sm12 md6 lg6 xl6 pa-2 >
            
        <h2 class="black--text mx-9">Visitkort i Adobe InDesign</h2> 
        <v-card flat tile class="black--text mx-9" >
        Visitkortet er designet med fokus på at skabe et stilfuldt udtryk og samtiditgt havde en entydig visuel identitet. Processen med visitkortet har været rigtigt spændende. Navnet står uden for boksen ligesom for at vise at man som designer nogen gange har brug for at tænke ud af boksen og forsøge at skille sige ud.
        </v-card>
         <v-card flat tile class="black--text my-9 mx-9" >
        Vedhæftet forside og bagside
        </v-card>

        </v-flex>

        <v-flex xs12 sm12 md6 lg6 xl6 pa-2 >

        <v-card hover tile >
        <div data-aos="zoom-in"></div>
        <v-img class="black--text align-center"  max-height="400px" src="../assets/business card2.png"></v-img>
        <v-fade-transition>
        <v-overlay v-if="hover" class="text-center test1 test2" data-aos="fade-in" opacity="0.90" absolute color="#FFFFFF">
        <v-btn color="black" class="ma-9" tile  outlined> <router-link id="btn_link" to="/produkt" >Læs mere</router-link> </v-btn>  
        </v-overlay>
        </v-fade-transition>
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