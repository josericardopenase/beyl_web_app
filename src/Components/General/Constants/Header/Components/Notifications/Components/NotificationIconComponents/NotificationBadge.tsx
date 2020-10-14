import React, { useContext } from 'react'
import ThemeContext from '../../../../../../../../Store/Themes/ThemeContext';

export const NotificationBadge = () => {
  
    const theme = useContext(ThemeContext);

    const style: React.CSSProperties = {
        width: "10px", 
        height: "10px", 
        backgroundColor: "red",
        position: "absolute",
        top: 0, 
        right: 0,
        borderRadius: "50%",
        border: `2px ${theme.colors.secondary} solid`
    };
  
    return <div style={style}></div>
}
