<template>
  <div class="MovieCard">
    <div class="MovieCard__Poster card-image">
      <figure class="image">
        <img
          :src="`http://image.tmdb.org/t/p/w500/${details.poster_path}`"
          :alt="`${details.title} poster`"
        >
      </figure>
    </div>
    <div
      class="MovieCard__Details card-content"
      v-if="showActions"
    >
      <MovieActions
        :movie="details"
      />
    </div>
  </div>
</template>

<script>
import MovieActions from '@/components/MovieActions/MovieActionsComponent.vue'

export default {
  name: 'MovieCard',
  components: {
    MovieActions
  },
  props: {
    details: {
      type: Object,
      required: true
    },
    showActions: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.MovieCard {
  overflow: hidden;
  position: relative;
  &:hover {
    .MovieCard__Poster {
      // opacity: 0.5;
    }
    .MovieCard__Details {
      bottom: 0;
    }
  }
  &__Poster {
    transition: opacity 0.3s cubic-bezier(0.7, 0, 0.3, 1);
    img {
      max-height: 300px;
      width: auto;
      margin: 0 auto;
    }
  }
  &__Overview {
    height: 38px;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    margin: 0;
  }
  &__Details {
    position: absolute;
    bottom: -60px;
    transition: bottom 0.3s cubic-bezier(0.7, 0, 0.3, 1);
    width: 100%;
  }
}
</style>
