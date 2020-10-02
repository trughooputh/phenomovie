<template>
  <section class="Home hero is-light">
    <div class="column is-12 mb-2">
      <h1 class="is-size-1">Search a movie</h1>
      <MovieSearch
        @update:search="updateSearch"
      />
    </div>
    <Loader
      v-if="isLoading"
    />
    <div
      v-else
      class="column is-full mb-5"
    >
      <Slider
        v-if="Movies.length > 0"
        :items="Movies"
      />
      <p
        v-else
        class="is-size-2"
      >
        <i class="fa fa-frown mr-3" aria-hidden="true"></i>
        <span class="h2">No results...</span>
      </p>
    </div>
  </section>
</template>

<script>
import MovieSearch from '@/components/MovieSearch/MovieSearchComponent.vue'
import Slider from '@/components/Slider/SliderComponent.vue'
import Loader from '@/components/Loader/LoaderComponent.vue'

export default {
  name: 'Home',
  components: {
    MovieSearch,
    Slider,
    Loader
  },
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    Movies () {
      return this.$store.state.movies
    }
  },
  methods: {
    updateSearch (newSearch) {
      this.isLoading = true
      this.$store.dispatch('searchMovies', newSearch)
        .then(() => { this.isLoading = false })
    }
  }
}
</script>

<style lang="scss" scoped>
.Home {
  &__Results {
    li {
      min-height: 300px;
      font-weight: bold;
      background-size: cover;
      justify-content: center;
    }
  }
  h3 {
    text-shadow: 0px 2px 6px #000;
  }
}

</style>
