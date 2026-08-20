import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { menuList } from '../mock-data/menu.js'

function Hero() {
  const [slideIndex, setSlideIndex] = useState(() => Math.floor(Math.random() * menuList.length))
  const [recommendationIndex, setRecommendationIndex] = useState(0)
  const recommendation = menuList[recommendationIndex]
  const signatureMenus = menuList.filter((menuItem) => [3, 12, 20].includes(menuItem.id))

  useEffect(() => {
    const slideshowTimer = window.setInterval(() => {
      setSlideIndex((currentIndex) => {
        if (menuList.length < 2) return currentIndex

        let nextIndex = currentIndex
        while (nextIndex === currentIndex) {
          nextIndex = Math.floor(Math.random() * menuList.length)
        }
        return nextIndex
      })
    }, 5000)

    return () => window.clearInterval(slideshowTimer)
  }, [])

  const showAnotherRecommendation = () => {
    setRecommendationIndex((currentIndex) => (currentIndex + 7) % menuList.length)
  }

  return (
    <>
      <section className="relative isolate flex min-h-[28rem] items-center justify-center overflow-hidden px-5 text-center">
        {menuList.map((menuItem, index) => (
          <img
            key={menuItem.id}
            src={menuItem.pic_url}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out motion-reduce:transition-none ${
              index === slideIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />

        <div className="max-w-3xl text-white">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Experience the authentic taste of Thailand.
          </h1>
          <a
            href="#recommendation"
            className="mt-8 inline-block rounded-full bg-red-700 px-7 py-3 text-sm font-semibold transition hover:bg-red-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            View Menu
          </a>
        </div>
      </section>

      <section
        id="recommendation"
        className="scroll-mt-6 bg-[#f9f4e9] px-5 py-10 sm:py-14"
        aria-labelledby="recommendation-title"
      >
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
            <img
              src={recommendation.pic_url}
              alt={recommendation.name}
              className="h-56 w-full object-cover sm:h-64"
            />
            <div className="flex flex-1 flex-col items-start p-7 text-left">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-600">
                Today&apos;s recommendation
              </p>
              <h2 id="recommendation-title" className="text-3xl font-bold text-slate-900">
                {recommendation.name}
              </h2>
              <p className="mt-4 text-sm text-slate-600">
                One of our delicious Thai dishes, with just a hint of spice.
              </p>

              <p className="mt-2 text-sm font-medium text-[#d84d1e]">
                {recommendation.spiciness_level === 0
                  ? "Not spicy"
                  : `Spiciness level: ${"🌶️".repeat(
                      recommendation.spiciness_level
                    )}`}
              </p>
              <p className="mt-5 text-2xl font-bold text-red-600">
                {`\u0E3F${recommendation.price}`}
              </p>

              <div className="mt-auto flex flex-wrap gap-3 pt-7">
                <Link
                  to={`/${recommendation.id}`}
                  className="rounded-full bg-red-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  View Dish
                </Link>
                <button
                  type="button"
                  onClick={showAnotherRecommendation}
                  className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-red-600 hover:text-red-600"
                >
                  Surprise Me!
                </button>
              </div>
            </div>
          </article>

          <aside className="overflow-hidden rounded-3xl bg-white shadow-sm" aria-labelledby="signature-title">
            <div className="border-b border-slate-100 px-7 py-6 text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                Chef’s Specials
              </p>
              <h2 id="signature-title" className="mt-2 text-3xl font-bold text-slate-900">
                Signature Menus
              </h2>
            </div>

            <div className="divide-y divide-slate-100">
              {signatureMenus.map((menuItem) => (
                <Link
                  key={menuItem.id}
                  to={`/${menuItem.id}`}
                  className="group flex items-center gap-4 p-5 text-left transition hover:bg-orange-50"
                >
                  <img
                    src={menuItem.pic_url}
                    alt={menuItem.name}
                    className="h-24 w-24 shrink-0 rounded-2xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-red-600">
                      {menuItem.name}
                    </h3>
                    
                <p className="mt-2 text-sm font-medium text-[#d84d1e]">
                  {menuItem.spiciness_level === 0
                    ? "Not spicy"
                    : `Spiciness level: ${"🌶️".repeat(
                  menuItem.spiciness_level
                  )}`}
                </p>
                    <p className="mt-2 font-bold text-red-600">{`\u0E3F${menuItem.price}`}</p>
                  </div>
                  <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-red-600" aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default Hero