<script setup>
import Popper from "vue3-popper";
import { ref, watch } from "vue";
import data from "../data/data.json";

const houses = ref(data);
const searchInput = defineProps(["searchRoom"]);

watch(searchInput, () => {
  houses.value = data.filter(
    (search) =>
      search.number
        .toLowerCase()
        .includes(searchInput.searchRoom.toLowerCase()) ||
      search.name
        .toLowerCase()
        .includes(searchInput.searchRoom.toLowerCase()) ||
      search.frame.toLowerCase().includes(searchInput.searchRoom.toLowerCase())
  );
});

const isCheckAll = ref(false);
const checkAll = () => {
  isCheckAll.value = !isCheckAll.value;
};

const removeHomesList = () => {
  if (isCheckAll.value === true) {
    houses.value = "";
  }
};
</script>

<template>
  <div class="container">
    <div class="card__checkbox">
      <input
        type="checkbox"
        class="card__checkbox_input"
        id="Check"
        @click="checkAll()"
        v-model="isCheckAll"
      />
      <span class="card__checkbox_text">все</span>
      <button class="card__checkbox_btn" @click="removeHomesList">
        Удалить
        <img src="../assets/img/deletionBox.png" alt="" />
      </button>
    </div>
  </div>

  <div class="container card__info">
    <div class="row card__info-row" v-for="house in houses" :key="house.id">
      <div class="col card__info_block">
        <div class="container">
          <div class="row header-text">
            <div class="col-1"></div>
            <div class="col-3 card__sum">{{ house.price }}</div>

            <Popper
              offsetSkid="40"
              hover
              arrow
              class="col-3"
              :content="house.tooltype"
            >
              <div class="col-3">
                <img class="card__icon-room" :src="house.logo" alt="" />
              </div>
            </Popper>
            <div
              class="col-3 card__active-block"
              :class="
                house.persone === 'Уступка от юр. лица'
                  ? 'active-red'
                  : house.persone === 'Уступка от физ. лица'
                  ? 'active-blue'
                  : house.persone === 'Забронировано'
                  ? 'active-gray'
                  : 'active-silver'
              "
            >
              <span>{{ house.persone }}</span>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-1"></div>
            <div class="col-6">
              <p class="card__name">
                {{ house.name
                }}<span class="card__name sb-color">{{ house.frame }}</span>
              </p>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-1 `">
              <input
                class="card__checkbox_item"
                type="checkbox"
                :checked="isCheckAll"
              />
            </div>
            <div class="col-5 d-flex">
              <div class="card__num_block-1">
                <span class="card__num_text"> {{ house.number }}</span>
                <p class="card__num_text">{{ house.rooms }}</p>
              </div>
              <div class="card__num_block-2">
                <span class="card__num_text">{{ house.squaremeters }}</span>
                <p class="card__num_text">{{ house.floor }}</p>
              </div>
            </div>
            <div class="col-6 d-flex justify-content-end">
              <img :src="house.location" alt="" />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-1">
              <img class="mx-4" :src="house.location" alt="" />
            </div>
            <div class="col-5">
              <span class="card__local_text">{{ house.area }}</span>
              <span class="card__local_text">{{ house.adres }}</span>
            </div>
            <div class="col-5">
              <span class="card__data_text d-flex justify-content-end">
                {{ house.accept }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-3 {
  cursor: pointer;
}
:deep(.popper) {
  --popper-theme-background-color: rgba(68, 68, 68, 0.97);
  --popper-theme-background-color-hover: rgba(68, 68, 68, 0.97);
  --popper-theme-text-color: white;
  --popper-theme-border-width: 0px;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 32px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}

.card__checkbox {
  display: flex;
  align-items: center;
  margin-top: 29px;
  gap: 13px;
}
.card__checkbox_text {
  font-size: 13px;
  line-height: 20px;
  color: #000000;
}
.card__checkbox_input {
  width: 16px;
  height: 16px;
  border: 1px solid #c4c4c4;
}
.card__checkbox_input:checked {
  background: #fce66f;
}

.card__checkbox_btn {
  border: none;
  padding: 9px 13px;
  background: #e5e5e5;

  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #000000;
}
.card__checkbox_btn img {
  margin-left: 12px;
}
/*/////////////////////////////*/
.card__info {
  margin-top: 36px;
}

.card__info-row {
  display: flex;
  gap: 32px;
}
.card__info_block {
  padding: 25px 0;
  background-color: #fff;
  margin-bottom: 23px;
}
.card__sum {
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #ff0d29;
}
.card__active-block {
  margin-left: 100px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  padding: 6px 9px;
}
.card__active-block span {
  margin-left: 9px;
}
.active-red {
  position: relative;
  color: #dd4c5d;
  background: #ffe4e4;
}
.active-red::before {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  top: 12px;
  background: #dd4c5d;
}
.active-blue {
  position: relative;
  color: #0291c1;
  background: #d6f5ff;
}
.active-blue::before {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  top: 12px;
  background: #0291c1;
}
.active-gray {
  position: relative;
  color: #686868;
  background: #ededed;
}
.active-gray::before {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  top: 12px;
  background: #686868;
}
.active-silver {
  position: relative;
  color: #808080;
  background: #cccccc;
}
.active-silver::before {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  top: 12px;
  background: #808080;
}
.card__name {
  margin-bottom: 35px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
}
.sb-color {
  color: #808080;
}
.card__checkbox_item {
  width: 22px;
  height: 16px;
  border: 1px solid #c4c4c4;
}
.card__num_block-1 {
  height: 48px;
  padding-right: 28px;
  border-right: 1px solid #c4c4c4;
}
.card__num_block-2 {
  padding-left: 28px;
}
.card__num_text {
  font-size: 14px;
  line-height: 25px;
  color: #000000;
}
.card__local_text {
  font-size: 14px;
  line-height: 150%;
  color: #000000;
}
.card__data_text {
  font-size: 13px;
  line-height: 20px;
  color: #9b9b9b;
  margin-top: 17px;
}

@media (max-width: 768px) {
  .card__info-row {
    flex-direction: column;
  }
  .card__active-block {
    margin-left: 50px;

    display: flex;
    align-self: end;
  }
  .card__icon-room {
    cursor: pointer;
    width: 101.83px;
    height: 26px;
  }
  .card__sum {
    font-size: 14px;
  }
  .card__num_block-1 {
    padding-right: 5px;
  }
  .card__num_block-2 {
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>
