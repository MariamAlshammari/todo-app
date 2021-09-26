import React from 'react';

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
    const state = {
        items: 3,
        show : true,
        sort :"Ascending"
    }

   

    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}