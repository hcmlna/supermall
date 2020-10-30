<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        class="check-button"
        @click.native="checkClick"
      ></check-button>
      <span>全选</span>
    </div>

    <div class="price">合计:{{ totalPrice }}</div>

    <div class="calculate" @click="clickToCal">去计算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      return (
        this.checkLength !== 0 &&
        this.$store.state.cartList.length === this.checkLength
      );
    },
  },
  methods: {
    checkClick(){
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else{
         this.$store.state.cartList.forEach(item => item.checked = true)
      }
    },
    clickToCal(){
      if(this.checkLength === 0){
        this.$toast.show("至少选择一个商品")
      }else{
        this.$toast.show("去计算喽～～")
      }
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  align-items: center;

  height: 40px;
  background-color: #eee;
  font-size: 14px;
}

.check-content {
  /* height: 100%; */
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.check-button {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.price {
  margin-left: 20px;
}

.calculate {
  width: 90px;
  height: 100%;
  line-height: 40px;
  margin-left: auto;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>
