import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import { Shield, DollarSign, ArrowRight } from 'lucide-react';

export function AboutSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
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
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">{t('about.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">{t('about.text1')}</p>
              <p className="text-lg">{t('about.text2')}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{t('about.feature1')}</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{t('about.feature2')}</h3>
                </div>
              </div>
            </div>

            <button className="group bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-medium text-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2">
              <span>{t('about.cta')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Equipment"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Pipeline"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src="https://images.pexels.com/photos/162568/steel-pipes-in-a-rack-unit-162568.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Industrial"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src="https://images.pexels.com/photos/4488662/pexels-photo-4488662.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Equipment Detail"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
