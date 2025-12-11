import { useState, useEffect } from 'react';
import { Sparkles, Clock, Leaf, Heart, Star, Shield, CheckCircle2, ChevronRight, Eye, TrendingDown, Ban, Cloud, AlertTriangle, Smile, Droplets, Zap, Book, Calendar, Timer } from 'lucide-react';
import antesDepois from './assets/Antes-e-Depois-1.jpg';
import fotoBonus1 from './assets/Foto-do-Bonus-1.png';
import antesDepois2 from './assets/Antes-e-Depois-2.png';
import antesDepois3 from './assets/Antes-e-Depois-3.jpg';
import antesDepois4 from './assets/Antes-e-Depois-4.png';
import depoimento from './assets/depoimento.png';
import fotoProduto1 from './assets/Foto-do-Produto-1.png';
import fotoProduto2 from './assets/Foto-do-Produto-2.png';
import fotoProduto3 from './assets/Foto-do-Produto-3.png';

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [bonusIndex, setBonusIndex] = useState(0);
  const INITIAL_COUNTDOWN = 2 * 3600 + 47 * 60 + 54;
  const [countdown, setCountdown] = useState(INITIAL_COUNTDOWN);
  const [allowRender, setAllowRender] = useState(false);
  const offerDate = new Intl.DateTimeFormat('pt-BR').format(new Date());

  const beforeAfterImages = [
    antesDepois,
    antesDepois2,
    antesDepois3,
    antesDepois4,
    '/4%20d.png',
    '/5d.png',
    '/6d.png'
  ];

  const scrollingImages = [...beforeAfterImages, ...beforeAfterImages];

  const bonusItems = [
    {
      label: 'BÔNUS 1',
      img: '/b1.png',
      title: '72 HORAS SEM OLHEIRA',
      what: 'Um protocolo de emergência que reduz olheiras, inchaço e marcas ao redor dos olhos em apenas 3 dias.',
      why: 'A área dos olhos é onde o envelhecimento aparece primeiro e quando ela rejuvenesce, o rosto inteiro parece mais jovem.',
      bullets: ['Compressa de efeito lifting', 'Máscara natural para clareamento', 'Rotina anti-inchaço', 'Guia de aplicação e frequência'],
      value: 'R$ 47,00'
    },
    {
      label: 'BÔNUS 2',
      img: '/b2.png',
      title: 'Detox Facial Coreano 48h',
      what: 'Um protocolo de desintoxicação que limpa poros, remove impurezas e prepara sua pele para absorver melhor o Método Pele Coreana 7D.',
      why: 'Pele limpa = melhor absorção = efeito mais rápido da máscara coreana.',
      bullets: ['Máscara de limpeza profunda', 'Ritual calmante de chá verde', 'Guia de frequência ideal'],
      value: 'R$ 39,00'
    },
    {
      label: 'BÔNUS 3',
      img: fotoBonus1,
      title: 'Rotina Caseira Para Todos os Tipos de Pele',
      what: 'Um guia completo com receitas naturais, hidratantes, tônicos e rotinas para manter sua pele bonita todos os dias.',
      why: 'Garante que você mantenha os efeitos do Método Pele Coreana 7D por semanas e semanas.',
      bullets: ['Rotina para pele oleosa', 'Rotina para pele seca', 'Máscaras naturais', 'Tônicos caseiros', 'Dicas práticas de manutenção'],
      value: 'R$ 59,00'
    }
  ];

  const redirectToCheckout = () => {
    window.location.href = 'https://www.ggcheckout.com/checkout/v2/khqYeQkb1NdZ8UmRtoFd';
  };

  const scrollToOfferSection = () => {
    const target = document.getElementById('offer-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const evaluateAccess = () => {
      const host = window.location.hostname;
      const isLocalhost = host === 'localhost' || host === '127.0.0.1' || host === '::1';
      const ua = navigator.userAgent || '';
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
      const isSmallViewport = window.innerWidth <= 900;
      const isMobile = isMobileUA || isSmallViewport;

      setAllowRender(isMobile || isLocalhost);
    };

    evaluateAccess();
    window.addEventListener('resize', evaluateAccess);
    return () => window.removeEventListener('resize', evaluateAccess);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const host = window.location.hostname;
    const isLocalhost = host === 'localhost' || host === '127.0.0.1' || host === '::1';
    if (isLocalhost) return;

    const preventContextMenu = (event: Event) => {
      event.preventDefault();
    };

    const blockInspectShortcuts = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const blocked =
        (event.ctrlKey && event.shiftKey && (key === 'i' || key === 'j' || key === 'c')) ||
        key === 'f12' ||
        (event.ctrlKey && key === 'u');
      if (blocked) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    window.addEventListener('contextmenu', preventContextMenu);
    window.addEventListener('keydown', blockInspectShortcuts, true);

    return () => {
      window.removeEventListener('contextmenu', preventContextMenu);
      window.removeEventListener('keydown', blockInspectShortcuts, true);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) return INITIAL_COUNTDOWN;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));
    sections.forEach((section) => section.classList.add('fade-section'));

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  if (!allowRender) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <div className="fixed top-0 left-0 right-0 z-50 text-white text-center text-sm sm:text-base font-semibold py-2 px-4 shadow-lg"
           style={{ background: 'rgba(218, 165, 32, 0.55)' }}>
        Esta oferta acaba dia {offerDate}
      </div>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pricePulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes alertBlink {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes gentlePush {
          0% { transform: translateX(0); }
          50% { transform: translateX(4px); }
          100% { transform: translateX(0); }
        }
        h1, h2, h3, h4, h5,
        .font-serif {
          font-family: 'Oswald', sans-serif !important;
          letter-spacing: 0.01em;
        }
        .card-font-reset h2,
        .card-font-reset h3,
        .card-font-reset h4 {
          font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif !important;
          letter-spacing: normal !important;
        }
        .bg-white h2,
        .bg-white h3,
        .bg-white h4 {
          font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif !important;
          letter-spacing: normal !important;
        }
        .fade-section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <main>
        <section className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute left-0 top-6 h-72 w-20 sm:h-80 sm:w-24 md:w-32 lg:w-36 overflow-hidden pointer-events-none">
            <img
              src="/esquerda1.png"
              alt="Rosto feminino à esquerda"
              loading="eager"
              decoding="async"
              className="h-full w-auto object-cover object-left"
              style={{
                transform: 'translateX(-35%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
              }}
            />
          </div>
          <div className="absolute right-0 top-6 h-72 w-20 sm:h-80 sm:w-24 md:w-32 lg:w-36 overflow-hidden pointer-events-none">
            <img
              src="/direita1.png"
              alt="Rosto feminino à direita"
              loading="eager"
              decoding="async"
              className="h-full w-auto object-cover object-right"
              style={{
                transform: 'translateX(35%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
              }}
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              ESSE É O MÉTODO COREANO QUE <span style={{ color: '#D4B98C' }}>ACABOU COM AS RUGAS</span> DE MAIS DE 15.000 BRASILEIRAS EM 7 DIAS
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Este são as técnicas importadas diretamente do país mais vaidoso do mundo adaptada para rotina das brasileiras que <span style={{ color: '#D4B98C' }}>suaviza rugas, devolve firmeza e traz o glow natural de pele jovem</span>, usando apenas ingredientes básicos que você tem em casa e um protocolo de 5 minutos por dia.
            </p>

            <div className="pt-4">
              <button
                onClick={scrollToOfferSection}
                className="bg-gradient-to-r from-gold-300 to-gold-400 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 animate-pulse shadow-gold-glow"
              >
                QUERO REJUVENESCER MINHA PELE
              </button>
              <p className="text-sm text-gray-600 mt-3">Apenas R$ 29,90: Garantia de 30 Dias + Acesso Imediato</p>
            </div>

          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              PARE TUDO POR 2 MINUTOS
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
           Você deseja em apenas 7 dias <span style={{ color: '#D4B98C' }}>rejuvenescer sua pele e deixar ela com uma aparência mais jovem, iluminada e saudável</span> sem precisar de cremes milagrosos que sustam uma fortuna e não entregam nada?
              <br />Se sua resposta for sim, então conheça o Método Pele Coreana, <span style={{ color: '#D4B98C' }}>o único método que vai estimular o colágeno natural e preencher sua pele de dentro para fora</span>. Mas antes de pensar que esse é um método qualquer. O Método Pele Coreana é um método natural, 100% comprovado científicamente, utilizado por milhões de Coreanas, que são referencias em beleza no mundo todo e que <span style={{ color: '#D4B98C' }}>ja mudou a pele de mais de 15.000 brasileiras</span>.
            </p>
            <div className="relative overflow-hidden -mx-4 sm:mx-0 rounded-none sm:rounded-2xl border-0 sm:border-2 border-gold-100 shadow-xl bg-white/70 min-h-[14rem]">
              <div
                className="flex gap-2 sm:gap-4 min-w-max"
                style={{ animation: 'marqueeScroll 28s linear infinite' }}
              >
                {scrollingImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Transformação ${index % beforeAfterImages.length + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="h-56 sm:h-48 w-64 sm:w-52 rounded-none sm:rounded-xl object-cover shadow-md flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section - Você Se Reconhece Nisso? */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center space-y-12">
            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              Você sente sua pele cada vez mais velha?
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              As <span className="text-red-600 font-semibold">rugas</span> e a <span className="text-red-600 font-semibold">perda de firmeza</span> vão aparecendo aos poucos… até que um dia você olha no espelho e percebe que não dá mais para ignorar.
            </p>

            {/* Pain Points List */}
            <div className="space-y-8 text-left max-w-2xl mx-auto card-font-reset">
              {[
                {
                  icon: Eye,
                  title: 'A cada ano, as linhas ao redor dos olhos ficam mais evidentes.',
                  desc: 'Você tenta esconder com maquiagem, mas a textura só piora.'
                },
                {
                  icon: TrendingDown,
                  title: 'A firmeza da pele não é mais a mesma.',
                  desc: 'O contorno do rosto parece "cair" um pouco mais a cada foto.'
                },
                {
                  icon: Ban,
                  title: 'Os cremes caros não entregam o que prometem.',
                  desc: 'Você aplica por semanas e nada realmente muda.'
                },
                {
                  icon: Cloud,
                  title: 'A pele está ficando sem brilho, sem viço, sem vida.',
                  desc: 'E isso afeta diretamente sua autoestima.'
                },
                {
                  icon: Clock,
                  title: 'Você sente que está envelhecendo mais rápido do que deveria.',
                  desc: 'E isso te deixa frustrada como se nada funcionasse.'
                },
                {
                  icon: AlertTriangle,
                  title: 'E o pior: quanto mais tempo passar, mais difícil será reverter.',
                  desc: 'As rugas não esperam. Elas aprofundam.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl border border-red-200 bg-white shadow-sm"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center border border-red-100">
                    <item.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="space-y-1 text-center w-full">
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro Headline */}
            <div className="space-y-6 pt-4">
              <p className="text-xl font-bold text-gray-800">
                Mas você não precisa aceitar isso, existe uma forma real de reverter esse processo.
              </p>

              {/* CTA Button */}
              <button
                onClick={redirectToCheckout}
                className="bg-gradient-to-r from-gold-300 to-gold-400 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 animate-pulse shadow-gold-glow"
              >
                QUERO REJUVENESCER MINHA PELE
              </button>
            </div>
          </div>
        </section>

        <section className="py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              INSISTIR NA MESMICE NÃO VAI DIMINUIR SUAS RUGAS
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              O problema é que as pessoas ainda tentam insistir nos mesmos caminhos que sempre falham. Todas acabam caindo na indústria da beleza com:
            </p>

            <div className="space-y-4 card-font-reset">
              {[
                {
                  title: 'Cremes caros',
                  desc: 'Que prometem trazer de volta a sua pele jovial, mas os dias passam e sua pele não muda...',
                  icon: Ban
                },
                {
                  title: 'Fazer máscaras aleatórias',
                  desc: 'Misturas caseiras sem técnica, sem constância e sem resultado real.',
                  icon: Sparkles
                },
                {
                  title: 'Comprar produtos porque a blogueira disse que funciona',
                  desc: 'Muitas influenciadoras indicam o que recebem, não o que realmente funciona.',
                  icon: Cloud
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-red-200 bg-white shadow-sm p-5 sm:p-6 flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 sm:w-12 sm:h-12 bg-red-50 rounded-full flex items-center justify-center border border-red-100">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                  </div>
                  <div className="space-y-2 text-center w-full">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-col items-center space-y-4">
              <img
                src="/dor.jpg"
                alt="Mulher sentindo dor com a pele sensível"
                loading="lazy"
                decoding="async"
                className="w-full max-w-3xl rounded-2xl object-cover shadow-lg"
              />
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  ESSES MÉTODOS FORAM CRIADOS APENAS PARA VENDER
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Essas &#39;&#39;soluções&#39;&#39; podem até fazer uma pequena diferença no seu rosto, mas não são sustentáveis a longo prazo, nem seguras. Pense quantas vezes você deixou de usar um produto porquê não fez bem para sua pele?
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-2 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">E qual a consequência disso?</h3>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                A consequência é que você acaba frustrada, desanimada e insatisfeita com sua aparência. Você perde a autoestima e até a confiança.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center space-y-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              O Efeito Lifting Natural Coreano
            </h2>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">O que é?</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                São as técnicas combinadas com rotinas naturais demonstradas no Método Pele Coreana 7D que ativa a regeneração natural da pele através de uma máscara de ação dupla, formulada para hidratar profundamente e firmar as camadas superficiais da pele em apenas alguns minutos por dia.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Por que ele é único?</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Porque combina três pilares que nenhum creme caro consegue entregar juntos:
              </p>
              <div className="space-y-4 card-font-reset">
                {[
                  {
                    title: 'Ação Instantânea de Super Hidratação',
                    desc: 'A máscara cria um microfilme sobre a pele que melhora a retenção de água e deixa o rosto imediatamente mais macio, luminoso e uniforme.',
                    icon: Droplets
                  },
                  {
                    title: 'Estimulação do Lifting Natural',
                    desc: 'Durante os 7 dias, as técnicas ativam a suavização visual das linhas finas, dando um aspecto mais firme, descansado e rejuvenescido ao rosto.',
                    icon: Zap
                  },
                  {
                    title: 'Tecnica Caseira Coreana',
                    desc: 'É inspirado em técnicas reais de skincare asiático adaptadas para o dia a dia da mulher brasileira: fácil, acessível e com resultado visível em 7 dias.',
                    icon: Leaf
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gold-100 shadow-md p-5 sm:p-6 text-left flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-gold-100 rounded-full flex items-center justify-center shadow-sm">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-500" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={redirectToCheckout}
                className="bg-gradient-to-r from-gold-300 to-gold-400 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 animate-pulse shadow-gold-glow"
              >
                QUERO REJUVENESCER MINHA PELE
              </button>
            </div>
          </div>
        </section>

        <section className="pt-4 pb-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-3">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">ATENÇÃO</h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Mas não basta apenas utilizar do Efeito Lifting Natural Coreano. Você precisa saber como fazer ele da maneira certa, para que consiga extrair o máximo de sua capacidade. Por isso, dentro do método você irá receber todas as instruções e rotinas corretas, para que você atinja o máximo de resultado possível.
          </p>
        </section>

        {/* Benefits Section - O Que Vai Acontecer Com Sua Pele */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gold-50 max-w-4xl mx-auto">
          <div className="text-center space-y-12">
            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              O Que Vai Acontecer Com Sua Pele Nos Próximos 7 Dias
            </h2>

            <div className="flex justify-center">
              <img
                src="/beneficio1.jpg"
                alt="Benefícios do método Pele Coreana 7D"
                loading="lazy"
                decoding="async"
                className="w-full max-w-2xl rounded-2xl shadow-md object-cover"
              />
            </div>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Quando você aplica o ritual coreano corretamente, os resultados são inevitáveis, mesmo se você já tentou de tudo.
            </p>

            {/* Benefits List */}
            <div className="space-y-6 sm:space-y-7 text-left max-w-2xl mx-auto card-font-reset">
              {[
                {
                  icon: Sparkles,
                  title: 'Rugas suavizadas e linhas finas menos visíveis',
                  desc: 'O ritual estimula colágeno natural e "preenche" a pele de dentro para fora.'
                },
                {
                  icon: Heart,
                  title: 'Firmeza renovada no contorno do rosto',
                  desc: 'As técnicas coreanas deixam a pele mais sustentada e com aspecto mais jovem.'
                },
                {
                  icon: Zap,
                  title: 'Glow coreano imediato e pele iluminada e viva',
                  desc: 'A fórmula de arroz + mel ativa o brilho natural da pele.'
                },
                {
                  icon: Star,
                  title: 'Textura drasticamente mais lisa',
                  desc: 'Poros mais fechados, superfície mais uniforme e toque mais macio.'
                },
                {
                  icon: Eye,
                  title: 'Olhar rejuvenescido e mais descansado',
                  desc: 'Linhas ao redor dos olhos ficam menos marcadas em poucos dias.'
                },
                {
                  icon: Droplets,
                  title: 'Pele nutrida, hidratada e com aparência mais saudável',
                  desc: 'Tudo usando ingredientes simples, sem química agressiva, sem cremes caros.'
                },
                {
                  icon: Smile,
                  title: 'Autoestima lá em cima',
                  desc: 'Quando sua pele rejuvenesce, seu rosto muda… e você também muda.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gold-100 shadow-md p-5 sm:p-6 flex gap-4 items-start hover:-translate-y-0.5 hover:shadow-lg transition duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold-300 to-gold-400 rounded-full flex items-center justify-center mt-0.5 shadow-md">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-900 text-lg leading-snug">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro Headline */}
            <div className="space-y-6 pt-4">
              <p className="text-xl font-bold text-gray-800">
                Seu rosto começa a transformar, em 7 dias você já sente a diferença no espelho.
              </p>
            </div>

            <button
              onClick={redirectToCheckout}
              className="bg-gradient-to-r from-gold-300 to-gold-400 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 animate-pulse shadow-gold-glow"
            >
              QUERO REJUVENESCER MINHA PELE
            </button>
          </div>
        </section>

        {/* Esteira de fotos 7d, 8d, 9d */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="relative overflow-hidden -mx-4 sm:mx-0 rounded-none sm:rounded-2xl border-0 sm:border-2 border-gold-100 shadow-xl bg-white/70">
            <div
              className="flex gap-2 sm:gap-4 w-max"
              style={{ animation: 'marqueeScroll 24s linear infinite' }}
            >
              {['/7d.jpg', '/8d.jpg', '/9d.jpg', '/7d.jpg', '/8d.jpg', '/9d.jpg'].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Transformação bônus ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-56 sm:h-48 w-64 sm:w-52 rounded-none sm:rounded-xl object-cover shadow-md flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center space-y-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              O Efeito Lifting Natural Coreano não é para todo mundo
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Ele é para você se:
            </p>

            <div className="space-y-4 max-w-3xl mx-auto card-font-reset">
              {[
                'Está cansada de olhar no espelho e ver novas marcas surgindo, mesmo tentando de tudo.',
                'Quer um método simples, seguro e natural, inspirado em técnicas coreanas comprovadas.',
                'Deseja uma pele mais firme, jovem e iluminada, sem procedimentos caros.',
                'Quer recuperar sua autoestima e se sentir mais bonita com a própria pele.',
                'Está pronta para ver uma transformação real em apenas 7 dias.'
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-green-200 shadow-md p-5 sm:p-6 flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-green-50 rounded-full flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-lg sm:text-xl text-gray-800 font-bold max-w-3xl mx-auto">
              Se você se identificou com esses pontos, então o Efeito Lifting Natural Coreano é para você.
Mas se não está pronta para mudar sua pele, então este método não fará diferença na sua vida.
            </p>
          </div>
        </section>

        {/* Urgency Section - Headline + Urgência */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              A Cada Dia Que Passa, Suas Rugas Aprofundam. Hoje Você Pode Começar a Reverter Isso.
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              O Método Pele Coreana 7D está disponível por tempo limitado de <span className="text-red-600 line-through decoration-red-600 decoration-2 font-bold">R$ 229,90</span> por apenas <span className="font-bold text-green-600">R$ 29,90</span>.
              <br />
             Esse valor é menor que o valor de um creme de farmácia. Aproveite enquanto essa oportunidade está liberada
            </p>

            {/* Cronômetro */}
            <div className="flex justify-center">
              <div className="bg-red-50 border border-red-200 rounded-full px-6 py-3 shadow-md inline-flex items-center gap-3">
                <Clock className="w-6 h-6 text-red-600" />
                <div className="text-red-700 font-bold text-lg">
                  {String(Math.floor(countdown / 3600)).padStart(2, '0')}:
                  {String(Math.floor((countdown % 3600) / 60)).padStart(2, '0')}:
                  {String(countdown % 60).padStart(2, '0')}
                </div>
              </div>
            </div>

            {/* Urgency Box */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
              <div className="flex flex-col items-center gap-4">
                {/* Clock Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  <Clock className="w-8 h-8 text-white" />
                </div>

                {/* Urgency Messages */}
                <div className="space-y-3 text-center">
                  <p className="text-lg font-bold text-red-700">
                    Oferta ativa somente enquanto este aviso estiver visível.
                  </p>
                  <p className="text-base font-semibold text-orange-700">
                    Preço pode voltar ao normal a qualquer momento.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-3 pt-4">
              <button
                onClick={redirectToCheckout}
                className="bg-gradient-to-r from-gold-300 to-gold-400 text-white px-8 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 animate-pulse shadow-gold-glow"
              >
                QUERO REJUVENESCER MINHA PELE AGORA
              </button>
              <p className="text-sm text-gray-600">
                (Acesso imediato ao Método Pele Coreana 7D por apenas R$ 29,90)
              </p>
            </div>
          </div>
        </section>

        <section id="offer-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center space-y-12">
            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              Tudo Que Você Vai Receber Ao Acessar o Método Pele Coreana 7D
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Um protocolo prático, organizado e fiel ao tradicional coreano, pronto para você aplicar por 7 dias e rejuvenescer sua pele de forma natural.
            </p>

            {/* Product Mockup Fan */}
            <div className="relative flex justify-center mb-8 h-64 sm:h-80 md:h-96"> {/* Adjust height as needed */}
              <img
                src={fotoProduto1}
                alt="Método Pele Coreana 7D - Imagem 1"
                loading="lazy"
                decoding="async"
                className="absolute w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto object-contain drop-shadow-xl transform -rotate-12 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:scale-110 z-10"
              />
              <img
                src={fotoProduto2}
                alt="Método Pele Coreana 7D - Imagem 2"
                loading="lazy"
                decoding="async"
                className="absolute w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto object-contain drop-shadow-xl transform rotate-0 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:scale-110 z-20"
              />
              <img
                src={fotoProduto3}
                alt="Método Pele Coreana 7D - Imagem 3"
                loading="lazy"
                decoding="async"
                className="absolute w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto object-contain drop-shadow-xl transform rotate-12 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:scale-110 z-30"
              />
            </div>

            {/* Main Product Block */}
            <div className="relative bg-gradient-to-br from-gold-50 via-white to-gold-50 rounded-3xl p-8 sm:p-12 border-2 border-gold-200 shadow-2xl">
              {/* Product Features - Detailed Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
                {[
                  { icon: Book, text: 'Efeito Lifting Natural Coreano passo a passo' },
                  { icon: Clock, text: 'Ritual diário completo de 5 minutos' },
                  { icon: Calendar, text: 'Cronograma da semana passo a passo' },
                  { icon: Timer, text: 'Guia de aplicação + tempos corretos de pausa' },
                  { icon: Sparkles, text: 'Técnica coreana de pré ativação da pele' },
                  { icon: Droplets, text: 'Água de Arroz Coreana: método tradicional' },
                  { icon: CheckCircle2, text: 'Checklist de uso e frequência' },
                  { icon: Leaf, text: 'Recomendações para cada tipo de pele' },
                  { icon: Eye, text: 'Protocolos complementares para olhos e firmeza' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/60 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-gold-300 to-gold-400 rounded-full flex items-center justify-center shadow-sm">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
              <div className="space-y-12 pt-10">
              <div className="flex justify-center">
                <div
                  className="bg-red-600 text-white text-sm font-extrabold px-6 py-3 rounded-full shadow-lg"
                  style={{ boxShadow: '0 0 0 6px rgba(239,68,68,0.2)', animation: 'alertBlink 1.4s ease-in-out infinite' }}
                >
                  ALERTA
                </div>
              </div>
              <div>
                <h2
                  className="font-serif text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 text-center"
                >
                  CONDIÇÃO ÚNICA PARA VOCÊ 
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
                 Não perca essa oportunidade de transformar sua pele. Levando hoje o método, você levará 3 bônus exclusivos que vão melhorar ainda mais seus resultados!
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl w-full min-h-[32rem]">
                  <div
                    className="flex transition-transform duration-500 ease-out w-full h-full"
                    style={{ transform: `translateX(-${bonusIndex * 100}%)` }}
                  >
                    {bonusItems.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2 flex justify-center items-stretch">
                        <div className="bg-white rounded-2xl p-6 border-2 border-gold-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full items-center text-center gap-4 max-w-xl w-full">
                          <div className="bg-gold-100 text-gold-600 font-bold text-sm py-1 px-3 rounded-full mb-2 shadow">
                            {item.label}
                          </div>
                          <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full max-w-sm h-64 object-contain block mx-auto drop-shadow-lg"
                          />
                          <h3 className="font-serif text-xl font-bold text-gray-900">
                            {item.title}
                          </h3>
                          <div className="space-y-4 flex-grow w-full">
                            <div className="text-gray-600 text-sm leading-relaxed text-center">
                              {item.what}
                            </div>
                            <div className="text-center space-y-2 w-full">
                              <p className="font-semibold text-gray-800 text-sm">Por que acelera:</p>
                              <p className="text-gray-600 text-sm">{item.why}</p>
                              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside text-left inline-block">
                                {item.bullets.map((b, i) => (
                                  <li key={i}>{b}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-100 text-center w-full">
                            <p className="text-sm text-gray-500">Valor sugerido:</p>
                            <p className="text-red-600 font-bold line-through decoration-red-600 decoration-2">{item.value}</p>
                            <p className="text-green-600 font-extrabold text-xl mt-1">GRÁTIS</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setBonusIndex((prev) => (prev - 1 + bonusItems.length) % bonusItems.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-gold-100 text-gold-700 font-semibold shadow hover:bg-gold-200 transition"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setBonusIndex((prev) => (prev + 1) % bonusItems.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-gold-100 text-gold-700 font-semibold shadow hover:bg-gold-200 transition"
                  >
                    ›
                  </button>
                </div>
                <div className="flex justify-center gap-2">
                  {bonusItems.map((_, i) => (
                    <span
                      key={i}
                      className={`h-2 w-2 rounded-full ${i === bonusIndex ? 'bg-gold-500' : 'bg-gold-200'}`}
                    />
                  ))}
                </div>
              </div>

            {/* Micro Headline & CTA */}
            <div className="space-y-6 pt-8">
              <p className="text-xl font-bold text-gray-800">
                Somando tudo, você está recebendo <span className="text-red-600 line-through decoration-red-600 decoration-2">R$ 145,00</span> em bônus gratuitamente.
              </p>

              <button
                onClick={redirectToCheckout}
                className="bg-gradient-to-r from-gold-300 to-gold-400 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 animate-pulse shadow-gold-glow"
              >
                QUERO REJUVENESCER MINHA PELE HOJE
              </button>
            </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gold-50 via-white to-gold-50">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Leve o Método Pele Coreana 7D e todos os bônus por um valor simbólico 
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Você está prestes a acessar um protocolo completo de rejuvenescimento coreano que poderia custar caro mas hoje está liberado por um valor simbólico.
              </p>
            </div>

            {/* Value Stack Card */}
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-gold-200 overflow-hidden max-w-2xl mx-auto">
              <div className="bg-gold-50 p-6 border-b border-gold-100">
                <h3 className="font-serif text-2xl font-bold text-gray-900">Resumo da Sua Oferta</h3>
              </div>

              <div className="p-8 space-y-6">
                {/* Product */}
                <div className="flex flex-col gap-2 border-b border-gray-100 pb-4 items-center text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-800 text-lg">Método Pele Coreana 7D</span>
                  </div>
                  <div>
                    <p className="text-sm text-red-600 font-bold line-through decoration-red-600 decoration-2">R$ 97,00</p>
                    <p className="font-bold text-green-600 text-xl">R$ 29,90</p>
                  </div>
                </div>

                {/* Bonus 1 */}
                <div className="flex flex-col gap-2 border-b border-gray-100 pb-4 items-center text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-800 text-lg">Bônus 72 Horas Sem Olheiras</span>
                  </div>
                  <div>
                    <p className="text-sm text-red-600 font-bold line-through decoration-red-600 decoration-2">R$ 47,00</p>
                    <p className="font-bold text-green-600 text-xl">GRÁTIS</p>
                  </div>
                </div>

                {/* Bonus 2 */}
                <div className="flex flex-col gap-2 border-b border-gray-100 pb-4 items-center text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-800 text-lg">Bônus Detox Facial Coreano 48h</span>
                  </div>
                  <div>
                    <p className="text-sm text-red-600 font-bold line-through decoration-red-600 decoration-2">R$ 39,00</p>
                    <p className="font-bold text-green-600 text-xl">GRÁTIS</p>
                  </div>
                </div>

                {/* Bonus 3 */}
                <div className="flex flex-col gap-2 pb-2 items-center text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-800 text-lg">Bônus Rotina Caseira</span>
                  </div>
                  <div>
                    <p className="text-sm text-red-600 font-bold line-through decoration-red-600 decoration-2">R$ 59,00</p>
                    <p className="font-bold text-green-600 text-xl">GRÁTIS</p>
                  </div>
                </div>

                {/* Total */}
                <div className="bg-gray-50 rounded-xl p-6 mt-6">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-600 font-medium">Valor Total:</span>
                    <span className="text-red-600 font-bold line-through decoration-red-600 decoration-2 text-lg">R$ 242,00</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-gray-900 font-bold text-xl">Você paga HOJE:</span>
                    <span className="text-4xl font-bold text-green-600" style={{ animation: 'pricePulse 1.5s ease-in-out infinite' }}>R$ 29,90</span>
                  </div>
                </div>
                {/* CTA diretamente abaixo do preço */}
                <div className="flex justify-center">
                  <button
                    onClick={redirectToCheckout}
                className="bg-gradient-to-r from-gold-300 to-gold-400 text-white px-8 py-4 rounded-full font-bold text-lg flex flex-col items-center justify-center text-center hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 animate-pulse shadow-gold-glow"
              >
                QUERO REJUVENESCER
                <span className="text-base">MINHA PELE AGORA</span>
              </button>
            </div>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-xl font-medium text-gray-800">
                Um protocolo completo de rejuvenescimento por menos do que um hidratante de farmácia.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Compra 100% Segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Pagamento Criptografado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-500" />
                  <span>Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Garantia de 30 Dias</span>
                </div>
              </div>

              <p className="text-lg font-bold text-gray-900">
                Comece hoje. Sua pele daqui a 7 dias vai te agradecer.
              </p>
            </div>
          </div>
        </section>



        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gold-50">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold-300 to-gold-400 rounded-full shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              Garantia de 30 Dias
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              Confiamos plenamente na qualidade e eficácia do Método Pele Coreana 7D. Cada etapa foi pensada para ser simples, acessível e entregar resultados reais, mesmo para quem já tentou de tudo. Por isso, você tem 30 dias para testar sem nenhum risco.<br />
              <span className="font-semibold">Simples assim.</span>
            </p>
          </div>
        </section>


        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Perguntas Frequentes
          </h2>
            <div className="space-y-4 card-font-reset">
            {[
              {
                q: 'Funciona para qualquer tipo de pele?',
                a: 'Sim! O Método Pele Coreana 7D foi criado justamente para qualquer pele. quanto mais marcada, mais perceptível é o resultado em 7 dias.'
              },
              {
                q: 'Em quanto tempo começo a ver diferença?',
                a: 'A maioria vê diferença entre 3 e 7 dias.\nPele mais lisa, mais firme e com glow imediato.'
              },
              {
                q: 'Preciso comprar produtos caros para fazer?',
                a: 'Não.\nO método usa ingredientes simples que você já tem em casa.'
              },
              {
                q: 'É só uma receita da internet?',
                a: 'Não.\nÉ um protocolo completo, organizado passo a passo, baseado no ritual coreano original — o que muda completamente o resultado.'
              },
              {
                q: 'É fácil de seguir?',
                a: 'Sim.\nO método pede apenas 5 minutos por dia e é extremamente simples.'
              },
              {
                q: 'Serve para todos os tipos de pele?',
                a: 'Sim — oleosa, seca, mista ou sensível.\nO método tem ajustes para cada tipo de pele.'
              },
              {
                q: 'O acesso é liberado na hora?',
                a: 'Sim.\nAssim que comprar, você recebe acesso imediato aos arquivos.'
              },
              {
                q: 'Funciona mesmo se eu já tentei vários cremes e nada funcionou?',
                a: 'Sim.\nA diferença é o método coreano, que age na regeneração natural da pele.'
              },
              {
                q: 'É seguro?',
                a: 'Totalmente.\nIngredientes naturais + técnicas tradicionais testadas há décadas.'
              },
              {
                q: 'Preciso ter conhecimento sobre skincare?',
                a: 'Não precisa.\nÉ literalmente um passo a passo simples para seguir.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gold-100 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gold-50/30 transition-colors"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <span className="text-gold-500 font-serif text-xl flex-shrink-0">{index + 1}.</span>
                    <h3 className="font-bold text-lg text-gray-900">{faq.q}</h3>
                  </div>
                  <ChevronRight
                    className={`w-6 h-6 text-gold-500 flex-shrink-0 transition-transform duration-300 ${openFAQ === index ? 'rotate-90' : ''}`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 ml-8 leading-relaxed whitespace-pre-line">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={redirectToCheckout}
              className="w-full sm:w-auto bg-gradient-to-r from-gold-300 to-gold-400 text-white px-8 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 animate-pulse shadow-gold-glow"
            >
              QUERO REJUVENESCER MINHA PELE
            </button>
          </div>
        </section>


      </main>

      <footer className="bg-white border-t border-gold-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-gold-400 text-shadow-white" />
              <span className="font-serif text-xl font-semibold text-gray-800">Pele Coreana 7D</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gold-400 hover:text-shadow-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-gold-400 hover:text-shadow-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-gold-400 hover:text-shadow-white transition-colors">Contato</a>
            </div>


          </div>

          <div className="mt-8 pt-8 border-t border-gold-100 text-center text-sm text-gray-500">
            <p>© 2025 Pele Coreana 7D. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
