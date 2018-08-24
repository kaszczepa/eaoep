<template>
    <div>
        <div class="container">
            <p class="title">Actualités</p>
            <div class="column_container">
                <div class="row">
                    <div class="box_picture japan" v-on:click="goToAtelier()">
                        <p>Atelier - service à la </br>clientèle au Japon</p>
                    </div>  
                    <div class="column_text">
                        <p class="font_regular"><b>Atelier - service à la clientèle au Japon</b></p>
                        <p class="font_regular">On vous invite au cours pratique de la norme et du modèle
                            du service à la clientèle qui suscite le sourire, la joie, la satisfaction et le
                            désir de plus - au Japon.(...)
                        </p>
                    </div></br>
                    <div class="box_picture flight" v-on:click="goToAvion()">
                        <p>Vols d’affaires pour </br>les membres de l’AEPE</p>
                    </div>
                    <div class="column_text">
                        <p class="font_regular"><b>Vols d’affaires pour les membres de l’AEPE</b></p>
                        <p class="font_regular">Pour les membres de l’AEPE nous commençons la coopération 
                            avec des sociétés spécialisées dans l'affrètement aérien (les avions et les hélicoptères).
                            Nous voudrions que nos entrepreneurs puissent voyager rapidement et dans les conditions
                            confortables. (...)
                        </p>
                    </div>
                </div>
            </div>
        </div>
      
        <div class="column_container">
            <div class="row">
                <div class="column1">
                    <p> </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {

  },
  methods: {
    goToAtelier () {
        this.$router.push('/actualites/atelier');
    },

    goToAvion () {
        this.$router.push('/actualites/avion');
    }
  }
}
</script>

<style>
.box_picture{
    display: table-cell;
    height: 250px;
    text-align: center;
    vertical-align: middle;
    border-right: 10px solid white;
    border-left: 10px solid white;
    background-repeat: no-repeat;
    padding: 20px;  
    font-size: 20px;
    font-weight: bold;
}
.box_picture:hover{ 
    background-color: white;
    opacity: .5;
    cursor: pointer;
}
.japan{
    background-image:  url('./../assets/japon.jpg');
    color: white;
}
.flight{
    background-image:  url('./../assets/lot.jpg');
    color: white;
}
@media (max-width: 600px) {
.flight, .japan, .box_picture{
    display: block;
    margin: 0 auto;
    }
}
</style>
