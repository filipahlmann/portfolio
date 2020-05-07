<template>
    <v-container grid-list-md>
           <v-flex xs12>
            <h1 class="black--text text-center">KONTAKT</h1>
        </v-flex>
        <v-layout row wrap justify-center align-center > 
            
    <v-flex xs12 sm12 md12 lg12 class="ma-5 " align-center  >
        <v-card tile flat 
        align-center
    class="mx-auto"
    max-width="500"
    
  >
        <div id="test1">
        <div id="test2">

    <v-card-text class="ma-5 " >
      <div>Mobil</div>
      <h3 class="black--text " > 
        45+ 27 83 34 08 
      </h3>
            <spacer></spacer>
      <div>Email</div>
      <h3 class="black--text " > 
        filipahlmann@gmail.com
      </h3>

      
    </v-card-text>
  </div>
  </div>

  </v-card>
    </v-flex>
</v-layout>
<div id="div-id3"> </div>

</v-container>


  

</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      tekst: { required, maxLength: maxLength(100) },

      select: { required },
    },

    data: () => ({
      name: '',
      email: '',
      tekst: '',
      select: null,
    }),

    computed: {
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Tekst must be at most 100 characters long')
        !this.$v.name.required && errors.push('Tekst is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
       tekstErrors () {
        const errors = []
        if (!this.$v.tekst.$dirty) return errors
        !this.$v.tekst.maxLength && errors.push('Must be valid e-mail')
        !this.$v.tekst.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },

    },
  }
</script>

<style lang="scss" scoped>
.v-text-field {
    justify-content: center;
    display: flex;
    border-style: solid 1p;
}

.v-application {

 font-family: 'Poppins', sans-serif !important
}

.p.display-1 {

 font-family: 'Poppins', sans-serif !important
}


h1 {
letter-spacing: 0.2em;
font-family: 'Poppins', sans-serif;
font-size: 4em;

}

.box1 {
border-color: black !important;
 border-style: solid;
border-width: 2px;
}

.v-card {
  display: flex;
  justify-content: center;
  align-content: center;
   font-family: 'Poppins', sans-serif !important

}

#test1 {
 border-color: black !important;
 border-style: solid;
 border-width: 1px;
 margin: 10px 10px 10px 10px;
}

#test2 {
 border-color: black !important;
 border-style: solid;
 border-width: 1px;
 margin: -12px -12px 10px 10px;
}

</style>