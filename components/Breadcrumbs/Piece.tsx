import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

export interface PieceProps {
   path: string
   children: ReactNode
   className?: string
}

function Piece({ path, children, className }: PieceProps) {
   return (
      <Link href={path} passHref>
         <a className={clsx('text-sky-400 hover:underline', className)}>
            {children}
         </a>
      </Link>
   )
}

export default Piece
