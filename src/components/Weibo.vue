<template>
  <div class="weibo">
    <emoji/>
      <div class="send_weibo">
        <div class="title_area">
          <span>有什么新鲜事想告诉大家?</span>
          <span>{{'广告'}}</span>
        </div>
        <div class="content_area">
          <textarea class="text" v-model="weiboMsg" @keydown.enter.prevent="sendWeibo"></textarea>
        </div>
        <div class="kind_area">
          <ul class='kinds'>
            <li v-for="(item, i) in kinds" :key="i">
              <a class="kind_icon"></a><span class="kind_name">{{item.name}}</span>
            </li>
            <li>
              <span>
                ···
              </span>
            </li>
            <li>
              <span>
                公开v
              </span>
            </li>
            <li>
              <button :style="{backgroundColor: loading?'#bbb':'#f50'}" @click="sendWeibo">发布</button>
            </li>
          </ul>

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
      <div class="user_page">
        <ul class="content">
          <li v-show='loading'>
            loading...
          </li>
          <li v-for="(item, i) in weiboList" :key="i">
            <h4><img src="../assets/head.jpg">{{item.name}}：</h4>
            <div class='weibo_value'>{{item.value}}</div>
            <h6>发布时间：{{item.time | dateFilter}}
             <a @click="delectWeibo(i)">x</a>
            </h6>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import emoji from './Emoji';
export default {
    name: 'weibo',
    components: {
      emoji
    },
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
            // {
            //   url: 'url(../assets/icon.png)',
            //   name: '直播'
            // },
            // {
            //   url: 'url(../assets/icon.png)',
            //   name: '表情'
            // }
          ],
          weiboMsg: '',
          weiboList: [],
          weiboUser: '兔兔',
          loading: false
        }
    },
    methods: {
      sendWeibo(){
        if(this.weiboMsg === '' || this.loading){
          return
        }
        this.loading = true;
        const weiboMsgBuffer = {
          value: this.weiboMsg,
          name: this.weiboUser,
          time: new Date()
        };
        this.weiboMsg = '';
        setTimeout(() => {
          this.loading = false;
          this.weiboList.unshift(weiboMsgBuffer);
        }, 2000);
      },
      delectWeibo(i){
        this.weiboList.splice(i, 1);
      }
    },
    filters: {
      dateFilter(val){
        const year = val.getFullYear();
        const month = val.getMonth() + 1;
        const date = val.getDate();
        const hour = val.getHours();
        const min = val.getMinutes();
        const sec = val.getSeconds();
        return `${year}/${month}/${date}  ${hour}:${min}:${sec}`;
      }
    }
}
</script>

<style scoped>
  .weibo>div{
    margin: 0 auto;
    width: 500px;
    min-height: 0px;
    background: #eee;
    padding: 10px;
    box-sizing: content-box;
    font-size: 16px;
  }
  .weibo>.user_page{
    margin-top: 5px;
  }
  .content{
    width: 100%;
    min-height: 0px;
    background: #fff;
  }
  h5{
    margin: 0;
    color: #f50;
  }
  .weibo_value{
    background: #eee;
  }
  h6{
    margin: 0;
    color: #bbb;
  }
  .title_area{
    display: flex;
    justify-content: space-between;
    color: #f50;
  }
  .text{
    width: 100%;
    min-height: 100px;
    background: #fff;
    resize: none;
  }
  img{
    width: 26px;
    margin-right: 2px;
    border-radius: 50%;
  }
  .kind_area{
    height: 28px;
  }
  .kinds{
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
  ul{
    padding: 0;
  }
  .content{
    padding: 5px;
    max-height: 300px;
    overflow: auto;
  }
  .content>li{
    /* margin-top: 20px; */
    text-align: left;
    word-wrap: break-word;
    margin-bottom: 5px;
  }
  .content a{
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 14px;
    font-size: 1em;
    text-align: center;
    color: #fff;
    background:#f50;
    border: 2px #f50 solid;
    border-radius: 50%;
    user-select: none;
  }
  li{
    position: relative;
    list-style: none;
    cursor: pointer;
  }
  .kinds>li{
    margin: 5px;
  }
  .kinds>li:hover{
      color: #f50;
  }
  .kind_icon{
    position: absolute;
    top: 2px;
    left: -2px;
    height: 1em;
    width: 1em;
    background-image: url('../assets/icon.png');
    background-size: cover;
  }
  .kind_name{
    margin-left: 1em;
  }
  .kind_area button{
    width: 4em;
    line-height: 1em;
    height: 22px;
    background: #f50;
    border: none;
    border-radius: 2px;
    color: #fff;
  }
  .layer_menu_list{
    position: absolute;
  }
</style>