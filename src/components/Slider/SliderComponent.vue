<template>
  <div class="Slider mb-4">
    <nav class="is-flex mb-5">
      <button
        class="Slider__Prev button is-dark mr-4"
        @click="prev($event)"
        :style="{ 'visibility': currentIndex > 0 ? 'visible' : 'hidden'}"
      >
        &#10094; Previous
      </button>
      <h3>{{ currentIndex + 1 }} / {{ items.length }} result(s)</h3>
      <button
        class="Slider__Next button is-dark ml-4"
        @click="next($event)"
        :style="{ 'visibility': currentIndex < items.length - 1 ? 'visible' : 'hidden'}"
      >
        &#10095; Next
      </button>
    </nav>
    <transition
      name="fade"
      mode="out-in"
    >
      <section class="Movie hero is-default is-bold is-light">
        <div class="hero-body pb-0">
          <div class="container has-text-left">
            <div class="columns">
              <MovieCard class="column is-4" />
              <MovieDetails class="column is-7" />
            </div>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard/MovieCardComponent.vue'
import MovieDetails from '@/components/MovieDetails/MovieDetailsComponent.vue'

export default {
  name: 'Slider',
  components: {
    MovieCard,
    MovieDetails
  },
  props: {
    items: {
      type: [Object, Array],
      required: true
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  mounted () {
    this.updateMovie(this.currentIndex)
  },
  watch: {
    currentIndex: function (val) {
      this.updateMovie(val)
    }
  },
  methods: {
    next (e) {
      if (e) {
        e.preventDefault()
      }
      this.currentIndex === this.items.length
        ? this.currentIndex = 0
        : this.currentIndex += 1
    },
    prev (e) {
      e.preventDefault()
      this.currentIndex -= 1
    },
    updateMovie (id) {
      this.$store.dispatch('updateCurrentMovie', this.items[id].imdbID)
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

.Slider {
  position: relative;
  nav {
    justify-content: center;
    align-items: center;
  }
  figure {
    img {
      width: 200px;
    }
  }
  &__Prev, &__Next {
    transition: 0.5s ease;
  }
  .Movie {
    min-height: 400px;
  }
}
</style>
