import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

export function ContactSection() {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contacts"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('nav.contacts')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Телефон</h3>
                  <a
                    href={`tel:${t('footer.phone')}`}
                    className="text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    {t('footer.phone')}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                  <a
                    href={`mailto:${t('footer.email')}`}
                    className="text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    {t('footer.email')}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{t('footer.address')}</h3>
                  <p className="text-gray-400">{t('footer.address')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">{t('promo.title')}</h3>
              <p className="text-gray-300 mb-6">{t('promo.subtitle')}</p>
              <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-medium hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                {t('products.cta')}
              </button>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    {language === 'ru' ? 'Имя' : language === 'en' ? 'Name' : 'Ism'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder={language === 'ru' ? 'Ваше имя' : language === 'en' ? 'Your name' : 'Sizning ismingiz'}
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    {language === 'ru' ? 'Телефон' : language === 'en' ? 'Phone' : 'Telefon'}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="+998 90 123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    {language === 'ru' ? 'Сообщение' : language === 'en' ? 'Message' : 'Xabar'}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-teal-500 focus:outline-none transition-colors resize-none"
                    placeholder={language === 'ru' ? 'Ваше сообщение' : language === 'en' ? 'Your message' : 'Sizning xabaringiz'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-medium hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{language === 'ru' ? 'Отправить' : language === 'en' ? 'Send' : 'Yuborish'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showChat && (
        <button
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center z-50 animate-bounce-slow"
          onClick={() => alert(t('hero.calltext'))}
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}
    </section>
  );
}
