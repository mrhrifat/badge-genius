import createCache, { EmotionCache } from '@emotion/cache'

export const emotionCache: EmotionCache = createCache({
  key: 'css',
  prepend: true,
})
