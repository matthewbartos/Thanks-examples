import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import {ThanksWidget} from '@thanksjs/react';

const App = () => (
    <ThanksWidget
        // FIXME: this is thanksjs own Id
        partnerId="2a37e310-e0a2-46d0-b46b-0c55f902c169"
        statusText="thanks for React"
    />
)

hydrateRoot(document.getElementById('root'), <App/>);
