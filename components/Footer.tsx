import Container from './Container';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
              Doc2<span className="text-teal-600">Deutsch</span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-slate-500">
              The premier German language institute designed exclusively for Indian doctors. 
              We bridge the linguistic gap between medical expertise and German clinical excellence.
            </p>
            <div className="mt-8 flex gap-4">
              {['LinkedIn', 'Instagram', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-teal-600 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Platform</h3>
            <ul className="mt-6 space-y-4 text-sm font-medium text-slate-500">
              <li><Link href="/courses" className="hover:text-teal-600 transition-colors">Courses</Link></li>
              <li><Link href="/roadmap" className="hover:text-teal-600 transition-colors">Roadmap</Link></li>
              <li><Link href="/trainers" className="hover:text-teal-600 transition-colors">Trainers</Link></li>
              <li><Link href="/blog" className="hover:text-teal-600 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Get in Touch</h3>
            <div className="mt-6 space-y-4">
              <a 
                href="mailto:info@doc2deutsch.com" 
                className="group block p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:border-teal-200 hover:bg-teal-50 transition-all"
              >
                <p className="text-[10px] font-black uppercase tracking-widest text-teal-600">Email Us</p>
                <p className="text-sm font-bold text-slate-900">info@doc2deutsch.com</p>
              </a>
              <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Location</p>
                <p className="text-sm font-bold text-slate-900">Ernakulam, Kerala, India</p>
              </div>
            </div>
          </div>

          {/* Column 4: Interactive Map (Colorful -> B&W on Hover) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6">Our Location</h3>
            <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-md border border-slate-100 group">
              <iframe
                title="Doc2Deutsch Location"
                /* Standard Ernakulam View - Replace with your business embed link */
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.71217735397!2d76.22359489726563!3d9.970591000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514ab0996b%3A0x70658344d53eb11!2sErnakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709110000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full grayscale-0 group-hover:grayscale transition-all duration-700 ease-in-out"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-16 rounded-3xl bg-slate-900 p-8 sm:p-10">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-black uppercase tracking-widest text-teal-400 mb-2">Legal Disclaimer</p>
              <p className="text-sm leading-relaxed text-slate-400">
                Doc2Deutsch provides German language training exclusively for medical communication. 
                We do not provide FSP coaching, visa sponsorship, job placement, or licensing (Approbation) exam support. 
                Always refer to official German health authorities for regulatory requirements.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-4">
               <span className="text-4xl grayscale opacity-50">🇮🇳</span>
               <span className="text-4xl">🇩🇪</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-xs font-medium text-slate-500">
            © {new Date().getFullYear()} Doc2Deutsch. Professional Medical German Education.
          </p>
          <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;