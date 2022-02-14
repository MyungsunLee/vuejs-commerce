import { mount } from '@vue/test-utils';

import CommonGreeting from '../../src/components/CommonGreeting.vue';

describe('CommonGreeting.vue', () => {
  it('renders a greeting', () => {
    const wrapper = mount(CommonGreeting);
    expect(wrapper.text()).toMatch('Vue and TDD');
  });
});
