import React, { useContext, useState, useEffect } from 'react';

import { SettingsContext } from './settingsContext';

export default function Saving() {
  const site = useContext(SettingsContext);

  function changeHandler(e) {
    if (e.target.name == 'items') {
        site.setItems(e.target.value);
      localStorage.setItem('items', e.target.value);
    }
    if (e.target.name == 'show') {
        site.setShow(e.target.value);
      localStorage.setItem('show', e.target.value);
    }
  }
  useEffect(() => {
    const myItems = parseInt(localStorage.getItem('items'));
    const shows = localStorage.getItem('show');
    site.setItems(myItems);
    site.setShow(shows);
  }, []);
  return (
    <>
       <div>
      <h2>TO DO Settings :</h2>
      <>
        {/* <h1>{site.title}</h1>
        <div>
          <a target="_blank" href={`https://twitter.com/${site.twitter}`}>
            @{site.twitter}
          </a>
        </div> */}
        <div>
          {/* items,
        show ,
        sort ,
        setItem,
        setShow,
        setSort */}
          <input
            type="Number"
            value={site.items}
            name='items'
            onChange={changeHandler}
          />

          {/* show */}
          <input
            type="text"
            value={site.show}
            name='show'
            onChange={changeHandler}
          />
        </div>
      </>
      {/* <h2>Current Mode: {site.sort}</h2> */}
    </div>
  );
    </>
  );
}