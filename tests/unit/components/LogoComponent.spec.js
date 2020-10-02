import { shallowMount } from '@vue/test-utils'
import LogoComponent from '@/components/Logo/LogoComponent.vue'

let wrapper

describe('LogoComponent component', () => {
  it('is rendered', () => {
    wrapper = shallowMount(LogoComponent)
  })
})
