import { useSelector } from 'react-redux'
import { RootState } from '~/app/store'
import { BreadcrumbsPath } from '~/components/Breadcrumbs'

export function useBreadcrumbsSelector() {
   return useSelector<RootState, BreadcrumbsPath>((state) => state.breadcrumbs)
}
