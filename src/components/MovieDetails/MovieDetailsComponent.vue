<template>
  <div class="MovieDetails mb-6">
    <h3 class="title mb-0 is-size-3">
      {{ CurrentItemDetails.Title }}
      <span class="MovieDetails__Score tag is-black ml-1">{{ CurrentItemDetails.imdbRating }}</span>
    </h3>
    <span class="is-small">{{ CurrentItemDetails.Director }}  • {{ CurrentItemDetails.Production }}</span>
    <span class="is-small ml-1">•   {{ CurrentItemDetails.Language}}</span>
    <p class="MovieDetails__Genres is-size-7 mb-2">
      <span>{{ CurrentItemDetails.Genre }}</span>
      <span class="is-italic ml-1">•   {{ CurrentItemDetails.Runtime }}</span>
      <span
        class="ml-1"
        v-if="CurrentItemDetails.Year"
      >
        •  {{ CurrentItemDetails.Year }}
      </span>
    </p>
    <p class="MovieDetails__Actors">{{ CurrentItemDetails.Actors }}</p>
    <a
      v-if="CurrentItemDetails.Website && CurrentItemDetails.Website !== 'N/A'"
      :href="CurrentItemDetails.Website"
      target="_blank"
      rel="noopener"
    >
      Official website
    </a>
    <section
      class="MovieDetails__Overview has-text-weight-medium mt-3"
    >
      <h3 class="is-size-4 title mb-0">Overview</h3>
      <p class="is-size-6 is-italic">
        {{ CurrentItemDetails.Plot }}
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  computed: {
    CurrentItemDetails () {
      return this.$store.state.currentMovie || null
    }
  }
}
</script>

<style lang="scss" scoped>
.MovieDetails {
  &__Overview {
    p {
      position: relative;
      left: 14px;
      &::before {
        content:"“";
        position: absolute;
        font-size: 2rem;
        left: -18px;
        top: -11px;
      }
      &::after {
        content: "”";
        position: absolute;
        font-size: 2rem;
        bottom: -11px;
      }
    }
  }
  &__Score {
    border-radius: 100%;
    padding: 18px 10px;
    font-weight: bold;
  }
}
</style>
