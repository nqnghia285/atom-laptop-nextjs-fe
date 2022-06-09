import { useEffect } from 'react'
import useLocalStorage from 'use-local-storage'
import { IUserInfo, LSKeys } from '~/interface'
import { client } from '~/utilities/apollo-client'

export async function useAuthenticateUser() {
   const [profile, setProfile] = useLocalStorage<IUserInfo | null>(
      LSKeys.PROFILE,
      null
   )

   const [remember, setRemember] = useLocalStorage<boolean | null>(
      LSKeys.REMEMBER,
      null
   )

   useEffect(() => {
      if (!remember && profile) {
         setProfile(null)
         setRemember(false)
         client.query.logout()
      }
   }, [profile, remember, setProfile, setRemember])
}
