import { Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div
              className="inline-block px-4 py-2 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-400 text-sm font-medium mb-4"
            >
              {t('site.subtitle')}
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              {t('hero.title')}
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">{t('hero.subtitle')}</p>

            <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{t('hero.cta')}</p>
                  <a
                    href="tel:+70000000000"
                    className="text-2xl font-bold text-white hover:text-teal-400 transition-colors"
                  >
                    {t('hero.phone')}
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-400">{t('hero.calltext')}</p>
            </div>

            <button className="group bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-medium text-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2">
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Pipeline Equipment"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-6 shadow-2xl animate-bounce-slow">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold">30%</div>
                  <div className="text-sm">{t('promo.subtitle')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
