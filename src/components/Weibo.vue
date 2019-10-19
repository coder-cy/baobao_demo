<template>
  <div class="weibo">
      <div class="send_weibo">
        <div class="title_area">
          <span>有什么新鲜事想告诉大家?</span>
          <span>{{'广告'}}</span>
        </div>
        <div class="content_area">
          <input type="text">
        </div>
        <div class="kind_area">
          <ul class='kinds'>
            <li v-for="(item, i) in kinds" :key="i">
              <a :style="{backgroundImage: item.url}"></a><span>{{item.name}}</span>
            </li>
          </ul>
          <span>
            ...
          </span>
          <span>
            公开v
          </span>
          <button>发布</button>
          <div class="layer_menu_list">
            <ul>
              <li>

              </li>
            </ul>
          </div>
          <div class="layer_menu_list">
            <ul>
              <li>

              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'weibo',
    data() {
        return {
          kinds: [
            {
              url: 'url(../assets/icon.png)',
              name: '表情'
            },
            {
              url: 'url(../assets/icon.png)',
              name: '图片'
            },
            {
              url: 'url(../assets/icon.png)',
              name: '视频'
            },
            {
              url: 'url(../assets/icon.png)',
              name: '话题'
            },
            {
              url: 'url(../assets/icon.png)',
              name: '头条文章'
            },
            {
              url: 'url(../assets/icon.png)',
              name: '直播'
            },
            {
              url: 'url(../assets/icon.png)',
              name: '表情'
            }
          ]
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
  .weibo>.send_weibo{
    margin: 0 auto;
    width: 500px;
    min-height: 200px;
    background: #eee;
    padding: 10px;
    box-sizing: content-box;
  }
  .title_area{
    display: flex;
    justify-content: space-between;
    color: #f50;
  }
  .content_area>input{
    width: 100%;
    min-height: 100px;
  }
  li{
    list-style: none;
  }
  li>a{
    display: inline-block;
    height: 1em;
    width: 1em;
    /* background-image: url('../assets/icon.png'); */
    background-size: cover;
  }
</style>