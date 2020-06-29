<template>
  <section class="Movie hero is-default is-bold is-light">
    <div class="hero-body pb-0">
      <div class="container has-text-left">
        <div class="columns">
          <MovieCard
            class="column is-4"
            :details="movie"
            :show-actions="false"
          />
          <MovieDetails
            class="column is-5"
            :movie="movie"
          />
          <MovieActions
            class="column is-1"
            :movie="movie"
          />
        </div>
      </div>
    </div>
    <div class="hero-body">
      <div class="container has-text-left">
        <div class="columns">
          <section class="Movie__Cast has-text-weight-medium column is-full">
            <h2 class="mb-2 is-size-5">Cast ({{cast.length}})</h2>
            <ul class="is-flex">
              <li
                v-for="(actor, index) in cast"
                :key="index"
              >
                <ActorCard
                  :actor="actor"
                />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import API from '../config/api/'

import MovieCard from '@/components/MovieCard/MovieCardComponent.vue'
import MovieDetails from '@/components/MovieDetails/MovieDetailsComponent.vue'
import MovieActions from '@/components/MovieActions/MovieActionsComponent.vue'
import ActorCard from '@/components/ActorCard/ActorCardComponent.vue'

export default {
  name: 'Movie',
  components: {
    MovieCard,
    MovieDetails,
    MovieActions,
    ActorCard
  },
  data () {
    return {
      movie: {},
      cast: [],
      crew: []
    }
  },
  created () {
    const movieId = this.$route.params.id
    this.title = this.$route.params.name
    if (movieId) {
      API.movie.details(movieId)
        .then((res) => {
          this.movie = res.data
          console.log(this.movie)
        })
        .catch((error) => {
          console.log('error', error)
        })
      API.movie.cast(movieId)
        .then((res) => {
          this.cast = res.data.cast
          this.crew = res.data.crew
        })
        .catch((error) => {
          console.log('error', error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.Movie {
  &__Cast {
    overflow-x: scroll;
  }
}
</style>
