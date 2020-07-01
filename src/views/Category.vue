<template>
  <section class="Category hero is-light">
    <div class="container">
      <h1 class="title my-4 is-capitalized is-size-1">{{ decodeURI(title) }}</h1>
      <ul
        class="Category__List row columns is-multiline is-centered"
        id="Category__List"
        v-show="movies"
      >
        <li
          class="Category__Item column is-2 is-full-mobile"
          v-for="(movie, index) in movies"
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
    </div>
  </section>
</template>

<script>
import API from '../config/api/'
import MovieCard from '@/components/MovieCard/MovieCardComponent.vue'

export default {
  name: 'Category',
  components: {
    MovieCard
  },
  data () {
    return {
      title: null,
      movies: []
    }
  },
  mounted () {
    this.initLoadMovies()
  },
  methods: {
    initLoadMovies () {
      const categoryId = this.$route.params.id
      this.title = this.$route.params.name
      if (categoryId) {
        API.movies.byCategory(categoryId)
          .then((res) => {
            const movies = res.data.results
            this.movies = movies
          })
          .catch((error) => {
            console.log('error', error)
          })
      }
    },
    loadMore () {
      console.log('loadMore')
    }
  }
}
</script>
