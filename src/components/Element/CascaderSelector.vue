<template>
  <div class="cascader_selector">
    <div>
      <div class="lis" v-show="isOpen">
        <ul>
          <li @click="clsLis($event)" v-for="(item, i) in schoolInfo" :key="i">{{item.name}}</li>
        </ul>
        <div class="tri_icon"></div>
      </div>
      <div class="main" @click="isOpen=!isOpen;">
        <span class="fold_icon" :style="{transform: foldRotate}">^</span>
        <input v-model="myZone" type="text" placeholder="请选择" />
      </div>
    </div>
  </div>
</template>

<script>
import schoolInfo from "../../assets/school.json";

export default {
  name: "cascaderSelector",
  data() {
    return {
      myZone: "上海",
      isOpen: false,
      schoolInfo
    };
  },
  methods: {
    clsLis(e) {
      this.myZone = e.target.innerHTML;
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    foldRotate: function() {
      return this.isOpen ? "rotate(0deg)" : "rotate(-180deg)";
    }
  }
};
