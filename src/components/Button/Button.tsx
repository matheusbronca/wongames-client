import { cn } from '@/lib/utils'
import { cva } from 'cva'
import { AnchorHTMLAttributes, Attributes, ButtonHTMLAttributes } from 'react'
import React from 'react'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  isFullWidth?: boolean
  Icon?: JSX.Element
  renderAs?: Extract<React.ElementType, 'button' | 'a'>
} & ButtonTypes

const getVariantClasses = cva(null, {
  variants: {
    size: {
      small: 'text-xs h-8 p-2',
      medium: 'text-sm  h-10 px-md',
      large: 'text-base h-12 px-xlg'
    }
  }
})

const Button = ({
  children,
  size = 'medium',
  isFullWidth = false,
  Icon,
  renderAs = 'button',
  ...props
}: ButtonProps) => {
  // Needed to create tag "on demand"
  const Tag = ({ renderAs, children, ...props }: ButtonProps) =>
    React.createElement(
      renderAs as Extract<ButtonProps, 'renderAs'>,
      props as Attributes,
      children
    )

  return (
    <Tag
      renderAs={renderAs}
      className={cn(
        'inline-flex items-center justify-center text-white no-underline border-none rounded bg-gradient-to-b cursor-pointer from-[#FF5F5F] to-[#F062C0] hover:bg-gradient-to-b hover:from-[#e35565] hover:to-[#d958a6]',
        getVariantClasses({
          size
        }),
        {
          'w-full': Boolean(isFullWidth)
        },
        {
          'inline-flex items-center justify-center [&_>_svg]:w-4 [&_svg_+_span]:ml-xxsm':
            !!Icon
        }
      )}
      {...props}
    >
      {!!Icon && Icon}
      {!!children && <span>{children}</span>}
    </Tag>
  )
}

export default Button
