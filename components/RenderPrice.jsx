'use client'
import { formatCurrencyString } from "use-shopping-cart";

const RenderPrice = ({ price }) => {
    return formatCurrencyString({ value: price, currency: 'USD'});
}

export default RenderPrice;