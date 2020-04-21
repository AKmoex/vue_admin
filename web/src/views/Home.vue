<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/home1.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/home1.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/home1.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/home1.jpeg" />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!--swiper end-->
    <div class="nav-icons mt-3 bg-white text-center pt-3 text-grey-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-4" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex jc-center ai-center">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!--nav end-->
    <m-list-card icon="menu1" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2" v-for="(news,i) in category.newsList" :key="i">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span>{{news.date}}</span>
        </div>
      </template>
    </m-list-card>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/variables";
.pagination-home {
  .swiper-pagination-bullet {
    border-radius: 0.153846rem /* 2/13 */;
    opacity: 1;
    background-color: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>

<script>
export default {
  autoplay: true,
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".pagination-home",
          clickable: true
        },
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true
      },
      newsCats: [
        {
          name: "热门",
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: "公告",
            title: "6月20日全服不停机更新",
            date: "06/24"
          }))
        },
        {
          name: "新闻",
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: "公告",
            title: "6月20日全服不停机更新",
            date: "06/24"
          }))
        },
        {
          name: "介绍",
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: "公告",
            title: "6月20日全服不停机更新",
            date: "06/24"
          }))
        },
        {
          name: "活动",
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: "公告",
            title: "6月20日全服不停机更新",
            date: "06/24"
          }))
        },
        {
          name: "赛事",
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: "公告",
            title: "6月20日全服不停机更新",
            date: "06/24"
          }))
        }
      ]
    };
  }
};
</script>
