import { cn } from '@/lib/utils'

export type RibbonProps = {
  size?: 'normal' | 'small'
  color?: 'primary' | 'secondary'
} & React.PropsWithChildren

const Ribbon = ({
  color = 'primary',
  size = 'normal',
  children
}: RibbonProps) => (
  <div
    className={cn(
      'absolute -right-4 top-4 inline-flex items-center justify-center px-6 text-white font-semibold after:absolute after:size-2 after:scale-x-[2] after:origin-top-right after:-bottom-2 after:right-0  after:brightness-75 after:border-4 ',
      {
        'bg-primary after:border-primary after:border-b-transparent after:border-r-transparent':
          color === 'primary',
        'bg-secondary after:border-secondary after:border-b-transparent after:border-r-transparent':
          color === 'secondary',
        'h-9 text-sm': size === 'normal',
        'h-6 text-xs after:size-[6px]': size === 'small'
      }
    )}
  >
    {children}
  </div>
)

export default Ribbon
