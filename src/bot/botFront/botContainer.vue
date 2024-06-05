<template>
  <div class="botContainer fixed-bottom-right">
    <div class="botBtn">
      <q-btn
        icon="send"
        class="botIcon q-mb-md q-mr-md"
        rounded
        size="18px"
        color="red"
        @click="botBtnClick"
      />
    </div>
    <div class="fixed-bottom-right">
      <botBody v-if="chatVisible" />
    </div>
  </div>
</template>

<script>
import { Notify } from "quasar";
import botBody from "./botBody.vue";
export default {
  components: {
    botBody,
  },
  data() {
    return {
      message: "Batyr",
      chatVisible: false,
      counter: 0,
    };
  },

  methods: {
    botBtnClick() {
      this.counter++;
      if (this.counter % 2 !== 0) {
        this.chatVisible = true;
      } else {
        this.chatVisible = false;
      }
    },
  },
};
</script>

<style>
:root {
  --botIconSize: 50px;
}

.botBtn {
  position: relative;
  z-index: 1;
}
.botIcon {
  height: var(--botIconSize);
  width: var(--botIconSize);
  cursor: pointer;
  text-align: center;
}
</style>
