import { shallowMount, createLocalVue } from '@vue/test-utils'
import SliderComponent from '@/components/Slider/SliderComponent.vue'

import Vuex from 'vuex'

// Mock
import MockStore from './../mockStore.js'
import { mockMovie } from './../mockData.js'
const VueWithVuex = createLocalVue()
VueWithVuex.use(Vuex)

const props = ['items']
const propsData = {
  items: [
    {
      imdbID: mockMovie.imdbID
    }
  ]
}

let wrapper
const store = new Vuex.Store(MockStore)

describe('Slider component', () => {
  let wrapper
  const store = new Vuex.Store(MockStore)

  describe('Properties', () => {
    wrapper = shallowMount(SliderComponent, {
      localVue: VueWithVuex,
      store,
      propsData
    })

    Object.keys(wrapper.vm.$props).forEach((prop) => {
      it(`Prop "${prop}" exists`, () => {
        expect(props.includes(prop)).toEqual(true)
      })
    })

    it('Property "items" is required', () => {
      const propertyName = wrapper.vm.$options.props.items
      expect(propertyName.required).toBe(true)
    })
  })
  describe('Click on next', () => {
    wrapper = shallowMount(SliderComponent, {
      localVue: VueWithVuex,
      store,
      propsData
    })
    const spyNext = jest.spyOn(wrapper.vm, 'next')
    const buttonNext = wrapper.findAll('.Slider__Next').at(0)
    xit('Should call "next" method', () => {
      buttonNext.trigger('click')
      expect(spyNext).toHaveBeenCalled()
    });
  });
  describe('Click on prev', () => {
    wrapper = shallowMount(SliderComponent, {
      localVue: VueWithVuex,
      store,
      propsData
    })
    const spyPrev = jest.spyOn(wrapper.vm, 'prev')
    const buttonPrev = wrapper.findAll('.Slider__Prev').at(0)
    xit('Should call "prev" method', () => {
      buttonPrev.trigger('click')
      expect(spyPrev).toHaveBeenCalled()
    });
  });
});
