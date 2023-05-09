<script setup>
import CardItem from "./components/CardItem.vue";
import { ref } from "vue";

const searchRoom = ref("");
</script>

<template>
  <div class="container wrapper">
    <div class="container">
      <div class="serch__block">
        <div class="serch__block_icon">
          <img src="@/assets/img/serch.png" alt="" />
        </div>
        <div class="serch__block_text">
          <input
            type="search"
            placeholder="Введите ЖК / корпус / № квартиры / № паркинга"
            v-model="searchRoom"
          />
        </div>
      </div>
    </div>

    <CardItem :searchRoom="searchRoom" />
  </div>
</template>

<style scoped>
.wrapper {
  margin-top: 100px;
}
.serch__block {
  width: 100%;
  border: 1px solid #c4c4c4;
  display: flex;
}
.serch__block_icon {
  margin: 12px 34px;
}
.serch__block_text {
  display: flex;
}
.serch__block_text input {
  margin-left: 18px;
  border: none;
  width: 60vw;
  align-self: center;
  background: #f7f6f4;
}
</style>
