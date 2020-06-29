<template>
  <section class="Cart hero is-light">
    <div class="container">
      <h1 class="title my-4 is-capitalized is-size-1">Cart ({{ moviesAdded.length }})</h1>
    </div>
    <ul
      class="Cart__List columns is-full is-multiline is-centered"
      v-if="moviesAdded.length > 0"
    >
      <li
        class="Cart__Item column mx-5 my-3 hero is-light is-2"
        v-for="(movie, index) in moviesAdded"
        :key="index"
      >
        <router-link
          :to="{ name: 'Movie', params: { id: movie.id, name: encodeURI(movie.title.toLowerCase()) }}"
        >
          <MovieCard
            :details="movie"
          />
          <p class="Cart__Title mt-1 has-text-black is-size-7 is-uppercase">{{ movie.title }}</p>
        </router-link>
      </li>
    </ul>
    <p
      v-else
      class="pb-6 is-size-3"
    >
      No movies added yet!
      <br>
      <MovieSearch
        class="mt-4"
      />
    </p>
  </section>
</template>

<script>
import MovieSearch from '@/components/MovieSearch/MovieSearchComponent.vue'
import MovieCard from '@/components/MovieCard/MovieCardComponent.vue'

export default {
  name: 'Cart',
  components: {
    MovieCard,
    MovieSearch
  },
  computed: {
    moviesAdded () {
      return this.$store.state.movies
    }
  }
}
</script>

<style lang="scss" scoped>
.Cart {
}
</style>
