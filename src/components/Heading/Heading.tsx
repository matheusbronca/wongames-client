import { cn } from '@/lib/utils'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'medium'
  uppercase?: boolean
  borderPosition?: 'left' | 'bottom'
  borderColor?: 'primary' | 'secondary'
}

const Heading = ({
  children,
  color = 'white',
  borderPosition = 'left',
  borderColor = 'primary',
  size = 'medium',
  uppercase = false
}: HeadingProps) => (
  <h2
    className={cn(
      `text-xl md:text-2xl font-semibold ${color === 'black' ? 'text-black' : 'text-white'}`,
      {
        'pl-xxsm border-l-8 border-primary':
          borderPosition === 'left' && borderColor === 'primary',
        'pl-xxsm border-l-8 border-secondary':
          borderPosition === 'left' && borderColor === 'secondary',
        'relative mb-md after:absolute after:h-2 after:w-14 after:bg-primary after:-bottom-3 after:-left-0':
          borderPosition === 'bottom' && borderColor === 'primary',
        'relative mb-md after:absolute after:h-2 after:w-14 after:bg-secondary after:-bottom-3 after:-left-0':
          borderPosition === 'bottom' && borderColor === 'secondary',
        'text-base after:w-8': size === 'small',
        uppercase: !!uppercase
      }
    )}
  >
    {children}
  </h2>
)

export default Heading
