<template>
    <div class="navigation">
        <div id="div2">
            <div class="navbar">
                <div class="navbar-header">
                    <button type="button" class=" navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link to="/">
                        <img id="logo" src="./../assets/logo_tranp2.png"/>
                    </router-link>
                </div>
                <div id="navbar" class="navbar-collapse collapse" aria-expanded="false">
                    <ul id="navbar" class="menu_element">
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
            </div>
        </div>
        <div id="div1"></div>
    </div>
</template>

<style>
#div1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 530px;
  background: url("./../assets/home_feature.jpg");
  background-position: center;
  z-index: 800;
}

.navigation {
  position: absolute;
  top: 0;
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

.icon-bar {
  background: #666666;
}

.navbar-toggle {
  border: 1px solid #666666;
}

.menu_element > li {
  display: inline;
  text-decoration: none;
  padding: 3px;
  margin: 4px;
  font-size: 16px;
  text-align: center;
  color: #666666;
  font-family: Trebuchet, Tahoma, Arial, sans-serif;
}

@media (min-width: 768px) {
  .collapse {
    display: block;
  }

  .navbar-header {
    float: none;
  }
}

@media (max-width: 768px) {
  #div2 {
    height: initial;
  }

  #div2back {
    height: 50px;
  }

  #logo {
    height: 50px;
    float: left;
    margin-left: 20px;
  }

  .navigation {
    padding: 0;
    z-index: 1200;
    top: 0;
    right: 0;
    left: 0;
    -webkit-animation: cssAnimation 0s ease-in 5s forwards;
    text-align: center;
    background-position: center;
    position: static;
  }

  .navbar-collapse {
    padding: 0;
  }

  .menu_element > li,
  .menu_element > li {
    display: block;
  }

  .home {
    float: left;
    margin: 8px;
  }
}

@media (max-width: 1024px) {
  .menu_element > li {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>

<script>
export default {
  watch: {
    $route(to, from) {
      if (to.path !== "/") {
        $(".whiteWrapper").css("background", "white");
      } else {
        $(".whiteWrapper").css("background", "none");
      }
    }
  }
};
</script>