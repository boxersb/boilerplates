import { useMemo, useRef } from 'react'
import useIsomorphicLayoutEffect from '#/hooks/useIsomorphicLayoutEffect'

type Function<ARGS extends unknown[], R> = (...args: ARGS) => R

const useEvent = <Arg extends unknown[], Return>(fn: Function<Arg, Return>): Function<Arg, Return> => {
  const ref = useRef<Function<Arg, Return>>(fn)
  useIsomorphicLayoutEffect(() => {
    ref.current = fn
  })

  return useMemo(
    () =>
      (...args: Arg): Return => {
        const { current } = ref
        return current(...args)
      },
    [],
  )
}

export default useEvent
