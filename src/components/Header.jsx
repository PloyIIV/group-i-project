import shoppingCartIcon from '../../assets/icon/shopping_cart_icon.png'

function Header() {
  return (
    
    <header className="border-b border-orange-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* The logo links back to the homepage. */}
        <a href="/" className="text-xl font-bold text-red-600">
          Thai<span className="text-slate-900">Grub</span>
        </a>

        {/* navbar, use #menu for opening menulist naja */}
        <nav aria-label="Main navigation" className="flex items-center gap-6">
          <a href="#menu" className="text-sm font-medium text-slate-600 hover:text-red-600">
            Menu
          </a>
          {/* add another button here with anchor dai */}
          <button
            type="button"
            aria-label="Open cart"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
          >
            Cart
            <img
              src={shoppingCartIcon}
              alt=""
              aria-hidden="true"
              className="h-5 w-5 object-contain"
            />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
