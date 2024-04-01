import {configureThanksWidget, displayThanksWidget} from '@thanksjs/web'

const queryParams = new URLSearchParams(window.location.search);
configureThanksWidget({
    // FIXME: this is thanksjs own Id
    partnerId:"2a37e310-e0a2-46d0-b46b-0c55f902c169",
    statusText: 'Order confirmed: Thanks Demo',
    email: ({ encode }) => encode(queryParams.get('email')),
    // embeddedInto: document.getElementById('thanks-widget'),
    items: [
        {
            name: 'Colourful stacking glass set',
            category: 'gifts',
            value: 42,
            currency: 'AUD',
        },
    ],

    onDisplay: () => {
        console.log('widget displayed');
    },
    onClose: () => {
        console.log('widget closed');
    },

    onPersonalInformationRequest(subject, info) {
        console.log('request PII');
        const email = queryParams.get('email');
        return email
            ? {
                email,
                firstName: 'TestUser',
            }
            : undefined;
    },
});

displayThanksWidget();