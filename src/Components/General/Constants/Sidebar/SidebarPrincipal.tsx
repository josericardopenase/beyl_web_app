import React from 'react'
import { FaComment, FaFire, FaHome, FaCog } from 'react-icons/fa'
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
            url: '/config',
            icon: <FaCog/>,
            name: 'chats'
        },


        ]}

        />

    )
}
