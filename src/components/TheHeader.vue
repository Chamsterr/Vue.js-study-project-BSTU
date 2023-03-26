<template>
  <header class="header">
    <div class="background"></div>
    <div class="wrapper">
      <section class="contacts">
        <div>
          <!-- как им сделать разные ссылки?? -->
          <a class="language" v-for="language in languages" :key="language">
            {{ language.name }}
          </a>
        </div>
        <a href="tel:8 (800) 123-45-67" class="phoneNumber">
          {{ phone }}
        </a>
        <a href="mailto:sales@log.ru" class="email">
          {{ email }}
        </a>
      </section>
      <section>
        <div class="menu-items">
          <div class="flexstarItems">
            <img src="../images/logo.svg" class="logo" />
            <img
              src="../images/placeholder.svg"
              class="placemark"
              :class="{ 'placemark-hover': isHovered }"
            />
            <a
              href="#"
              @mouseover="isHovered = true"
              @mouseleave="isHovered = false"
              >Наши офисы</a
            >
          </div>
          <div class="flexendItems">
            <a
              :href="item.id"
              class="navigation"
              v-for="item in navigation"
              :key="item"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </section>
    </div>
  </header>
</template>

<script src="../scripts/TheHeader"></script>

<style src="../styles/TheHeader.css"></style>
