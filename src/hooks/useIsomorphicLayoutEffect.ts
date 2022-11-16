import { useLayoutEffect, useEffect } from 'react'

/**
 * https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
 * SSR 에서 useLayoutEffect 사용시 Warning 발생하여, 브라우저에서만 사용하도록 하는 코드
 */
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default useIsomorphicLayoutEffect
