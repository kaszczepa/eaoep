<template>
    <div class="container">
        <p class="title">Notre magazine</p>
        <div class="row">
            <div class="col-sm-7">
                <div>
                    <img src="./../assets/publications.jpg" style="width:100%;">
                </div>
            </div>
            <div class="col-sm-5">
                <div class="col-md-8 col-md-offset-4 col-sm-10 col-sm-offset-2">
                    <router-link to="/recommandees"><button class="button2">Publications recommandées</button></router-link>
                    <img src="./../assets/tools_of_titans400x600.png" width="100%"  >
                    <p class="font_regular"  > 
                        Les outils des titans contiennent les observations les plus intéressantes et des fragments de notes ...
                    </p>
                </div>
            </div>
            <div class="col-sm-12">
                <p class="font_regular">
                    <b> Bientôt, L’AEPE va introduire un nouveau magazine au marché belge, publié gratuitement.</b>
                </p>
                <br>
                <p class="font_regular"> 
                    Ce magazine se composera de quatre rubriques: les affaires, la science, la culture et le tourisme. On y retrouvera les thèmes concernant entre autres, l’échange du savoir et des expériences ou l’inspiration et la promotion des bonnes pratiques dans le monde des affaires.
                </p>
            </div>
        </div>
    </div>
</template>


<style>

.column_67 {
    width: 67%;
    padding: 10px;
    float: left;
}

.column_33 {
    width: 22%;
    float: left;
    padding: 10px;
    border-left: 0.5px solid;
    margin: 120px 10px 40px 10px;
    background: transparent;
}
.img_22 {
    width: 86%;
    float: none;
    margin: 0 auto;
}
.column_container {
        margin: 0px;
        padding: 10px;
        width: 100%;
    }
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
}
.button2:hover{ 
    color: #DC4C46;
    cursor: pointer;
    background: white;
}

@media (max-width: 994px) {
.column_67, .column_33 {
    width: 100%;
    padding: 10px;
}

.column_33 {
    width: 35%;
    padding: 10px;
    border:none;
    margin: 120px 10px 40px 10px;
    background: transparent;
    display:inline;
}
}

</style>