import logoText from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-10 pb-8 sm:pt-16 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-8 sm:pb-12 border-b md:border-b-0 border-gray-100">
          
        
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="flex items-center gap-2">
             <img src={logoText} alt="logo" />
            </div>

            <p className="text-slate-400 text-sm max-w-xs sm:max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 pt-1">
              <a href="#" className="hover:text-[#D14DB2] transition-colors">GitHub</a>
              <span className="text-slate-300">•</span>
              <a href="#" className="hover:text-[#D14DB2] transition-colors">Twitter</a>
              <span className="text-slate-300">•</span>
              <a href="#" className="hover:text-[#D14DB2] transition-colors">LinkedIn</a>
            </div>
          </div>

         
          <div className="hidden md:grid md:col-span-7 grid-cols-3 gap-6">
            
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                PRODUCT
              </h3>
              <ul className="space-y-3 text-xs text-slate-400 font-medium">
                <li><a href="#" className="hover:text-slate-700 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-slate-700 transition-colors">Technologies</a></li>
                <li><a href="#" className="hover:text-slate-700 transition-colors">Projects</a></li>
              </ul>
            </div>

            
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                COMPANY
              </h3>
              <ul className="space-y-3 text-xs text-slate-400 font-medium">
                <li><a href="#" className="hover:text-slate-700 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-slate-700 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-slate-700 transition-colors">Careers</a></li>
              </ul>
            </div>

           
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                LEGAL
              </h3>
              <ul className="space-y-3 text-xs text-slate-400 font-medium">
                <li><a href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-slate-700 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="md:border-t border-gray-100 pt-6 md:pt-8 flex flex-row items-center justify-between text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#D14DB2] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;