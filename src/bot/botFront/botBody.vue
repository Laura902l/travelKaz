<template>
  <div class="botBody">
    <div class="headerBot row" style="align-items: center">
      <q-avatar class="q-mr-lg">
        <img
          src="https://plus.unsplash.com/premium_photo-1682309512367-d835725f65f7?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar"
        />
      </q-avatar>
      <p>KazTravelBot</p>
    </div>
    <q-separator />
    <div class="chat">
      <p v-if="isText">Currently there are no messages...</p>
      <div v-if="isTextVisible">
        <q-chat-message label="Today" />
        <q-chat-message
          v-for="msg in message"
          :key="msg.id"
          :name="msg.name"
          :avatar="msg.avatar"
          :text="[msg.text]"
          :sent="msg.sent"
        />
      </div>
    </div>
    <q-separator />
    <div class="inputBot">
      <q-select
        filled
        round
        bottom-slots
        v-model="UserMsg"
        name="UserMsg"
        :options="options"
        label="Label"
        :dense="dense"
        :options-dense="denseOpts"
      >
        <template v-slot:append>
          <q-icon
            v-if="model !== ''"
            name="close"
            @click.stop.prevent="model = ''"
            class="cursor-pointer"
          />
        </template>
        <template v-slot:after>
          <q-btn @click="sendMsg" round dense flat icon="send" />
        </template>
      </q-select>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import botAnswerJson from "../botAnswer.json";
import api from "../../api";
import { Notify } from "quasar";
import axios from "axios";
import { data } from "autoprefixer";
console.log(botAnswerJson[0].registration.benefit);
export default {
  data() {
    return {
      model: ref(null),
      options: ["/start", "Для чего нужно регистрироваться?"],
      message: [],
      UserMsg: "",
      dataSet: "fff",
      dense: ref(false),
      denseOpts: ref(false),
      counterForUserMsg: 0,
      isText: true,
      isTextVisible: false,
    };
  },
  mounted() {
    this.fetchData();
    console.clear();
  },
  methods: {
    async fetchData() {
      try {
        const response = await api.getUserMsg();
        this.dataSet = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async sendMsg() {
      for (let index = 0; index < 1; index++) {
        this.counterForUserMsg++;
      }
      this.message.push({
        id: this.counterForUserMsg,
        text: this.UserMsg,
        sent: true,
        name: "Me",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s",
      });

      this.isText = false;
      this.isTextVisible = true;
      this.botAnswer();

      const data = {
        UserMsg: this.UserMsg,
      };

      try {
        const response = await api.bot(data);
        if (response.status === 200) {
          Notify.create("The message arrived successfully");
        } else if (response.status === 400) {
          Notify.create("There is a message");
        }
      } catch (error) {
        Notify.create("Error");
      }
    },

    botAnswer: function () {
      function generateBotAnswer(id, msg, text, avatar) {
        if (Array.isArray(msg)) {
          msg.push({
            id: id,
            text: text,
            sent: false,
            name: "Chat Bot",
            avatar: avatar,
          });
        } else {
          console.error("msg is not an array", msg);
        }
      }

      let userCheck = sessionStorage.getItem("user");
      for (let index = 0; index < 1; index++) {
        this.counterForUserMsg++;
      }

      if (this.UserMsg === botAnswerJson[0].introduction.start) {
        userCheck != null
          ? generateBotAnswer(
              this.counterForUserMsg,
              this.message,
              botAnswerJson[0].introduction.startCorrectAnswer,
              "https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
            )
          : generateBotAnswer(
              this.counterForUserMsg,
              this.message,
              botAnswerJson[0].introduction.startLoginAnswer,
              "https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
            );
      }

      if (this.UserMsg === botAnswerJson[0].registration.benefit) {
        generateBotAnswer(
          this.counterForUserMsg,
          this.message,
          botAnswerJson[0].registration.benefitAnwer,
          "https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
        );
      }
    },
  },
};
</script>

<style>
.botBody {
  width: 50vh;
  background-color: white;
  height: 550px;
  margin-bottom: 75px;
  box-sizing: border-box;
  border: solid #000 1px;
  /* border-radius: 15px; */
}

.chat {
  height: 79%;
  overflow-y: scroll;
}

.botBody {
  overflow-y: scroll;
}

.headerBot {
  height: 10%;
}
</style>
