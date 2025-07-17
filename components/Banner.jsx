import clsx from "clsx";
import { fontHeader } from '../config/fonts';

const Banner = ({ title }) => {
    return (
        <div className="bg-primary py-20 text-center">
            <h2 className={clsx(fontHeader.className, "text-6xl font-extrabold")}>
                {title}
            </h2>
        </div>
    );
}

export default Banner;