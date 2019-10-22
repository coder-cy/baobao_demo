<template>
  <div>
      <textarea v-model="content" @keydown.enter.prevent="sendWeibo"></textarea>
      <button @click="sendWeibo" >send weibo</button>
      <ul>
          <li v-for="(weibo, i) in weiboList" :key="i">
              <h3>内容: {{weibo.content}}</h3>
              <h4>作者: {{weibo.author}}</h4>
              <h5>日期: {{weibo.dateTime | dateFilter}}</h5>
              <a @click="delectWeibo(i)">x</a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            content: "",
            weiboList: [],
            author: "宝宝",
            // sample: {
            //     content: "",
            //     author: "",
            //     dateTime: "",
            // },
        }
    },
    filters: {
        dateFilter(val) {
            const year = val.getFullYear();
            const month = val.getMonth() + 1;
            const date = val.getDate();
            const hour = val.getHours();
            const min = val.getMinutes();
            const sec = val.getSeconds();
            return `${year} - ${month} - ${date} ${hour}:${min}:${sec}`;
        }
    },
    methods: {
        sendWeibo() {
            if (this.content === "") {
                alert("请输入内容!");
                return;
            }
            const weibo = {
                content: this.content,
                author: this.author,
                dateTime: new Date(),
            };
            this.weiboList.push(weibo);
            this.content = "";
            console.log(this.weiboList)
        },
        delectWeibo(i){
            this.weiboList.splice(i,1)
        }
    }
}
</script>

<style>

</style>