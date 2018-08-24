<template>
    <div class="container">
        <div class="column_67 ">
            <p class="title">Notre magazine</p>
            <div class="imageContainer">
                <img class="img_66" src="./../assets/publications.jpg">
            </div>
            <p>&nbsp</p>
            <p class="font_regular">
               <b> Bientôt, L’AEPE va introduire un nouveau magazine au marché belge, publié gratuitement.</b>
            </p><br>
            <p class="font_regular"> 
                Ce magazine se composera de quatre rubriques: les affaires, la science, la culture et le tourisme. On y retrouvera les thèmes concernant entre autres, l’échange du savoir et des expériences ou l’inspiration et la promotion des bonnes pratiques dans le monde des affaires.
            </p>
        </div>
        <div class="column_33" >
            <router-link to="/recommandees"><button class="button2">Publications recommandées</button></router-link>
            
            <p class="font_title"><b>  <span class="title"></span></b></p> 
            <hr>
            <img  class="img_22" src="./../assets/tools_of_titans400x600.png">
            <p class="font_regular"> 
                Les outils des titans contiennent les observations les plus intéressantes et des fragments de notes ...
            </p>
            <hr>
            <p>&nbsp</p>
            <p>&nbsp</p>
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


<style>
.button2{
    font-weight: bold;
    -webkit-transition: all .5s;
    line-height: 40px;
    color: white;
    background: #cd4128;
    width: 190px;
    text-align: center;
    line-height: 1.2;
    box-shadow: 1px 1px 5px rgba(0,0,0,.5),
                0px 0px 0px 1px rgba(0,0,0,.1);
    float: right;
}
.button2:hover{ 
    color: #DC4C46;
    cursor: pointer;
    background: white;
}



</style>