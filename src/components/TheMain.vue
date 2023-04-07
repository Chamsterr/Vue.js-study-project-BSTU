<template>
  <main class="main">
    <NewImageCarousel :images="images">
      <div class="wrapper2">
        <div class="mainTitle">
          <h1>{{ title[langIndex] }}</h1>
          <h4>
            {{ subtitle[langIndex] }}
          </h4>
        </div>
      </div>
    </NewImageCarousel>
    <InfoBlock :titles="titles" :subtitles="subtitles" :serviceTitle="serviceTitle" :discriptionTitle="discriptionTitle" :discriptionText="discriptionText" :blocks="blocks"></InfoBlock>

  </main>
</template>

<script src="../scripts/TheMain"></script>

<style src="../styles/TheMain.css"></style>