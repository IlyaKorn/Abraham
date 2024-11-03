<template>
  <div class="card">
    <div class="card__user user">
      <div class="user__information">
        <div class="user__name">
          <span class="user__title">Name: </span>
          <span class="user__name-value">{{ getName }}</span>
        </div>

        <div class="user__email">
          <span class="user__title user__title">Email: </span>
          <a
            :href="`mailto:${content.email}`"
            class="user__email-value"
          >{{ content.email }}</a>
        </div>
      </div>

      <div class="user__image">
        <img
          :src="content.picture.medium"
          alt="User photo"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCard',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    getName() {
      return `${this.content.name.title} ${this.content.name.first} ${this.content.name.last}`;
    },
  },
};
</script>

<style lang="css" scoped>
.card {
  border-radius: 4px;
  padding: 8px;
  background-color: rgba(255, 192, 203, 0.3);
  min-width: 300px;
  width: 100%;
}
.card:nth-child(odd) {
  background-color: rgba(95, 158, 160, 0.3);
}
.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  font-size: 20px;
}
.user__information {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}
.user__name,
.user__email {
  white-space: nowrap;
}
.user__title {
  font-weight: bold;
}
.user__email-value {
  color: black;
  transition: all 0.3s ease-in-out;
}
.user__email-value:hover {
  opacity: 0.5
}
</style>
