<template>
    <div class="navigation">
<div >
        <div id="div2">
            <div style="">
                    <button type="button" class=" navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
            <router-link to="/"><div id="logo"></div></router-link>
                
                <ul id="navbar" class="menu_element collapse">
                    <li class="a hideOnMobile"><router-link to="/">
                        <img src="./../assets/home_button.png"/></router-link>
                    </li>
                    <li class="a"><router-link to="/qui_sommes_nous">Qui sommes-nous?</router-link></li>
                    <li class="a"><router-link to="/adhesion">Adhésion</router-link></li>
                    <li class="a"><router-link to="/actualites">Actualités</router-link></li>
                    <li class="a"><router-link to="/publications">Publications</router-link></li>
                    <li class="a"><router-link to="/carriere">Formation et carrière</router-link></li>
                    <li class="a"><router-link to="/club">Club</router-link></li>
                    <li class="a"><router-link to="/contact">Contact</router-link></li>
                </ul>
        </div>
        <div id="div2back"></div>
    </div>
</div>
</template>

<style>

.navigation {
    z-index: 1000;
    position: absolute;
    left: 0;
    right: 0;
}


#div2 {
    background: white;
    height: 160px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    position: relative;
    opacity: 0.8;
    z-index: 999;
}

#div2back {
    height: 160px;
    background: url(/dist/home_feature.jpg);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
}

#logo{
    height: 120px;
    background: url('./../assets/logo_tranp2.png');
    background-repeat: no-repeat;
    background-position: center; 
    
}

.icon-bar {
    background: #666666;
}

.navbar-toggle {
    border: 1px solid #666666;
}

.navigation2 {
    text-align: center;
    background-image: url('./../assets/csfgedgt.png');
    background-position: center;
    height: 160px;
    padding-top: 120px;
}


.menu_element > li {
    display: inline;
    text-decoration: none;
    padding: 3px;
    margin: 4px;
    font-size: 16px;
    text-align: center;
    color:#666666;
    font-family: Trebuchet, Tahoma, Arial, sans-serif;
    
}

@media (min-width: 768px) {
    .collapse {
       display: block;
    }
}

@media (max-width: 768px) {
    #div2 {
        height: 50px;
    }

    #div2back {
        height: 50px;
    }
    
    .hideOnMobile {
        display: none;
    }
}

@media (max-width: 768px) {
    .navigation {
        height: 50px;
        padding: 0;
        z-index: 1200;
        top: 0;
        right: 0;
        left: 0;
        position: fixed;
        -webkit-animation: cssAnimation 0s ease-in 5s forwards;
    }
    
    .menu_element > li, .menu_element > li {
        display: block;
    }

    .home {
        float: left;
        margin: 8px;
    }
    .navigation {
        text-align: center;
        background-image: url('./../assets/smaller_grey.png');
        background-position: center;
        height: 50px;
    }

}

@media (max-width: 1024px) {
    .menu_element > li {
        padding-left: 0;
        padding-right: 0;
    }
}

</style>