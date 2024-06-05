<template>
  <div>
    <div class="" style="max-width: 100%; font-size: 16px">
      <q-list bordered v-for="faqPart in faq" :key="faqPart.id">
        <q-expansion-item
          group="somegroup"
          icon="explore"
          :label="faqPart.question"
          header-class="bg-teal text-white"
          expand-icon-class="text-white"
          :caption="faqPart.caption"
        >
          <q-card>
            <q-card-section>
              {{ faqPart.answer }}
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator />
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          id: 1,
          question: "What is a tourist visa and how to get one?",
          answer:
            "A tourist visa is permission to enter another country for the purpose of tourism. It can be obtained through the embassy or consulate of the destination country by providing the necessary documents and paying a fee.",
          caption: "About the site",
        },
        {
          id: 2,
          question: "How to register on the site?",
          answer:
            'To register on the site, click on the "Registration" button in the menu and fill in the required fields.',
          caption: "About the site",
        },
        {
          id: 3,
          question: "What does the site offer?",
          answer:
            "Our website offers information about the best tourist destinations in Kazakhstan, travel tips.",
          caption: "About the site",
        },
        {
          id: 4,
          question: "How to contact support?",
          answer:
            "You can contact our support team by email support@kazTravel.com or by phone +7-(XXX)-XX-XX",
          caption: "About the site",
        },
        {
          id: 5,
          question: "What to do if the site does not work?",
          answer:
            "Try reloading the page, clearing your browser cache, or coming back later. If the problem persists, please contact our support team.",
          caption: "Technical question",
        },
      ],
    };
  },
};
</script>

<style></style>
