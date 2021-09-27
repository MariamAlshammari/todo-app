import React, { useState } from 'react';

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {

    const [items, setItems] = useState(3);
    const [show, setShow] = useState('Ascending');
    const [sort, setSort] = useState(false);
    const state = {
        items,
        show ,
        sort ,
        setItems,
        setShow,
        setSort
    }

   

    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}