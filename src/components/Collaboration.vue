<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="collaborationInfo col q-ml-md">
      <div
        class="wrapperCollaborationInfo relative-position"
        style="max-width: 75%"
      >
        <form action="/send-email">
          <q-input v-model="email" class="q-pt-md" label="Mail" />
          <q-input v-model="phone" class="q-pt-md" label="Phone number" />
          <q-select
            v-model="collab"
            class="q-py-md"
            :options="options"
            label="Type of cooperation"
          />
          <q-btn
            type="submit"
            class="bg-black"
            color="white"
            label="Send a message"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  setup() {
    const $q = useQuasar();
    const email = ref("");
    const phone = ref("");
    const collab = ref(null);
    const options = ref([
      "Employment contract",
      "Civil law agreement",
      "Freelance",
      "Individual entrepreneurship",
      "Outsourcing",
    ]);

    function collabBtn() {
      if (!email.value || !phone.value || !collab.value) {
        $q.notify({
          message: "Submission error: You must fill in all fields",
          color: "red",
        });
      } else {
        $q.notify({
          message: "Data sent successfully!",
          color: "green",
        });
      }
    }

    return {
      email,
      phone,
      collab,
      options,
      collabBtn,
    };
  },
};
</script>
