import clsx from 'clsx';
import ContactForm from './ContactForm';
import { fontHeader } from '@/config/fonts';

const Contact = () => {

    return (
        <div className='flex flex-col-reverse sm:flex-row p-12 gap-6 bg-[#D6BD98]'>
            <div className='w-full sm:w-1/2'>
                <ContactForm />
            </div>

            <div className='w-full sm:w-1/2'>
                <div className='max-w-xl text-foreground-50'>
                    <h2 className={clsx(fontHeader.className, "font-bold text-4xl mb-3")}>
                        Contact
                    </h2>

                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </p>

                    <div className='pt-8'>
                        <p className="font-bold">
                            229-123-4567
                        </p>

                        <p className="font-bold">
                            info@youremail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;