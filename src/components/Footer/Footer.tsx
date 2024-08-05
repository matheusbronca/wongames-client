import Logo from '../Logo/Logo'
import Heading from '../Heading/Heading'
import Link from 'next/link'
import { cva } from 'cva'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const linkClasses = cva(
    'block text-gray no-underline mb-xxsm text-sm hover:underline '
  )

  return (
    <div>
      <Logo color="black" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-md">
        <div className="[&_a,span]:text-lg">
          <Heading
            color="black"
            size="small"
            borderPosition="bottom"
            borderColor="secondary"
            uppercase={true}
          >
            Contact
          </Heading>
          <a className={linkClasses()} href="mailto:sac@wongames.com">
            sac@wongames.com
          </a>
          <a className={linkClasses()} href="tel:+556299999-9999">
            +55 62 99999-9999
          </a>
        </div>

        <div>
          <Heading
            color="black"
            size="small"
            borderPosition="bottom"
            borderColor="secondary"
            uppercase={true}
          >
            Follow us
          </Heading>
          <nav aria-labelledby="social media">
            <a
              className={linkClasses()}
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              className={linkClasses()}
              href="https://www.twitter.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              className={linkClasses()}
              href="https://www.youtube.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              className={linkClasses()}
              href="https://www.facebook.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </div>

        <div>
          <Heading
            color="black"
            size="small"
            borderPosition="bottom"
            borderColor="secondary"
            uppercase={true}
          >
            Links
          </Heading>

          <nav aria-labelledby="footer resources">
            <Link className={linkClasses()} href="/">
              Home
            </Link>
            <Link className={linkClasses()} href="/games">
              Store
            </Link>
            <Link className={linkClasses()} href="/search">
              Buscar
            </Link>
          </nav>
        </div>

        <div>
          <Heading
            color="black"
            size="small"
            borderPosition="bottom"
            borderColor="secondary"
            uppercase={true}
          >
            Location
          </Heading>

          <span className={linkClasses()}>Lorem ipsum dolor sit.</span>
          <span className={linkClasses()}>Lorem Ipsum </span>
          <span className={linkClasses()}>Lorem ipsum dolor</span>
        </div>
      </div>

      <div className="text-gray text-xs mt-lg mb-md text-center">
        Won Games {currentYear} ©️ All rights reserved.
      </div>
    </div>
  )
}
export default Footer
