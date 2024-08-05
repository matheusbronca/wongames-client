import { useState } from 'react'
import { cn } from '@/lib/utils'

import MenuIcon from '@svg-icons/remix-fill/menu-2.svg'
import ShoppingCartIcon from '@svg-icons/material-outlined/shopping-cart.svg'
import SearchIcon from '@svg-icons/material-outlined/search.svg'
import CloseIcon from '@svg-icons/material-outlined/close.svg'

import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import MatchMedia from '../MatchMedia/MatchMedia'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between md:justify-start relative py-sm">
        <MatchMedia matcher="lessThan: md">
          <MenuIcon
            className="text-white w-6 cursor-pointer"
            aria-label="Open Menu"
            onClick={() => setIsOpen(true)}
          />
        </MatchMedia>
        <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer md:static md:translate-x-0">
          <MatchMedia matcher="greaterThan: md">
            <Logo hideTextOnMobile />
          </MatchMedia>
          <MatchMedia matcher="lessThan: md">
            <Logo hideTextOnMobile size="large" />
          </MatchMedia>
        </div>

        <div className="flex-grow">
          {!!username && (
            <MatchMedia matcher="greaterThan: md">
              <nav className="flex flex-grow ml-sm">
                <a
                  href="#"
                  className="text-white relative text-base mt-1 mx-sm no-underline text-center hover:after:absolute hover:after:block hover:after:h-[0.1875rem] hover:after:bg-primary hover:after:animate-hoverAnimation"
                >
                  My Account
                </a>
                <a
                  href="#"
                  className="text-white relative text-base mt-1 mx-sm no-underline text-center hover:after:absolute hover:after:block hover:after:h-[0.1875rem] hover:after:bg-primary hover:after:animate-hoverAnimation"
                >
                  Wishlist
                </a>
              </nav>
            </MatchMedia>
          )}
        </div>

        <div className="flex gap-xsm items-center">
          <SearchIcon
            className="text-white w-6 cursor-pointer"
            aria-label="Search"
          />
          <ShoppingCartIcon
            className="text-white w-6 cursor-pointer"
            aria-label="Open shopping cart"
          />
          {!username && (
            <MatchMedia matcher="greaterThan: md">
              <Button>Sign in</Button>
            </MatchMedia>
          )}
        </div>
      </div>
      <nav
        aria-hidden={!isOpen}
        data-mobile
        className={cn(
          'absolute flex flex-col items-center top-0 left-0 right-0 bottom-0 h-full bg-white overflow-hidden [&_[data-menu]_a]:text-black [&_[data-menu]_a]:text-2xl [&_[data-menu]_a]:mb-sm [&_[data-menu]_a]:font-bold transition-opacity duration-300 ease-in-out',
          {
            'opacity-0 pointer-events-none': !isOpen
          },
          {
            'opacity-100 pointer-events-auto': isOpen
          }
        )}
      >
        <CloseIcon
          className="absolute size-6 top-0 right-0 m-xsm cursor-pointer"
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        />
        <div
          data-menu
          className={cn(
            'flex flex-col flex-grow justify-center items-center transition-transform duration-300 ease-in-out',
            {
              '-translate-y-8': isOpen
            },
            {
              'translate-y-0': !isOpen
            }
          )}
        >
          <a
            href="#"
            className="relative text-base mt-1 mx-sm no-underline text-center hover:after:absolute hover:after:block hover:after:h-[0.1875rem] hover:after:bg-primary hover:after:animate-hoverAnimation"
          >
            Home
          </a>
          <a
            href="#"
            className="relative text-base mt-1 mx-sm no-underline text-center hover:after:absolute hover:after:block hover:after:h-[0.1875rem] hover:after:bg-primary hover:after:animate-hoverAnimation"
          >
            Explore
          </a>

          {!!username && (
            <>
              <a
                href="#"
                className="relative text-base mt-1 mx-sm no-underline text-center hover:after:absolute hover:after:block hover:after:h-[0.1875rem] hover:after:bg-primary hover:after:animate-hoverAnimation"
              >
                My Account
              </a>
              <a
                href="#"
                className="relative text-base mt-1 mx-sm no-underline text-center hover:after:absolute hover:after:block hover:after:h-[0.1875rem] hover:after:bg-primary hover:after:animate-hoverAnimation"
              >
                Wishlist
              </a>
            </>
          )}
        </div>
        {!username && (
          <div
            className={cn(
              'flex flex-col items-center pt-0 px-xlg pb-xlg [&_>_span]:block [&_>_span]:my-xxsm [&_>_span]:text-xs transition-transform duration-300 ease-in-out',
              {
                'translate-y-8': !isOpen
              },
              {
                'translate-y-0': isOpen
              }
            )}
          >
            <Button size="large" isFullWidth>
              Log in now
            </Button>
            <span>or</span>
            <a
              href="#"
              className="no-underline text-primary border-b-2 border-primary"
            >
              Sign up
            </a>
          </div>
        )}
      </nav>
    </>
  )
}

export default Menu
