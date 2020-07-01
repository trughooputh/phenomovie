import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'

const VueWithVuex = createLocalVue();
VueWithVuex.use(Vuex);

// Component
import MovieActions from '@/components/MovieActions/MovieActionsComponent.vue'

// Mock
import { movieMock } from './../mocks'

const props = ['movie'];
const propsData = {
  movie: movieMock
}

const computed = {
  isMovieAdded: () => true
}

const state = {
  movies: [],
  categories: []
};
const mutations = {
  REMOVE_MOVIE: jest.fn()
};
const actions = {
  removeMovie: jest.fn()
};
const getters = {
  isMovieAdded: jest.fn()
};

describe('MovieActions component', () => {
  let wrapper;
  let store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  });

  describe('Set up', () => {
    it('Is mounted', () => {
      wrapper = shallowMount(MovieActions, {
        localVue: VueWithVuex,
        computed,
        store,
        propsData
      });
      expect(wrapper).toBeDefined();
    });
  });

  describe('Properties', () => {
    wrapper = shallowMount(MovieActions, {
      localVue: VueWithVuex,
      computed,
      store,
      propsData
    });

    Object.keys(wrapper.vm.$props).forEach((prop) => {
      it(`Prop "${prop}" exists`, () => {
        expect(props.includes(prop)).toEqual(true);
      });
    });

    it('Property "movie" is required', () => {
      const propertyName = wrapper.vm.$options.props.movie;
      expect(propertyName.required).toBe(true);
    });
  });

  describe('When the movie is already added', () => {
    state.movies.push({id: 2300});
    wrapper = shallowMount(MovieActions, {
      localVue: VueWithVuex,
      computed,
      store,
      propsData
    });

    it('Then, it should show Remove button', () => {
      expect(wrapper.find('.MovieActions__Add').exists()).toBe(false)
      expect(wrapper.find('.MovieActions__Remove').exists()).toBe(true)
    });
  });

  describe('When click on "Remove" button', () => {
    wrapper = shallowMount(MovieActions, {
      localVue: VueWithVuex,
      computed,
      store,
      propsData
    });
    const spyRemoveFromCart = jest.spyOn(wrapper.vm, 'removeFromCart')

    const buttonRemove = wrapper.find('.MovieActions__Remove');
    buttonRemove.trigger('click');

    wrapper.vm.$nextTick(() => {
      it('Then, it should call method "removeFromCart"', () => {
        expect(spyRemoveFromCart).toHaveBeenCalled();
      });
    });

  });
});
