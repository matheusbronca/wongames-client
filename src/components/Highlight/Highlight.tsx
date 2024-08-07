/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { HType } from '../Banner/Banner'
import Button from '../Button/Button'

import { cn } from '@/lib/utils'

export type HighlightHeadingType = Exclude<HType, 'h1'>

export type HighlightProps = {
  title: string
  titleTag?: HighlightHeadingType
  subtitle: string
  subtitleTag?: HighlightHeadingType
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  alignment?: 'left' | 'right'
}

const titleStyles = cn('text-lg font-semibold text-white md:text-2xl')
const subTitleStyles = cn('text-sm font-light text-white mb-md md:text-lg')

const Highlight = ({
  title,
  titleTag = 'h3',
  subtitle,
  subtitleTag = 'h4',
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighlightProps) => {
  const Title = () =>
    React.createElement(titleTag, { className: titleStyles }, title)
  const SubTitle = () =>
    React.createElement(subtitleTag, { className: subTitleStyles }, subtitle)

  return (
    <article
      className={cn(
        'relative h-60 grid after:absolute after:size-full md:h-80 bg-cover bg-no-repeat bg-center'
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div
        className={cn('size-full bg-black/70 grid grid-cols-[2fr_1.3fr] ', {
          'grid-cols-[2fr_1.3fr]': alignment === 'left',
          'grid-cols-[1.3fr_2fr]': alignment === 'right'
        })}
      >
        {!!floatImage && (
          <img
            className={cn('max-h-60 md:max-h-80 self-end', {
              'order-last justify-self-end': alignment === 'left',
              'order-first justify-self-start': alignment === 'right'
            })}
            src={floatImage}
            alt={title}
          />
        )}
        <div
          className={cn('z-10 text-right p-xsm md:self-end md:p-lg', {
            'text-left': alignment === 'left'
          })}
        >
          <Title />
          <SubTitle />
          <Button renderAs="a" href={buttonLink}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </article>
  )
}

export default Highlight
