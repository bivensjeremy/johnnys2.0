'use client'

import { Link } from "@heroui/link";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu} from "@heroui/navbar";
import { useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { Button } from '@heroui/button';
import clsx from "clsx";
import { fontTitle } from "@/config/fonts";
import ShoppingCart from './ShoppingCart';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
    <Navbar className="py-6" maxWidth="full" shouldHideOnScroll>
        <NavbarBrand>
            <Link href="/" color="foreground" onClick={() => setIsMenuOpen(false)}>
                <div className="pl-1">
                    <p className={clsx(fontTitle.className, "font-bold text-inherit text-3xl")}>Johnny's</p>
                    {/* <p className="text-md">Web Developer</p> */}
                </div>
            </Link>
        </NavbarBrand>

        {/* Web Navigation */}
        <NavbarContent className="hidden md:flex gap-4" justify="center">
            <NavbarItem>
                <Link href="/" color="foreground" isBlock>
                    Home
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="/shop" color="foreground" isBlock>
                    Shop
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="/about" color="foreground" isBlock>
                    About
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="/contact" color="foreground" isBlock>
                    Contact Me
                </Link>
            </NavbarItem>
        </NavbarContent>

        {/* Mobile Navigation */}
        <NavbarContent justify="end" className="flex md:hidden gap-4">
            <NavbarMenu className="text-center pt-24">
                <NavbarItem>
                    <Link href="/" color="foreground" isBlock>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/shop" color="foreground" isBlock>
                        Shop
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/about" color="foreground" isBlock>
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/contact" color="foreground" isBlock>
                        Contact Me
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='https://www.honeybook.com/widget/bivens_blueprint_llc_191523/cf_id/612fa0a4ceb19b0e829a228' isBlock color="foreground">
                        Get a Website
                    </Link>
                </NavbarItem>
            </NavbarMenu>
        </NavbarContent>

        <NavbarContent justify="end" >
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <NavbarItem className="hidden md:flex gap-4">
                <Button as={Link} color='secondary' href="https://www.honeybook.com/widget/bivens_blueprint_llc_191523/cf_id/612fa0a4ceb19b0e829a228" isBlock>
                    Get a Website
                </Button>
            </NavbarItem>
            
            <NavbarItem>
                <ShoppingCart />
            </NavbarItem>
        </NavbarContent>
    </Navbar>
    );
}
