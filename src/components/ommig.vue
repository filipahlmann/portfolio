<template>
<v-container grid-list-md fluid>
     <v-flex xs12 lg12 class="mt-10">
            <h1 class=" text-center">CV</h1>
     </v-flex>
<v-layout align-center row wrap >


<v-flex xs12 sm12 md4 lg4 xl4 class="d-none d-md-flex">   
  <v-layout justify-end>    
<v-card max-width="260" class="text-right" flat>


<h2>FILIP AHLMANN KRISTENSEN</h2>

</v-card>
</v-layout>
</v-flex>

<v-flex xs12 sm12 md4 lg4 xl4 class="d-flex d-md-none">  
  <v-layout justify-center>    
<v-card max-width="500" class="text-center ma-5" flat>


<v-card-text class="display-1 font-weight-regular black--text ">FILIP AHLMANN KRISTENSEN

</v-card-text>

</v-card>
</v-layout>
</v-flex>


<v-flex xs6 sm6 md4 lg4 xl4  >
  <v-layout justify-center>
  <v-card flat tile>
   
      <v-img src="../assets/profil.png" max-width="300"  max-height="450" ></v-img>


  </v-card>
  </v-layout>
</v-flex>


<v-flex xs12 sm6 md4 lg4 xl4 class="d-none d-md-flex " max-width="100">
<v-layout justify-start>    

  <v-card max-width="500" flat>
      <v-card-text class="black--text font-weight-thin text-left display-1" >
        "Design is not just what it looks like and feels like. Design is how it works"</v-card-text>
  </v-card>

</v-layout>
</v-flex>

  
<v-flex xs6 sm6 md4 lg4 xl4 class="d-flex d-md-none" max-width="100">
<v-layout justify-center="">    

<v-card max-width="300" class="ma-5" flat  >
    <v-card-text class="font-regular text-center" >
      "Design is not just what it looks like and feels like. Design is how it works"</v-card-text>
</v-card>

</v-layout>
</v-flex>

<v-flex xs12 md12 >
  <v-card flat tile max-width="310"  >

  <v-flex class="d-none d-md-flex "> 
      <v-card-text class="font-regular text-center black--text" >
        Hej! Mit navn er Filip Ahlmann Kristensen, 
        jeg er 21 år og jeg er multimediedesignstuderende på 2. semester.

        </v-card-text>
  </v-flex>
</v-card>

<v-card flat tile max-width="600"  >

    <v-flex class="d-flex d-md-none"> 
      <v-card-text class="font-regular text-center black--text" >
     Hej! Mit navn er Filip Ahlmann Kristensen, 
        jeg er 21 år og jeg er multimediedesignstuderende på 2. semester.
        </v-card-text>
        <a href="../assets/pdf/FilipAhlmannCV2020.pdf" target="_blank">Download</a>
  </v-flex>
  </v-card>
</v-flex>

</v-layout>

<v-layout justify-space-around row wrap>
<v-flex xs12 sm12 md6 lg6 pa-6 dark row wrap> 
           <v-row align="start">

      <v-row justify="start">
      <v-card tile >
      <v-list :disabled="disabled" :dense="dense" :two-line="twoLine" :three-line="threeLine" :shaped="shaped" :flat="flat" :subheader="subheader" :sub-group="subGroup" :nav="nav" :avatar="avatar" :rounded="rounded">
          <h2 class="text-right" data-aos="fade-right" data-aos-offset="10" data-aos-easing="ease-in-sine">UDDANNELSE</h2 >
          <v-list-item-group v-model="item" data-aos="fade-right" data-aos-offset="10" data-aos-easing="ease-in-sine"> 
            <v-list-item v-for="(item, i) in items" :key="i" :disabled="disabled" :inactive="inactive" >
            <v-list-item-content>
                <v-list-item-year class="text-right" v-if="twoLine || threeLine" v-html="item.year"></v-list-item-year>
                <v-list-item-title class="text-right"  v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle1 class="text-right" v-if="twoLine || threeLine" v-html="item.subtitle1"></v-list-item-subtitle1>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      </v-row>
            </v-row>

</v-flex>

<v-spacer></v-spacer>

<v-flex xs12 sm12 md6 lg6 pa-6 dark row wrap>
    <v-row align="start">
    <v-row justify="start">
    <v-card tile>
        <v-list :dense="dense" :two-line="twoLine" :three-line="threeLine" :shaped="shaped" :flat="flat" :subheader="subheader" :sub-group="subGroup" :nav="nav" :avatar="avatar" :rounded="rounded">
          <h2 data-aos="fade-left" data-aos-offset="10" data-aos-easing="ease-in-sine" >ERHVERVSERFARING</h2 >
          <v-list-item-group  data-aos="fade-left" data-aos-offset="10" data-aos-easing="ease-in-sine" v-model="item2"  >
            <v-list-item v-for="(item2, i) in items2" :key="i" :disabled="disabled" :inactive="inactive" >
            <v-list-item-content >
                <v-list-item-year class="text-start" v-if="twoLine || threeLine" v-html="item2.year"></v-list-item-year>
                <v-list-item-title class="text-start" v-html="item2.title"></v-list-item-title>
                <v-list-item-subtitle1 class="text-start" v-if="twoLine || threeLine" v-html="item2.subtitle1"></v-list-item-subtitle1>

              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
    </v-card>
    </v-row>
    </v-row>
</v-flex>
  

</v-layout>
<v-container grid-list fluid align-center>

  <v-layout row wrap>

    <v-flex xs12 sm12 md12 > 
      <h2>VIDEO CV</h2>
    </v-flex>
    <v-flex xs12 sm12 md12>
<iframe width="560" height="315" src="https://www.youtube.com/embed/GiIkmcimZJc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
   </v-flex>
  </v-layout>
</v-container>
</v-container>



</template>

 


<script>
  export default {
     data: () => ({
    
    item: 4,
    items: [
       {
              year: " <span class='text--primary'>2019</span>",  
              title:  " <span class='text--primary'>Påbegyndt uddannelsen som </span><span class='text--primary font-weight-bold'> Multimediedesigner</span>",
              subtitle1: " <span class='text--primary'>Esbjerg Erhversakademi Sydvest</span>",  
                            subtitle2: " <span class='text--primary'></span>",

      },
        {
              year: " <span class='text--primary'>2018 - 2019</span>",      
              title: "<span class='text--primary'> Volontør i</span><span class='text--primary font-weight-bold'>  Tanzania </span>",
              subtitle1: " <span class='text--primary'>Arusha</span>",   
                            subtitle2: " <span class='text--primary'></span>",
   
      },
       {
              year: " <span class='text--primary'>2018 - 2019</span>",      
              title: "<span class='text--primary font-weight-bold '> Færdiggjort uddannelse/udlandstur</span>",
              subtitle1: " <span class='text--primary'>med YWAM i blandet Papau New Guinea TEKST TEKST TEKST TEKST TEKST</span>",      
               subtitle2: " <span class='text--primary'></span>",
       },
      {
              year: " <span class='text--primary'>2015 - 2017</span>",
              title: "<span class='text--primary font-weight-bold'> Esbjerg Gymnasium & HF</span>",
              subtitle1: " <span class='text--primary'>HF</span>",
                            subtitle2: " <span class='text--primary'></span>",

      },
     
    
 
    ],
    
    item2: 3,
    items2: [
         {
           year: " <span class='text--primary'>2020</span>",  
        title: "<span class='text--primary font-weight-bold'>Medhjælper på Varde soldaterhjem</span>",
        subtitle1: " <span class='text--primary'>KFUM</span>",      
                      subtitle2: " <span class='text--primary'></span>",
      },
          {
        year: " <span class='text--primary'>2018 - 2019</span>",  
        title: "<span class='text--primary font-weight-bold'> Forskellige vikarjobs i vikarbuerauet JKS</span>",
        subtitle1: " <span class='text--primary'>Cocio, Arla, Flensted Snitgrønt, ISS</span>",      
                      subtitle2: " <span class='text--primary'></span>",
},
      {
        year: " <span class='text--primary'>2015 - 2017</span>",  
        title: "<span class='text--primary font-weight-bold'> Diverse fritidsjob</span>",
        subtitle1: " <span class='text--primary'>Avisomdeling, rengøringsjob</span>",
                      subtitle2: " <span class='text--primary'></span>",

      },
  
   
      {
        year: " <span class='text--primary'>2015 - 2017</span>",  
        title: "<span class='text--primary font-weight-bold'> Diverse fritidsjob</span>",
              subtitle1: " <span class='text--primary'>med YWAM i blandet andet Papau New Guinea</span>",      
                      subtitle2: " <span class='text--primary'></span>",

      },
    ],
    
    disabled: true,
    dense: false,
    twoLine: false,
    threeLine: true,
    shaped: false,
    flat: true,
    subheader: false,
    inactive: true,
    subGroup: false,
    nav: false,
    avatar: false,
    rounded: false,
    
  }),

  }
</script>

<style lang="scss" scoped>

h1 {
font-family: 'Poppins', sans-serif;
font-size: 4em;
letter-spacing: 0.2em;

}
h2 {
font-family: 'Poppins', sans-serif;
font-size: 2.25em;
letter-spacing: 0.2em;
}

.font-regular {
font-family: 'Poppins', sans-serif;
font-size: 1em;
}
.black--text.font-weight-thin.text-left.display-1 {
  font-family: 'Poppins', sans-serif;
}


.v-list {
    transition: box-shadow 280ms cubic-bezier(0.0, 0, 0.0, 0);

}



.v-card {
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
}

.container.grid-list-md .layout .flex {
    padding: 4px;
    box-shadow: none;
  display: flex;
  justify-content: center !important; 
  align-content: center;
}

.v-list--three-line .v-list-item, .v-list-item--three-line {
  min-height: 50px;
}

#test1 {
 border-style: solid;
 border-width: 1px;
 margin: 10px 10px 10px 10px;
  z-index: 99999999999 !important;

}

#test2 {
 border-color: black !important;
 border-style: solid;
 border-width: 1px;
 margin: -12px -12px 10px 10px;
}

.v-divider 
{
  display:none;
}


</style>