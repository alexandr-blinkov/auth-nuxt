export { default as Navigation } from '../../components/main/Navigation.vue'

export const LazyNavigation = import('../../components/main/Navigation.vue' /* webpackChunkName: "components/main/Navigation" */).then(c => c.default || c)
