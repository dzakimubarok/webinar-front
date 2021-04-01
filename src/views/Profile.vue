<template>
  <div>LOGOUT</div>
</template>
 
<script>
export default {
  data: () => ({
    user: null,
    result: null,
    errors: null,
  }),
  mounted: function () {
    this.user = this.$store.state.user;
  },
};
</script>