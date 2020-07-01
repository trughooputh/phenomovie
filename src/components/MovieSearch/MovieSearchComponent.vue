<template>
  <div class="MovieSearch dropdown is-active column is-half is-full-mobile is-offset-one-quarter">
    <div class="dropdown-trigger column is-full pb-0">
        <div class="field">
            <p class="control is-expanded has-icons-right">
                <input
                  type="text"
                  placeholder="Search movie"
                  class="input is-large"
                  v-model="search"
                  @input="searchMovie()"
                />
                <span
                  class="icon is-small is-right"
                  v-show="results.length === 0"
                >
                  <i class="fas fa-search"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  @click="clearResults()"
                  v-show="results.length > 0"
                >
                  <i class="fas fa-times"></i>
                </span>
            </p>
        </div>
    </div>
    <div
      class="dropdown-menu column is-full pt-0"
      id="dropdown-menu"
      role="menu"
      v-if="results.length > 0"
    >
        <div class="dropdown-content has-text-left">
          <router-link
            class="MovieSearch__Item is-size-6 has-text-grey pl-2 is-full column pr-1 py-0"
            v-for="(result, index) in results.slice(0, 10)"
            :key="index"
            :to="{ name: 'Movie', params: { id: result.id, name: encodeURI(result.title.toLowerCase()) }}"
            v-on:click.native="clearResults()"
          >
            <figure class="is-flex is-vcentered">
              <img
                :src="`http://image.tmdb.org/t/p/w500/${result.poster_path}`"
                :alt="`${result.title} poster`"
                v-if="result.poster_path"
              >
              <figcaption
                class="MovieSearch__Title ml-2"
              >
                {{ result.title }}
              </figcaption>
            </figure>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'

import API from '../../config/api'

export default {
  data () {
    return {
      search: null,
      results: []
    }
  },
  methods: {
    searchMovie: debounce(function () {
      if (this.search) {
        API.movie.search(this.search)
          .then((res) => {
            this.results = res.data.results
          })
          .catch((error) => {
            console.log('error', error)
          })
      } else {
        this.search = null
      }
    }, 300),
    clearResults () {
      this.results = []
      this.search = null
    }
  }
}
</script>

<style lang="scss" scoped>
.MovieSearch {
  &__Item {
    &:hover {
      background-color: #f4f4f4;
    }
    figure {
      min-height: 20px;
      align-items: center;
    }
    img {
      width: 48px;
    }
  }
  &__Title {
    width: 70%;
  }
}
</style>
