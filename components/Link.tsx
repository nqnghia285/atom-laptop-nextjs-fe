import NextLink from 'next/link'
import { memo, ReactNode } from 'react'

export interface LinkProps {
   path: string
   children: ReactNode
   className?: string
}

function Link({ path, children, className }: LinkProps) {
   return (
      <NextLink href={path} passHref>
         <a className={className}>{children}</a>
      </NextLink>
   )
}

const MemoOfLink = memo(Link)

export default MemoOfLink
