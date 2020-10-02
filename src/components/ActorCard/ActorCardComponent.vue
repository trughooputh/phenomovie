<template>
  <div class="ActorCard card mx-1">
    <div class="ActorCard__Photo card-image has-background-light">
      <figure
        class="image"
        v-if="actor.profile_path"
      >
        <img
          v-if="actor.profile_path && actor.name"
          :src="`http://image.tmdb.org/t/p/w500/${actor.profile_path}`"
          :alt="`${actor.name} poster`"
        >
      </figure>
    </div>
    <div class="ActorCard__Details card-content">
      <span
        class="is-size-6"
      >
        {{ actor.name }}
      </span>
      <br>
      <span
        class="is-size-7"
      >
        {{ actor.character }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActorCard',
  props: {
    actor: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ActorCard {
  width: 160px;
  &__Photo {
    min-height: 160px;
    img {
      max-height: 160px;
      object-fit: cover;
    }
  }
  &__Details {
    padding: 1rem 0.8rem;
    line-height: 1.1rem;
    min-height: 85px;
  }
}
</style>
