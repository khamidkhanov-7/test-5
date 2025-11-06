import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg">
                NM
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{t('site.title')}</h3>
                <p className="text-sm text-gray-400">{t('site.subtitle')}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('hero.subtitle').substring(0, 150)}...
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">{t('nav.contacts')}</h4>
            <div className="space-y-3">
              <a
                href={`tel:${t('footer.phone')}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{t('footer.phone')}</span>
              </a>
              <a
                href={`mailto:${t('footer.email')}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{t('footer.email')}</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>{t('footer.address')}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">{t('nav.services')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">
                  {t('products.valves')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">
                  {t('products.actuators')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">
                  {t('products.taps')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">
                  {t('products.shutters')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            {currentYear} {t('site.title')}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
