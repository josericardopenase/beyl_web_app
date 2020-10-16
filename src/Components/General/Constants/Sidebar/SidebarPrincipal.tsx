import React from 'react'
import { FaComment, FaFire, FaHome } from 'react-icons/fa'
import { Sidebar } from './Sidebar'

export const SidebarPrincipal = () => {
    return (
        <Sidebar

        construction = {[

        {
            url: '/',
            icon: <FaHome/>,
            name: 'home'
        },
        {
            url: '/clients',
            icon: <FaFire/>,
            name: 'fire'
        },
        {
            url: '/chats',
            icon: <FaComment/>,
            name: 'chats'
        },


        ]}

        />

    )
}
