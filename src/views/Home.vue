<template>
  <section class="Home hero is-light">
    <div class="column is-12 mb-2">
      <MovieSearch />
    </div>
    <div class="container">
      <h1 class="title my-4 is-capitalized is-size-1">Categories</h1>
    </div>
    <ul
      class="columns is-multiline is-full is-centered"
      v-if="Categories"
    >
      <li
        class="column is-2 mx-5 my-3 hero is-light"
        v-for="({id, name}, index) in Categories"
        :key="index"
        :style="getBackgroundCard(name)"
      >
        <h3 class="is-size-7 has-text-white has-text-left is-uppercase">{{ name }}</h3>
        <router-link
          class="button is-light is-small"
          :to="{ name: 'Category', params: { id, name: encodeURI(name.toLowerCase()) }}"
        >
          <span class="icon">
            <i class="fas fa-film"></i>
          </span>
          <span>View all movies</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import MovieSearch from '@/components/MovieSearch/MovieSearchComponent.vue'

export default {
  name: 'Home',
  components: {
    MovieSearch
  },
  created () {
    if (this.$store.state.categories.length === 0) {
      this.$store.dispatch('loadCategories')
    }
  },
  computed: {
    Categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    getBackgroundCard (categoryName) {
      return `background-image: url("https://source.unsplash.com/220x309/weekly?${categoryName}")`
    }
  }
}
</script>

<style lang="scss" scoped>
.Home {
  ul {
    li {
      min-height: 300px;
      font-weight: bold;
      background-size: contain;
    }
  }
  h3 {
    text-shadow: 0px 2px 6px #000;
  }
}
</style>
