<template>
  <div class="MovieSearch dropdown is-active column is-half is-full-mobile is-offset-one-quarter py-0">
    <div class="dropdown-trigger column is-full pb-0">
      <form
        @submit="handleSubmit"
      >
        <div class="field">
            <p class="control is-expanded has-icons-right">
              <input
                type="text"
                placeholder="Joker, Forest Gump, Interstellar,..."
                class="input is-large"
                v-model="search"
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
      </form>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  name: 'MovieSearch',
  data () {
    return {
      search: 'Joker',
      results: []
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.searchMovie()
    },
    searchMovie: debounce(function () {
      this.$emit('update:search', this.search)
    }, 300),
    clearResults () {
      this.results = []
      this.search = null
    }
  },
  mounted () {
    this.$emit('update:search', this.search)
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
