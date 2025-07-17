import { Link } from "@heroui/link";


const Footer = () => {
    return (
        <footer className="w-full flex items-center justify-center py-3">
			<Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://blueprintwebdev.com"
                title="BlueprintWebDev.com homepage"
            >
				<span className="text-default-600 text-xs">Powered by</span>
				<p className="text-primary text-sm">Bivens Blueprint, LLC</p>
			</Link>
		</footer>
    );
}

export default Footer;