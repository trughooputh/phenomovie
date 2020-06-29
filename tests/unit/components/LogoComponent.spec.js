import { shallowMount } from '@vue/test-utils'
import LogoComponent from '@/components/logo/LogoComponent.vue'

describe('LogoComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(LogoComponent)
  })
})
