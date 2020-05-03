<template>
  <m-card :icon="icon" :title="title">
    <div class="nav jc-betwwen">
      <div
        class="nav-item"
        :class="{ active: i === active }"
        v-for="(category, i) in categories"
        :key="i"
        @click="$refs.list.swiper.swiperTo(i)"
      >
        <div class="nav-link">{{ category.name }}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper
        ref="list"
        @slide-change="() => (active = $refs.list.swiper.realIndex)"
      >
        <swiper-slide v-for="(category, i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>
