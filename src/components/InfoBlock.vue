<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="infoBlock">
        <div class="services">
            <div class="region">
                <h2 class="serviceTitle" v-html="titles[index][langIndex]"></h2>
                <div class="serviceInfo" v-html="subtitles[index][langIndex]"></div>
                <button v-bind:class="{ 'hovered': isHoveredButton }" v-on:mouseover="isHoveredButton = true"
                    v-on:mouseout="isHoveredButton = false" class="serviceButton">
                    <a href="#КОМПАНИИ">{{ buttonText[langIndex] }}</a>
                </button>
                <img src="../images/Rectangle2.svg" alt="" class="serviceImg">
                <img :src="'../img/Rectangle' + index + '.svg'" alt="" class="serviceImg">

                <div class="serviceNext" v-bind:class="{ 'hoveredNext': isHoveredNext }" v-on:click="nextButton"
                    v-on:mouseover="isHoveredNext = true" v-on:mouseout="isHoveredNext = false" alt="">
                    <span>{{ nextArrowText[langIndex] }}</span><img src="../images/Sled.svg">
                </div>
                <div v-bind:class="{ 'hoveredPrev': isHoveredPreviuse }" v-on:click="previusButton"
                    v-on:mouseover="isHoveredPreviuse = true" v-on:mouseout="isHoveredPreviuse = false"
                    class="servicePrevius">
                    <span>{{ previusArrowText[langIndex] }}</span> <img src="../images/Next.svg">
                </div>
            </div>
        </div>

        <div class="greyBlock"></div>
        <div class="greyBlock"></div>
    </div>
    <div class="servicesDetails">
        <div class="services">
            <h2 id="УСЛУГИ">{{ serviceTitle[langIndex] }}</h2>
            <div class="servicesTiles">
                <div class="tile" v-for="item in services[index][langIndex]">
                    <img src="../images/tileSvg.svg" alt="">
                    <h5>{{ item }}</h5>
                </div>
            </div>
        </div>
    </div>

  <div class="aboutCompany">
    <div class="discription">
      <span></span>
      <h2 id="КОМПАНИИ" class="discriptionTitle">{{discriptionTitle[langIndex]}}</h2>
      <p class="discriptionText"> {{discriptionText[langIndex]}} </p>
    </div>

    <div class="greyArea"></div>

    <div id="УСЛУГИ" class="blocks">
      <div class="block1" v-bind:class="{'hoveredTile': isHoveredTile1}" v-on:mouseover="isHoveredTile1 = true"
      v-on:mouseout="isHoveredTile1 = false">
        <h3> {{blocks[langIndex][0][0]}} </h3>
        <h4> {{blocks[langIndex][0][1]}} </h4>
        <h5> {{blocks[langIndex][0][2]}} </h5>
      </div>
      <div class="block2" v-bind:class="{'hoveredTile': isHoveredTile2}" v-on:mouseover="isHoveredTile2 = true"
           v-on:mouseout="isHoveredTile2 = false">
        <h3> {{blocks[langIndex][1][0]}} </h3>
        <h4> {{blocks[langIndex][1][1]}} </h4>
        <h5> {{blocks[langIndex][1][2]}} </h5>
      </div>
      <div class="block3" v-bind:style="{ backgroundImage: 'url(' + imageUrl + ')' }"
           v-bind:class="{'hoveredTile': isHoveredTile3}" v-on:mouseover="isHoveredTile3 = true"
           v-on:mouseout="isHoveredTile3 = false"> </div>
      <div class="block4" v-bind:style="{ backgroundImage: 'url(' + imageUrl + ')' }"
           v-bind:class="{'hoveredTile': isHoveredTile4}" v-on:mouseover="isHoveredTile4 = true"
           v-on:mouseout="isHoveredTile4 = false"> </div>
      <div class="block5" v-bind:class="{'hoveredTile': isHoveredTile5}" v-on:mouseover="isHoveredTile5 = true"
           v-on:mouseout="isHoveredTile5 = false">
        <h3> {{blocks[langIndex][2][0]}} </h3>
        <h4> {{blocks[langIndex][2][1]}} </h4>
        <h5> {{blocks[langIndex][2][2]}} </h5>
      </div>
    </div>
  </div>

</template>
  
<script src="../scripts/InfoBlock.js"></script>
  
<style src="../styles/InfoBlock.css"></style>