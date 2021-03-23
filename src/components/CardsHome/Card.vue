<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="280px"
      :src="eventImage"
    ></v-img>
    <v-card-text>
      <p color="deep-purple accent-4">
        {{ formatDate(eventStart) }}
      </p>
      <p class="display-1 text--primary">{{ eventName }}</p>

      <div class="text--primary">{{ eventDescription }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4"> Learn More </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["name", "description", "image", "quota", "eventStart"],
  data() {
    return {
      eventImage: this.image,
      eventName: this.name,
      eventDescription: this.description,
      eventEventStart: this.eventStart,
    };
  },
  methods: {
    formatDate(date) {
      let localDate = new Date(date);

      return localDate.toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta",
        month: "2-digit",
        year: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
};
</script>