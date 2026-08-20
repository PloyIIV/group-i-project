import { useState } from 'react'
import { Link } from 'react-router-dom'
import menuList from '../mock-data/menu.js'

function Hero() {
  const [recommendationIndex, setRecommendationIndex] = useState(0)
  const recommendation = menuList[recommendationIndex]

  const showAnotherRecommendation = () => {
    setRecommendationIndex((currentIndex) => (currentIndex + 7) % menuList.length)
  }

  return (
    <section className="bg-orange-50 px-5 py-10 sm:py-14" aria-labelledby="recommendation-title">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-sm md:grid-cols-2">
        <img
          src={recommendation.pic_url}
          alt={recommendation.name}
          className="h-64 w-full object-cover md:h-full md:min-h-96"
        />

        <div className="flex flex-col justify-center p-7 sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-600">
            Today&apos;s recommendation
          </p>
          <h1 id="recommendation-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {recommendation.name}
          </h1>
          <p className="mt-4 text-slate-600">
            A delicious pick from our Thai menu
            {recommendation.spiciness_level > 0
              ? ` with spice level ${recommendation.spiciness_level}/5.`
              : ' with no added spice.'}
          </p>
          <p className="mt-5 text-2xl font-bold text-red-600">฿{recommendation.price}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to={`/${recommendation.id}`}
              className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              View dish
            </Link>
            <button
              type="button"
              onClick={showAnotherRecommendation}
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-red-600 hover:text-red-600"
            >
              Surprise me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero