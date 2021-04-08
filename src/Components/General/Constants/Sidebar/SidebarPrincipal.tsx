import React from 'react'
import { FaComment, FaFire, FaHome, FaCog } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import { Sidebar } from './Sidebar'

export const SidebarPrincipal = () => {
    return (
        <Sidebar

        construction = {[

        {
            url: '/home',
            icon: <FaHome/>,
            name: 'home'
        },
        {
            url: '/training',
            icon: <FaFire/>,
            name: 'fire'
        },
        {
            url: '/library',
            icon: <ImBooks/>,
            name: 'library'
        },
        {
            url: '/chat',
            icon: <FaComment/>,
            name: 'chat'
        },

        ]}

        />

    )
}
