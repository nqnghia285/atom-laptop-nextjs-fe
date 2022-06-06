/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import useLocalStorage from 'use-local-storage'
import Link from '~/components/Link'
import { IUserInfo, LSKeys } from '~/interface'
import styles from '~/styles/components/header/top-header/user/user-icon.module.css'

export interface UserIconProps {
   icon: string
}

function UserIcon({ icon }: UserIconProps) {
   const router = useRouter()
   const [profile, setProfile] = useLocalStorage<IUserInfo | null>(
      LSKeys.PROFILE,
      null
   )
   const [authorization, setAuthorization] = useLocalStorage<string | null>(
      LSKeys.AUTHORIZATION,
      null
   )
   const userIconRef = useRef<HTMLElement>(null)
   const userMenuRef = useRef<HTMLUListElement>(null)

   function handleToggleUserIcon() {
      const userMenu = userMenuRef.current
      userMenu?.classList.toggle(styles['show-user-menu'])
   }

   function handleLogout() {
      setProfile(null)
      setAuthorization(null)
      router.push('/login')
   }

   useEffect(() => {
      const userIcon = userIconRef.current
      const userMenu = userMenuRef.current

      function handleMouseDownOutside(ev: Event) {
         const element = ev.target as Element

         const hidden = element !== userIcon && !userMenu?.contains(element)

         if (hidden) {
            userMenu?.classList.remove(styles['show-user-menu'])
         }
      }

      document.addEventListener('mousedown', handleMouseDownOutside, true)

      return () => {
         document.removeEventListener('mousedown', handleMouseDownOutside, true)
      }
   }, [userIconRef, userMenuRef])

   return (
      <>
         <i
            ref={userIconRef}
            className={clsx(icon, styles['user-icon'])}
            onClick={handleToggleUserIcon}
         ></i>
         <ul ref={userMenuRef} className={styles['user-menu']}>
            <li>
               <Link path='/user/profile'>Profile</Link>
            </li>
            <li>
               <Link path='/dashboard'>Dashboard</Link>
            </li>
            {/* Send the logout request to the system and redirect to the login form */}
            <li onClick={handleLogout}>
               <a>Log out</a>
            </li>
         </ul>
      </>
   )
}

export default UserIcon
