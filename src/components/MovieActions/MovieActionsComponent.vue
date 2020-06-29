<template>
  <div class="columns is-centered is-gapless">
    <div class="column is-4">
      <button
        class="button is-success is-small"
        title="Add to the cart"
        @click.stop.prevent="addToCart(movie)"
        v-if="!isMovieAdded"
      >
        <span class="icon">
          <i class="fas fa-plus"></i>
        </span>
        <span>Add</span>
      </button>
      <button
        class="button is-danger is-small"
        title="Remove from the cart"
        @click.stop.prevent="removeFromCart(movie)"
        v-else
      >
        <span class="icon">
          <i class="fas fa-trash"></i>
        </span>
        <span>Remove</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieActions',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    isMovieAdded () {
      return this.$store.getters.isMovieAdded(this.movie.id)
    }
  },
  methods: {
    addToCart (movie) {
      this.$store.dispatch('addMovie', movie)
    },
    removeFromCart (movie) {
      this.$store.dispatch('removeMovie', movie)
    }
  }
}
</script>
