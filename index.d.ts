/// <reference lib="es2016" />
/// <reference lib="es2017.object" />
/// <reference lib="es2017.string" />

interface IntersectionObserver {
  readonly root: Element | null
  readonly rootMargin: string
  readonly thresholds: number[]
  disconnect(): void
  observe(target: Element): void
  takeRecords(): IntersectionObserverEntry[]
  unobserve(target: Element): void
}

declare var IntersectionObserver: {
  prototype: IntersectionObserver
  new (callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver,
}
