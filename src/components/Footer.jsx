import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-6 px-6" role="contentinfo">
      <div className="container mx-auto flex flex-col items-center gap-3 text-center">
        <nav className="flex items-center gap-4 text-xs text-gray-500" aria-label="Footer navigation">
          <Link to="/privacy" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
          <span className="text-white/10" aria-hidden="true">•</span>
          <Link to="/terms" className="hover:text-gray-300 transition-colors">
            Terms of Service
          </Link>
          <span className="text-white/10" aria-hidden="true">•</span>
          <Link to="/imprint" className="hover:text-gray-300 transition-colors">
            Imprint
          </Link>
          <span className="text-white/10" aria-hidden="true">•</span>
          <a 
            href="mailto:support@vami.app" 
            className="hover:text-gray-300 transition-colors"
            aria-label="Contact support via email"
          >
            Support
          </a>
        </nav>
        <p className="text-[11px] text-gray-600">
          © {currentYear} UNREP. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
