<template>

<v-container grid-list  align-center fluid>

<v-layout row wrap justify-content >

        <v-flex xs12 class="my-10">
            <h1 class="text-center">PORTFOLIO</h1>
        </v-flex>

 <v-hover>
    <template v-slot:default="{ hover }">

        <v-flex xs12 sm6 md4 lg3 xl3>
        <v-card hover tile    >
        
        <v-img class="black--text align-center " src="../assets/billede1.png"></v-img>
        
        <v-fade-transition>
        <v-overlay v-if="hover" class="text-center test1 test2"  data-aos="fade-in zoom-in" opacity="0.90" absolute color="#FFFFFF"><h2 class="black--text mx-9">Layers i Photoshop</h2> <router-link id="btn_link" to="/produkt1" ><v-btn color="black" class="ma-9" tile  outlined> Læs mere </v-btn>  </router-link>
        </v-overlay>
        </v-fade-transition>
     

        </v-card>
        </v-flex>

    </template>
  </v-hover>
   <v-hover>
    <template v-slot:default="{ hover }">

        <v-flex xs12 sm6 md4 lg3 xl3>
        <v-card  hover tile >
        
        <v-img class="black--text align-end"  src="../assets/billede2.png">
        </v-img>
       
        <v-fade-transition>
        <v-overlay v-if="hover" data-aos="fade-in" opacity="0.90" class="text-center"  absolute color="#FFFFFF"><h2 class="text-center  black--text mx-9">Triangulated Gradient Backgrounds i Illustrator</h2>       <router-link id="btn_link" to="/produkt2" ><v-btn color="black" class="ma-9" tile  outlined> Læs mere </v-btn>  </router-link>  </v-overlay>
        </v-fade-transition>
     
        </v-card>
        </v-flex>

    </template>
  </v-hover>
   <v-hover>
    <template v-slot:default="{ hover }">

        <v-flex xs12 sm6 md4 lg3 xl3>
        <v-card  hover tile >
        
        <v-img class="black--text align-end" src="../assets/billede3.png">
        </v-img>
       
        <v-fade-transition>
        <v-overlay v-if="hover" data-aos="fade-in" class="text-center" opacity="0.90" absolute color="#FFFFFF"><h2 class="text-center  black--text mx-9">Spherical Tesseract Shape i Illustrator</h2>         <router-link id="btn_link" to="/produkt3" ><v-btn color="black" class="ma-9" tile  outlined> Læs mere </v-btn>  </router-link> 
</v-overlay>
        </v-fade-transition>
     
        </v-card>
        </v-flex>

    </template>
  </v-hover>
   <v-hover>
    <template v-slot:default="{ hover }">

        <v-flex xs12 sm6 md4 lg3>
        <v-card  hover tile>
        
        <v-img class="black--text align-end"  src="../assets/billede4.png">
        </v-img>
       
        <v-fade-transition>
        <v-overlay v-if="hover" data-aos="fade-in" class="text-center" opacity="0.90" absolute color="#FFFFFF"><h2 class="text-center  black--text mx-9" >Plakat Assignment i Illustrator</h2> <router-link id="btn_link" to="/produkt4" ><v-btn color="black" class="ma-9" tile  outlined> Læs mere </v-btn>  </router-link> 
</v-overlay>
        </v-fade-transition>
     
        </v-card>
        </v-flex>

    </template>
  </v-hover>
   <v-hover>
    <template v-slot:default="{ hover }">

        <v-flex xs12 sm6 md4 lg3>
        <v-card  hover tile>
        
        <v-img class="black--text align-end" src="../assets/billede5.png">
        </v-img>
       
        <v-fade-transition>
        <v-overlay v-if="hover" data-aos="fade-in" class="text-center" opacity="0.90" absolute color="#FFFFFF"><h2 class="text-center black--text mx-9">Visitkort i InDesign</h2>   <router-link id="btn_link" to="/produkt5" ><v-btn color="black" class="ma-9" tile  outlined> Læs mere </v-btn>  </router-link>  
</v-overlay>
        </v-fade-transition>
     
        </v-card>
        </v-flex>

    </template>
  </v-hover>
  




</v-layout>
     <div id="div-id2"></div>
<ommig />
  

<kontakt />

</v-container>

</template>

<script>
import ommig from './../components/ommig.vue'
import kontakt from './../components/kontakt.vue'


  export default {
    components: {
    'ommig':ommig,
    'kontakt':kontakt

    },

    data: () => ({
      overlay: false,
    }),
  }
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');






.v-application {

 font-family: 'Poppins', sans-serif !important
}

h2 {
font-family: 'Poppins', sans-serif;
}
h1 {
font-family: 'Poppins', sans-serif;
font-size: 4em;
letter-spacing: 0.2em;
}

#btn_link {
  color: black;
  text-decoration: none;
}

.v-overlay {
 border-color: black !important;
 border-style: solid;
border-width: 5px;
}

</style>