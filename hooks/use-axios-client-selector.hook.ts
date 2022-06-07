import { useSelector } from 'react-redux'
import { AxiosClient } from '~/app/slices/axios-client.slice'
import { RootState } from '~/app/store'

export function useAxiosClientSelector() {
   return useSelector<RootState, AxiosClient>((state) => state.axiosclient)
}
