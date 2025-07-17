import { fontHeader } from "@/config/fonts";
import clsx from "clsx";

const Tagline = () => {
    return (
        <div className="md:py-24 py-12 text-center">
            <h2 className={clsx(fontHeader.className, 'text-5xl pb-5')}>
                Best in Fashion
            </h2>
            <p>
                Hop in the time machine & shop the best clothing of the 2000s
            </p>
        </div>
    );
}

export default Tagline;