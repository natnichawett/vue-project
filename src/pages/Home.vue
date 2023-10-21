<template>
  <div>
    <Navbar />
    <section class="home">

        <div class="image">
            <img src="images/profiles.png" alt="">
        </div>

        <div class="content">
            <h3>hi,  I'm Natnicha Wettayawong</h3>
            <span>Make each day a little better than before.</span>
            <p>I'm Kurt, I'm multimedia and entertainment engineering at Bangkok Univercity.</p>
            <a href="about.html" class="btn"> about me <i class="fas fa-user"></i> </a>
        </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue' ;
export default {
    components: { Navbar }
}
</script>

<style>

</style>