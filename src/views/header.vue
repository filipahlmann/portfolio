<template>
       
<v-container grid-list-sm  >

     <v-flex>
        <v-app-bar color="white" fixed scroll-target="#scrolling-techniques"  >
        <div id="#div-id1" v-smooth-scroll data-aos-delay="50">
        <router-link to="/" > 
        <v-img max-height="33" max-width="195" class="ma-2 pl-2"  src="../assets/logoigen.png"></v-img>
        </router-link>
        </div>
        <v-spacer></v-spacer>
        <a href="#div-id1" v-smooth-scroll data-aos-delay="50"><v-btn class="ma-2" tile  outlined>Portfolio</v-btn></a>
        <a href="#div-id2" v-smooth-scroll data-aos-delay="500"><v-btn class="ma-2" tile  outlined>CV</v-btn> </a>
        <a href="#div-id3" v-smooth-scroll><v-btn class="ma-2" tile  outlined>Kontakt  </v-btn></a>     
        </v-app-bar>
    </v-flex>

    <div id="div-id1"></div>
</v-container>     
   
</template>

<script>
    export default {
    props: ['mode']
    }
</script>










<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;700&display=swap');

header, .v-sheet.v-sheet--tile.theme--light.v-toolbar.v-app-bar.v-app-bar--fixed.white
{
    z-index: 99999 !important;
            box-shadow: none;

}

header {
            box-shadow: none;

}


.v-app-toolbar {
        box-shadow: none;

}


.v-btn__content {
    font-family: 'Poppins', sans-serif;
    text-underline-position: none;
}

a:-webkit-any-link {
    text-decoration: none;
}

</style>