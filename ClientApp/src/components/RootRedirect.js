import React from 'react';

export const RedirectRoot = () => {
    const redirectUrl = `${window.location.protocol}//${window.location.host}/home`;
    console.log(redirectUrl);
    window.location.replace(redirectUrl);
    return null;
}
