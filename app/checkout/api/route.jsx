import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY in environment');
}

export async function POST(request) {
    try {
        const body = await request.json();
        const products = Object.values(body);
        const line_items = products.map((product) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: product.name,
                    images: [product.image],
                },
                unit_amount: Math.round(product.price),
            },
            quantity: product.quantity,
        }));
        
        const headersList = request.headers;
        const origin = headersList.get('origin') || 'http://localhost:3000';

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items,
            success_url: `${origin}/checkout/success`,
            cancel_url: `${origin}/shop`,
            shipping_address_collection: {
                allowed_countries: ['US'], // customize as needed
            },
            billing_address_collection: 'required',
        });
        
        return NextResponse.json({ url: session.url });
            } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
