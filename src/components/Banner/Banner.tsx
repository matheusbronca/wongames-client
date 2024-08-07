import React from 'react'
import Button from '../Button/Button'
import MatchMedia from '../MatchMedia/MatchMedia'
import Ribbon from '../Ribbon/Ribbon'
import { RibbonColor, RibbonSize } from '../Ribbon/Ribbon'

/* eslint-disable @next/next/no-img-element */

// type BannerType<T> = (props: BannerProps<T>) =>
export type HType = Extract<
  React.ElementType,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  headingTag?: HType
  buttonLabel: string
  buttonLink: string
  ribbon?: string
  ribbonSize?: RibbonSize
  ribbonColor?: RibbonColor
}

const Banner = ({
  img,
  title,
  headingTag = 'h3',
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonSize = 'normal',
  ribbonColor = 'primary'
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
    <article className="relative w-full md:relative md:rounded-md md:shadow-xl ">
      {!!ribbon && (
        <Ribbon
          color={ribbonColor}
          size={ribbonSize}
          className="right-0 md:-right-4 after:hidden md:after:block"
        >
          {ribbon}
        </Ribbon>
      )}
      <figure className="w-full h-60 md:h-[36rem]">
        <img
          src={img}
          alt={`${title} - ${subtitle}`}
          className="size-full object-cover md:rounded-md"
        />
        <figcaption className="text-white p-8 bg-opacity-15 bg-white md:absolute md:bottom-0 md:left-0 md:right-0 md:bg-[#000000] md:bg-opacity-70 md:p-11 md:rounded-md md:rounded-t-none">
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
