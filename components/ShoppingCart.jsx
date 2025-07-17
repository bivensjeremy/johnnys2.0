'use client'

import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/use-disclosure"
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@heroui/drawer";
import { FaBagShopping } from "react-icons/fa6";
import { useShoppingCart } from "use-shopping-cart";
import {Divider} from "@heroui/divider";
import clsx from "clsx";
import { fontHeader } from "@/config/fonts";
import { Image } from "@heroui/image";
import { FaTrashCan } from "react-icons/fa6";
import {Badge} from "@heroui/badge";
import CheckoutButton from './CheckoutButton';
import { addToast } from '@heroui/toast'

export default function ShoppingCart() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {cartCount, cartDetails, removeItem, formattedTotalPrice, redirectToCheckout} = useShoppingCart();

  const handleCheckout = async () => {
    try {
      const res = await fetch('/checkout/api/', {
        method: 'POST',
        body: JSON.stringify(cartDetails)
      })
      const { url } = await res.json();
      window.location.href = url;
    } catch (error) {
      addToast({
        title: 'err',
        description: 'toast'
      })
    }
  }

  return (
    <>
    <Badge color='danger' content={cartCount} isInvisible={cartCount === 0}>
      <Button onPress={onOpen} isIconOnly variant="light">
        <FaBagShopping size={28} />
      </Button>
    </Badge>
      
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className={clsx(fontHeader.className, "flex flex-col gap-1")}>
                Shopping Cart
                <Divider className="my-4" />
              </DrawerHeader>

              <DrawerBody>
                {cartCount === 0 ? (
                  <p className="text-center pt-24 text-large">
                    Your cart is empty
                  </p>
                ):(
                  <>
                  {Object.values(cartDetails ).map((entry) => (
                    <div key={entry.id} className="flex flex-row justify-between items-center">
                      <div className="flex flex-row gap-2 items-center">
                        <Button onPress={()=>removeItem(entry.id)} isIconOnly variant='light'>
                          <FaTrashCan size={24} />
                        </Button>

                        <Image 
                          src={entry.image}
                          alt='product image'
                          width={50}
                          // height={70}
                        />
                        <div>
                          <p className='text-lg font-bold'>{entry.name}</p>
                          <p className='text-sm'>QTY: 1</p>
                        </div>
                      </div>
                      
                      
                      <p className='text-lg font-bold'>{entry.formattedPrice}</p>
                    </div>
                  ))}
                  </>
                )}
              </DrawerBody>

              <DrawerFooter className='flex flex-col'>
                <Divider />

                <div className='flex justify-between items-center'>
                  <p>Subtotal:</p>
                  <p className='text-2xl'>{formattedTotalPrice}</p>
                </div>

                <div className='flex flex-row gap-3'>
                  {/* <CheckoutButton /> */}
                  <Button color="success" size='lg' onPress={handleCheckout} className='w-full'>
                    Checkout
                  </Button>
                </div>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
