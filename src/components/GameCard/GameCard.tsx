import { cn } from '@/lib/utils'

import WishlistIcon from '@svg-icons/material-outlined/favorite-border.svg'
import WishlistFilledIcon from '@svg-icons/material-outlined/favorite.svg'
import AddToShoppingCartIcon from '@svg-icons/material-outlined/add-shopping-cart.svg'

import Ribbon from '../Ribbon/Ribbon'
import Button from '../Button/Button'

export type GameCardProps = {
  title: string
  publisher: string
  publisherUrl: string
  sellingPrice: number
  listPrice?: number
  imgUrl: string
  gameUrl: string
  ribbonText?: string
  className?: string
  isFavorite?: boolean
}

/* eslint-disable @next/next/no-img-element */
const GameCard = ({
  title,
  publisher,
  sellingPrice,
  listPrice,
  imgUrl,
  publisherUrl,
  gameUrl,
  ribbonText,
  className,
  isFavorite = false
}: GameCardProps) => {
  return (
    <article
      className={cn(
        'flex flex-col items-center w-full bg-white shadow-lg rounded rounded-t-none relative',
        className
      )}
    >
      {!!ribbonText && <Ribbon size="small">{ribbonText}</Ribbon>}
      <figure className="block w-full bg-gray">
        <a href={gameUrl} data-img-game-link>
          <img className="object-cover w-full h-36" src={imgUrl} alt={title} />
        </a>
        <div className="bg-white p-4 pt-3 pb-0 flex justify-between gap-4 items-start">
          <figcaption>
            <h3 className="font-semibold text-base">
              <a href={gameUrl} data-title-game-link>
                {title}
              </a>
            </h3>
            <a href={publisherUrl}>
              <address className="text-xs text-gray/60 not-italic hover:underline">
                {publisher}
              </address>
            </a>
          </figcaption>
          <button
            type="button"
            title="Add to wishlist"
            aria-label="Add to wishlist"
            className="size-6 text-primary"
            data-wishlist
          >
            {isFavorite ? <WishlistFilledIcon /> : <WishlistIcon />}
          </button>
        </div>
      </figure>
      <div className="flex items-center justify-end gap-1 size-full p-4 pt-2">
        {!!listPrice && (
          <div
            data-list-price
            className="text-gray/80 font-semibold line-through text-sm mr-3"
          >
            $
            {listPrice.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })}
          </div>
        )}
        <div
          data-selling-price
          className="text-sm font-semibold text-white rounded-md bg-secondary py-1 px-3"
        >
          $
          {sellingPrice.toLocaleString('pt-BR', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          })}
        </div>
        <Button Icon={<AddToShoppingCartIcon />} size="small" />
      </div>
    </article>
  )
}

export default GameCard
