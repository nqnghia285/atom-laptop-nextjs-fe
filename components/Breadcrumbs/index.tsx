import { Fragment } from 'react'
import { useBreadcrumbsSelector } from '~/hooks'
import AngleRight from './AngleRight'
import Home, { HomeProps } from './Home'
import Piece, { PieceProps } from './Piece'

export interface BreadcrumbsPath {
   homePiece: HomeProps
   angleClassName?: string
   pieces?: PieceProps[]
}

function Breadcrumbs() {
   const {
      homePiece: { icon, path, className },
      angleClassName,
      pieces,
   } = useBreadcrumbsSelector()

   return (
      <div className='container bg-inherit flex items-center px-4 py-[4px] tablet:px-4 tablet:py-[4px] laptop:px-6 laptop:py-[11px] desktop:px-6 desktop:py-[11px] mx-auto overflow-y-auto whitespace-nowrap'>
         <Home path={path} icon={icon} className={className} />

         {pieces?.map((piece, index) => (
            <Fragment key={index}>
               <AngleRight className={angleClassName} />
               <Piece path={piece.path} className={piece.className}>
                  {piece.children}
               </Piece>
            </Fragment>
         ))}
      </div>
   )
}

export default Breadcrumbs
