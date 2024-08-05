import React from 'react'
import Button from '../Button/Button'
import MatchMedia from '../MatchMedia/MatchMedia'

/* eslint-disable @next/next/no-img-element */

// type BannerType<T> = (props: BannerProps<T>) =>
type HType = Extract<React.ElementType, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  headingTag?: HType
  buttonLabel: string
  buttonLink: string
}

const Banner = ({
  img,
  title,
  headingTag = 'h3',
  subtitle,
  buttonLabel,
  buttonLink
}: BannerProps) => {
  const HeadingTag = ({
    as,
    children,
    ...props
  }: {
    as: HType
    children: string
  } & React.HTMLProps<HTMLHeadingElement>) =>
    React.createElement(as, props, children)

  return (
    <article className="w-full md:relative md:rounded-md md:overflow-hidden md:shadow-xl ">
      <figure className="w-full h-60 md:h-[36rem]">
        <img
          src={img}
          alt={`${title} - ${subtitle}`}
          className="size-full object-cover"
        />
        <figcaption className="text-white p-8 bg-opacity-15 bg-white md:absolute md:bottom-0 md:left-0 md:right-0 md:bg-[#000000] md:bg-opacity-70 md:p-11">
          <HeadingTag
            as={headingTag}
            className="text-xl md:text-3xl font-semibold"
          >
            {title}
          </HeadingTag>
          <p
            className="text-sm mt-xxsm mb-xsm [&_>_strong]:text-primary [&_>_strong]:font-semibold md:text-lg"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          <MatchMedia matcher="lessThan: md">
            <Button role="a" href={buttonLink}>
              {buttonLabel}
            </Button>
          </MatchMedia>
          <MatchMedia matcher="greaterThan: md">
            <Button role="a" href={buttonLink} size="large">
              {buttonLabel}
            </Button>
          </MatchMedia>
        </figcaption>
      </figure>
    </article>
  )
}

export default Banner
