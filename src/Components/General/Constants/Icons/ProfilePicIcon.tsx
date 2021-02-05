import React from 'react'

export default function ProfilePicIcon({size, url} : any) {
    return (

            <img src={url} style={{width: size, height: size, borderRadius: "50%", objectFit: "cover"}}></img>

    )
}
