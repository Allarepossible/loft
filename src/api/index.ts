export const fetchAuth = (email: string, password: string) =>
    fetch('https://loft-taxi.glitch.me/auth', {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(res => res.json());

interface RegisterProps {
    email: string;
    password: string;
    name: string;
    surname: string;
}

export const fetchRegister = (props: RegisterProps) =>
    fetch('https://loft-taxi.glitch.me/register', {
        method: "POST",
        body: JSON.stringify(props),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(res => res.json())
        .catch(e =>{console.log(e); return {}});

export const fetchAddressList = () =>
    fetch('https://loft-taxi.glitch.me/addressList')
        .then(res => res.json());

export const fetchCard = (token: string) =>
    fetch(`https://loft-taxi.glitch.me/card?token=${token}`)
        .then(res => res.json());

interface CardProps {
    cardNumber: string;
    name: string;
    expiryDate: string;
    cvc: string;
    token: string;
}

export const addCard = (card: CardProps) =>
    fetch('https://loft-taxi.glitch.me/card', {
        method: "POST",
        body: JSON.stringify(card),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(res => res.json());

