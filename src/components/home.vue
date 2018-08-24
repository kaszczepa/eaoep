<template>
    <div class="home">
        <div class="main-text" style=" text-align: right; ">
            <p style=" text-align: right; padding: 30px; "><i>„Un gramme de pratique vaut
                autant qu'une tonne de théorisation.”</br><span style="color:#f1c065">
                Wallace Wattles</span></i>
            </p> 
        </div> 
        <div class="container">
            <img style="width: 100%" src="./../assets/wizja_i_aktualnosci_ludzie.png"/>
        </div>
        <div class="container " >
            <div class="box-row" style="padding-top:70px;">
                <div class="col-sm-offset-2 col-sm-8 col-sm-offset-2">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">  
                        <div class="carousel-inner">
                            <div class="item active">
                            <img src="./../assets/feature_slide_1.png"/>
                            </div>

                            <div class="item">
                            <img src="./../assets/feature_slide_2.png"/>
                            </div>

                            <div class="item">
                            <img src="./../assets/feature_slide_3.png"/>
                            </div>
                        </div>

                                    <!-- Left and right controls -->
                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" style="color: white"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>        
            </div>
        </div>
        <br>
        <div class="boxes">
            <div class="box" >
                <div class="box-row">
                    <div class="col-sm-3 grey-box ">
                        <p class="middle_white_text"><i class="row">Nos valeurs</i><br>
                            <span class="middle_black_text">Nous mettons l’accent sur l'honnêteté, la confiance et la
                            coopération commune. Nous établissons des relations d’affaires sur la base d’une aide
                            commune (pay it forward).</span>
                        </p>                       
                    </div>
                    <div class="col-sm-3 grey-box">
                        <p class="middle_white_text"><i class="row">Nos inspirations</i><br>
                            <span class="middle_black_text">„Vouloir c’est pouvoir”. Nous apprécions
                            les succès de nos membres qui inspirent les autres à agir. Ils conseillent
                            et ils aident à définir une bonne direction dans le monde des affaires.</span>
                        </p>
                    </div>
                    <div class="col-sm-3 grey-box">
                        <p class="middle_white_text"><i class="row">Nos possibilités</i><br>
                            <span class="middle_black_text">l’Association européenne des praticiens de 
                            l’économie rend possible la coopération avec les institutions internationales.
                            Elle offre une aide en matière de contenu et financière.</span>
                        </p>
                    </div>
                    <div class="col-sm-3 grey-box">
                        <p class="middle_white_text"><i class="row">L’AEPE dans le monde des affaires</i><br>
                            <span class="middle_black_text">Nous agissons à plusieurs niveaux. Nous 
                            soutenons le processus de l’intégration économique des pays européens.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.whiteWrapper {
    background: none;
}

.carousel-control.right, .carousel-control.left {
    background-image: none;
}

.glyphicon-chevron-left::before, .glyphicon-chevron-right::before {
    color: red;    
}

.main-text {
  margin: 0 auto;
  padding-top: 10px;
}
.green_title {
  color: #5a7247;
  text-align: center;
  font-family: arial, Trebuchet, Tahoma, Arial, sans-serif;
  font-weight: bold;
}

.boxes {
  width: 100%;
  height: auto;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
}

.boxes .box {
  margin: 30px auto;
  box-sizing: border-box;
  display: inline;
  font-size: 18px;
}

.boxes .box .box-row {
  display: table-row;
  vertical-align: middle;
}
.grey-box {
  border: 5px white solid;
  background: #a9a9a9;
  min-height: 240px;
}   

.home {
  padding-top: 370px;
}

.homeBackground {
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("./../assets/yydffg.jpg");
}

@media (max-width: 768px) {
  .home {
    padding-top: 0;
  }

  .grey-box {
    min-height: auto;
  }

  .homeContainer {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .main-text {
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    padding-right: 10px;
    font-size: 15px;
  }
}
</style>