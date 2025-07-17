'use client'
import { CartProvider as USCProvider } from "use-shopping-cart";

const CartProvider = ({ children }) => {
    return (
        <USCProvider 
            mode="payment" 
            cartMode="client-only" 
            stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
            successUrl="http://localhost:3000/checkout/success"
            // cancelUrl="https://bivensblueprint.com"
            currency="USD"
            allowedCountries={['US']}
            billingAddressCollection={true}
            shouldPersist={true}
            language="en-US"
        >
            {children}
        </USCProvider>
    );
}

export default CartProvider;