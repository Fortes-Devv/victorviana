declare module 'animejs' {
  interface AnimeParams {
    targets?: string | object | object[] | NodeList | null
    duration?: number | ((el: Element, i: number, l: number) => number)
    delay?: number | ((el: Element, i: number, l: number) => number)
    endDelay?: number
    easing?: string | ((el: Element) => string)
    loop?: number | boolean
    direction?: 'normal' | 'reverse' | 'alternate'
    autoplay?: boolean
    [key: string]: unknown
  }

  interface AnimeInstance {
    play: () => void
    pause: () => void
    restart: () => void
    reverse: () => void
    seek: (time: number) => void
    finished: Promise<void>
  }

  interface AnimeStagger {
    (value: number, options?: { start?: number; from?: number | string; direction?: string; easing?: string; grid?: number[]; axis?: string }): (el: Element, i: number) => number
  }

  interface Anime {
    (params: AnimeParams): AnimeInstance
    stagger: AnimeStagger
    timeline: (params?: AnimeParams) => AnimeInstance & { add: (params: AnimeParams) => AnimeInstance }
    set: (targets: AnimeParams['targets'], values: Record<string, unknown>) => void
    get: (targets: AnimeParams['targets'], prop: string) => string | number
    remove: (targets: AnimeParams['targets']) => void
    random: (min: number, max: number) => number
    running: AnimeInstance[]
    easings: Record<string, (t: number) => number>
  }

  const anime: Anime
  export default anime
}
