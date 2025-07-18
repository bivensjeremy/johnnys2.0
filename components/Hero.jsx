import { fontText, fontTitle } from "@/config/fonts";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import clsx from "clsx";

const Hero = () => {
    return (
        <section className="min-h-screen bg-cover bg-center bg-[url('/wallpaper.jpg')]">
            <div className="my-auto min-h-screen text-center bg-black bg-opacity-40 flex flex-col justify-center ">
                
                <h1 className={clsx(fontTitle.className, `text-5xl md:text-9xl py-8 text-zinc-50`)}>
                    Johnny's
                </h1>

                <h2 className='font-bold text-xl'>
                    Bivens Blueprint Template Website
                </h2>

                {/* <div>
                    <Button
                        as={Link}
                        color="primary"
                        size="lg"
                        radius="sm"
                        href="https://www.honeybook.com/widget/bivens_blueprint_llc_191523/cf_id/612fa0a4ceb19b0e829a228d"
                        variant="solid"
                        // className="text-white"
                        >
                        Get This Design
                    </Button>
                </div> */}
            </div>
        </section>
    );
}

export default Hero;
