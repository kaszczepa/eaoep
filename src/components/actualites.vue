<template>
    <div>
        <div class="container" style="padding-bottom: 200px;">
            <p class="title">Actualités </p>
            <div class="row">
                <div class="col-sm-6" >
                    <div class="polaroid" id="japan" v-on:click="goToAtelier()">
                        <div class="HideActualites" >
                            <img class="actualites" src="./../assets/japon.jpg" alt="Japan" style="width:100%;" />
                            <div class="centered_on_image"><p><i class="fa fa-hand-o-left fa-lg" aria-hidden="true"></i></p></div>
                            </div>
                            <div class="">
                                <p class="font_regular" style="text-align:center;"><b>Atelier - service à la clientèle au Japon</b></p>
                                <div class="overlay">
                                    <p class="font_regular containery" style="padding-top: 80px;">On vous invite au 
                                        cours pratique de la norme et du modèle du service à la clientèle qui suscite 
                                        le sourire, la joie, la satisfaction et le désir de plus - au Japon.(...)
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            
            
                <div class="col-sm-6">
                    
                    <div class="polaroid" id="flight" v-on:click="goToAvion()">
                        <div class="HideActualites">            
                            <img class="actualites" src="./../assets/lot.jpg" alt="flight" style="width:100%;" />
                            <div class="centered_on_image"><p><i class="fa fa-hand-o-left fa-lg" aria-hidden="true"></i></p></div>
                        </div>
                        <div class="">
                            <p class="font_regular" style="text-align:center;"><b>Vols d’affaires pour les membres de l’AEPE</b></p>
                        </div>
                        <div class="overlay">
                                <p class="font_regular containery" style="padding-top: 60px;">Pour les membres de l’AEPE nous commençons la coopération avec des sociétés
                                     spécialisées dans l'affrètement aérien (les avions et les hélicoptères). Nous voudrions que nos entrepreneurs 
                                     puissent voyager rapidement et dans les conditions confortables. (...)
                                </p>
                        </div>
                    </div>    
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
.polaroid:hover .overlay {
  opacity: 1;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  color: white;
}
.polaroid {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    max-width: 330px;
    float: left;
    position: relative;
}
.polaroid:hover{
    transform: scale(1.1) rotate(3deg);
    transition: transform 0.4s ease;
    
}
#japan{
    float: right;
    padding: 15px;
}
#flight{
    float: left;
    padding: 15px;
}
.containery {
    text-align: center;
    padding: 20px;
    font-size: 15px;
    margin: 0 auto;
}
.centered_on_image {
   display:none;
}
.actualites{
    height: 250px;
}

.HideActualites{ 
    position: relative;
    padding-bottom: 20px;
   
}



.actualites:hover  { 
    
}
@media (max-width: 770px) {
    .polaroid{
        margin-top: 30px;
        max-width: 350px;
        cursor: pointer;
        
    }
    .centered_on_image {
        display: block;
        position: absolute;
        top: 20%;
        left: 85%;
        transform: translate(-50%, -50%);
        color: white;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
    }
 
    .overlay{
        display:none;
    }
    
    .polaroid:hover{
    transform: none;
    transition: none;
    }

    #japan, #flight{
        clear: both;
        float: left;
        
    }
}
</style>
