<template>
  <div class="MovieDetails">
    <h1
      class="title mb-0"
      :class="{ 'is-size-4': isLight, 'is-size-2': !isLight }"
    >
      {{ movie.title }}
    </h1>
    <template
      v-if="!isLight"
    >
      <span class="is-small">{{ movie.original_title}}</span>
      <span class="is-small is-uppercase ml-1">•   {{ movie.original_language}}</span>
      <p class="MovieDetails__Genres is-size-7 mb-2">
        <router-link
          v-for="(genre, index) in movie.genres"
          :key="index"
          :to="{ name: 'Category', params: { id: genre.id, name: encodeURI(genre.name.toLowerCase()) }}"
        >
          {{ genre.name }},
        </router-link>
        <span
          v-if="!isLight"
          class="is-italic"
        >
          {{ movie.runtime }}min
        </span>
        <span
          class="ml-1"
          v-if="movie.release_date"
        >•   {{ movie.release_date.substring(0, 4) }}</span>
      </p>
    </template>
    <span class="MovieDetails__Score tag is-black">{{ movie.vote_average }}</span>
    <a
      :href="movie.homepage"
      target="_blank"
      rel="noopener"
      v-if="!isLight"
    >
      Official website
    </a>
    <section
      v-if="!isLight"
      class="MovieDetails__Overview has-text-weight-medium mt-3"
    >
      <h2 class="is-size-5">Overview</h2>
      <p class="is-size-6 is-italic">
        {{ movie.overview }}
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  props: {
    movie: {
      type: Object,
      required: true
    },
    isLight: {
      type: Boolean,
      default: false
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
