import { cn } from '@/lib/utils'

export type Breakpoint = 'md' | 'lg' | 'xl' | '2xl'
export type MatcherType = 'greaterThan' | 'lessThan'
export type MatchMediaProps = {
  matcher?:
    | 'greaterThan: md'
    | 'greaterThan: lg'
    | 'greaterThan: xl'
    | 'greaterThan: 2xl'
    | 'lessThan: md'
    | 'lessThan: lg'
    | 'lessThan: xl'
    | 'lessThan: 2xl'

  children: React.ReactNode
}

const MatchMedia = ({ matcher, children }: MatchMediaProps) => {
  const matcherType: MatcherType = matcher?.split(':')[0] as MatcherType
  const mediaType: Breakpoint = matcher?.split(' ')[1] as Breakpoint

  return (
    <div
      className={cn('hidden', {
        'md:block': matcherType === 'greaterThan' && mediaType === 'md',
        'lg:block': matcherType === 'greaterThan' && mediaType === 'lg',
        'xl:block': matcherType === 'greaterThan' && mediaType === 'xl',
        '2xl:block': matcherType === 'greaterThan' && mediaType === '2xl',
        'block md:hidden': matcherType === 'lessThan' && mediaType === 'md',
        'block lg:hidden': matcherType === 'lessThan' && mediaType === 'lg',
        'block xl:hidden': matcherType === 'lessThan' && mediaType === 'xl',
        'block 2xl:hidden': matcherType === 'lessThan' && mediaType === '2xl'
      })}
    >
      {children}
    </div>
  )
}

export default MatchMedia
