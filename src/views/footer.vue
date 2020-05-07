<template>
    <footer>
        <p>{{ title }}</p>
        <div class="style-light footer-scroll-top" style="">
            <a href="#" class="scroll-top">
            <i class="fa fa-angle-up fa-stack fa-rounded btn-default btn-hover-nobg"></i>
            </a>
        </div>
        
    </footer>
  
</template>

<script>
    export default {
        data() {
            return{
            title: '© 2020  Filip Ahlmann  All rights reserved'}
        }
    }
</script>

<style lang="scss" scoped>
footer {
    background-color: #141618;
    height: 50px;
    color:#ffffff;
    padding: 10px;
    margin-top: 20px;
       font-family: 'Poppins', sans-serif;

}



</style>