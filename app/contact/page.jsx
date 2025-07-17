import Script from 'next/script'
import Banner from '../../components/Banner';

const page = () => {
    return (
        <div>
            <Banner title={'Contact Me'} />
            
            <div className="hb-p-61099c9325e85f0007878f0d-9"></div>
            <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src="https://www.honeybook.com/p.png?pid=61099c9325e85f0007878f0d"
                alt=""
            />
            <Script id="honeybook-widget" strategy="afterInteractive">
                {`
                (function(h,b,s,n,i,p,e,t) {
                    h._HB_ = h._HB_ || {};
                    h._HB_.pid = i;
                    t = b.createElement(s);
                    t.type = "text/javascript";
                    t.async = true;
                    t.src = n;
                    e = b.getElementsByTagName(s)[0];
                    e.parentNode.insertBefore(t, e);
                })(window, document, "script", "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js", "61099c9325e85f0007878f0d");
                `}
            </Script>
        </div>
    );
}

export default page;