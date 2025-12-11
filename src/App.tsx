import { useState } from 'react';
import { Sparkles, Clock, Leaf, Heart, Star, Shield, CheckCircle2, ChevronRight, Eye, TrendingDown, Ban, Cloud, AlertTriangle, Smile, Droplets, Zap, Book, Calendar, Timer } from 'lucide-react';
import antesDepois from './assets/Antes-e-Depois-1.jpg';
import fotoBonus1 from './assets/Foto-do-Bonus-1.png';
import fotoBonus2 from './assets/Foto-do-Bonus-2.png';
import antesDepois2 from './assets/Antes-e-Depois-2.png';
import antesDepois3 from './assets/Antes-e-Depois-3.jpg';
import antesDepois4 from './assets/Antes-e-Depois-4.png';
import depoimento from './assets/depoimento.png';
import fotoProduto1 from './assets/Foto-do-Produto-1.png';
import fotoProduto2 from './assets/Foto-do-Produto-2.png';
import fotoProduto3 from './assets/Foto-do-Produto-3.png';

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const beforeAfterImages = [
    antesDepois,
    antesDepois2,
    antesDepois3,
    antesDepois4,
    '/4 d.png',
    '/5d.png',
    '/6d.png'
  ];

  const scrollingImages = [...beforeAfterImages, ...beforeAfterImages];

  const redirectToCheckout = () => {
    window.location.href = 'https://pay.cakto.com.br/7cn5uvv_616238';
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <main>
        <section className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute left-0 top-6 h-72 w-20 sm:h-80 sm:w-24 md:w-32 lg:w-36 overflow-hidden pointer-events-none">
            <img
              src="/esquerda1.png"
              alt="Rosto feminino à esquerda"
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
              ESSE É O MÉTODO COREANO QUE REJUVENESCEU A PELE DE MAIS DE 15.000 BRASILEIRAS EM APENAS 7 DIAS
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Este é o ritual importado diretamente do país mais vaidoso do mundo que suaviza rugas, devolve firmeza e traz o glow natural de pele jovem, usando apenas ingredientes básicos que você tem em casa e um protocolo de 5 minutos por dia.
            </p>

            <div className="pt-4">
              <button
                onClick={redirectToCheckout}
                className="bg-gradient-to-r from-gold-300 to-gold-400 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 animate-pulse shadow-gold-glow"
              >
                QUERO REJUVENESCER MINHA PELE
              </button>
              <p className="text-sm text-gray-600 mt-3">Apenas R$ 29,90 — acesso imediato ao Método Pele Coreana 7D</p>
            </div>

          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              PARE TUDO POR 2 MINUTOS
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Você deseja em apenas 7 dias rejuvenescer sua pele e deixar ela com uma aparência mais jovem, iluminada e saudável sem precisar de cremes milagrosos que sustam uma fortuna e não entregam nada?
              <br />Se sua resposta for sim, então conheça o Método Pele Coreana, o único método que vai estimular o colágeno natural e preencher sua pele de dentro para fora. Mas antes de pensar que esse é um método qualquer, pode ficar tranquila, não é nada disso. O Método Pele Coreana é um método natural, 100% comprovado científicamente, utilizado por milhões de Coreanas, que são referencias em beleza no mundo todo e que ja mudaram a pele de mais de 15.000 Brasileiras. 
            </p>
            <div className="relative overflow-hidden -mx-4 sm:mx-0 rounded-none sm:rounded-2xl border-0 sm:border-2 border-gold-100 shadow-xl bg-white/70">
              <div
                className="flex gap-2 sm:gap-4 w-max"
                style={{ animation: 'marqueeScroll 28s linear infinite' }}
              >
                {scrollingImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Transformação ${index % beforeAfterImages.length + 1}`}
                    className="h-56 sm:h-48 w-auto rounded-none sm:rounded-xl object-cover shadow-md flex-shrink-0"
                  />
                ))}
              </div>
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

            <div className="space-y-4">
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
                  className="bg-white rounded-2xl border border-red-300 shadow-md p-5 sm:p-6 flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-red-50 rounded-full flex items-center justify-center shadow-sm">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-col items-center space-y-4">
              <img
                src="/dor.jpg"
                alt="Mulher sentindo dor com a pele sensível"
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
              As rugas e a perda de firmeza vão aparecendo aos poucos… até que um dia você olha no espelho e percebe que não dá mais para ignorar.
            </p>

            {/* Pain Points List */}
            <div className="space-y-8 text-left max-w-2xl mx-auto">
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
                <div key={index} className="flex gap-4 items-start p-4 rounded-xl hover:bg-gold-50/50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center mt-1">
                    <item.icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
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

        {/* Benefits Section - O Que Vai Acontecer Com Sua Pele */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gold-50 max-w-4xl mx-auto">
          <div className="text-center space-y-12">
            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              O Que Vai Acontecer Com Sua Pele Nos Próximos 7 Dias
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Quando você aplica o ritual coreano corretamente, os resultados são inevitáveis, mesmo se você já tentou de tudo.
            </p>

            {/* Benefits List */}
            <div className="space-y-8 text-left max-w-2xl mx-auto">
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
                  title: 'Glow coreano imediato — pele iluminada e viva',
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
                <div key={index} className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/80 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-300 to-gold-400 rounded-full flex items-center justify-center mt-1 shadow-md">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro Headline */}
            <div className="space-y-6 pt-4">
              <p className="text-xl font-bold text-gray-800">
                Seu rosto começa a transformar, em 7 dias você já sente a diferença no espelho.
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

        {/* Urgency Section - Headline + Urgência */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              A Cada Dia Que Passa, Suas Rugas Aprofundam. Hoje Você Pode Começar a Reverter Isso.
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              O Método Pele Coreana 7D está disponível por tempo limitado de <span className="text-red-600 line-through decoration-red-600 decoration-2 font-bold">R$ 229,90</span> por apenas <span className="font-bold text-gold-500">R$ 29,90</span>.
              <br />
              Aproveite enquanto a oferta está liberada.
            </p>

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

        {/* Identification Section - Este Método é Para Você */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gold-50 to-white max-w-4xl mx-auto">
          <div className="text-center space-y-12">
            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              Este Método é Para Você se Deseja…
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Se você se encaixa em pelo menos 2 desses pontos, o Método Pele Coreana 7D foi feito exatamente para o seu tipo de pele e para o seu momento.
            </p>

            {/* Identification List */}
            <div className="space-y-6 text-left max-w-2xl mx-auto">
              {[
                {
                  title: 'Reduzir rugas e linhas finas visíveis em poucos dias',
                  desc: 'Sem depender de cremes caros, procedimentos ou promessas vazias.'
                },
                {
                  title: 'Recuperar a firmeza do rosto e o contorno natural da pele',
                  desc: 'Especialmente se você sente que sua pele "caiu" nos últimos anos.'
                },
                {
                  title: 'Trazer de volta o glow natural e a aparência de pele jovem',
                  desc: 'Assim como as coreanas fazem há décadas com rituais simples.'
                },
                {
                  title: 'Melhorar a textura da pele rapidamente',
                  desc: 'Deixando poros mais discretos, superfície mais lisa e toque mais macio.'
                },
                {
                  title: 'Rejuvenescer a área dos olhos',
                  desc: 'Diminuindo as linhas de expressão que mais entregam a idade.'
                },
                {
                  title: 'Usar um método simples, barato e 100% natural',
                  desc: 'Com ingredientes que você já tem em casa.'
                },
                {
                  title: 'Sentir de novo orgulho e confiança ao olhar no espelho',
                  desc: 'Porque sua pele finalmente mostra o que você sente por dentro.'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/80 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-gold-300 to-gold-400 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-900 text-lg leading-snug">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro Headline */}
            <div className="space-y-6 pt-4">
              <p className="text-xl font-bold text-gray-800">
                Se esses são os resultados que você quer, você está no lugar certo.
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

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center space-y-12">
            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              Tudo Que Você Vai Receber Ao Acessar o Método Pele Coreana 7D
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Um protocolo prático, organizado e fiel ao ritual tradicional coreano — pronto para você aplicar por 7 dias e rejuvenescer sua pele de forma natural.
            </p>

            {/* Product Mockup Fan */}
            <div className="relative flex justify-center mb-8 h-64 sm:h-80 md:h-96"> {/* Adjust height as needed */}
              <img
                src={fotoProduto1}
                alt="Método Pele Coreana 7D - Imagem 1"
                className="absolute w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto object-contain drop-shadow-xl transform -rotate-12 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:scale-110 z-10"
              />
              <img
                src={fotoProduto2}
                alt="Método Pele Coreana 7D - Imagem 2"
                className="absolute w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto object-contain drop-shadow-xl transform rotate-0 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:scale-110 z-20"
              />
              <img
                src={fotoProduto3}
                alt="Método Pele Coreana 7D - Imagem 3"
                className="absolute w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto object-contain drop-shadow-xl transform rotate-12 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:scale-110 z-30"
              />
            </div>

            {/* Main Product Block */}
            <div className="relative bg-gradient-to-br from-gold-50 via-white to-gold-50 rounded-3xl p-8 sm:p-12 border-2 border-gold-200 shadow-2xl">
              {/* Product Features - Detailed Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
                {[
                  { icon: Book, text: 'Receita oficial da Máscara Coreana 7D' },
                  { icon: Clock, text: 'Ritual diário completo de 5 minutos' },
                  { icon: Calendar, text: 'Cronograma da semana passo a passo (Dia 1 ao Dia 7)' },
                  { icon: Timer, text: 'Guia de aplicação + tempos corretos de pausa' },
                  { icon: Sparkles, text: 'Técnica coreana de "pré-ativação da pele"' },
                  { icon: Droplets, text: 'Água de Arroz Coreana — método tradicional' },
                  { icon: CheckCircle2, text: 'Checklist de uso e frequência' },
                  { icon: Heart, text: 'Ajustes para pele madura (35+)' },
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

            {/* Tangibilization List - Second Block */}
            <div className="bg-white rounded-2xl p-8 border border-gold-200 shadow-lg max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Guia completo do ritual coreano original',
                  'Passo a passo simples, direto e fácil de seguir',
                  'Técnicas coreanas de massagem antirrugas',
                  'Mapa visual da semana (checklist 7D)',
                  'Rotina de glow coreano',
                  'Ajustes especiais para rugas profundas',
                  'Protocolos extras para rejuvenescimento da área dos olhos',
                  'Explicação científica dos ingredientes naturais',
                  'Acesso imediato após a compra'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gold-300 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Headline */}
            <p className="text-xl font-bold text-gray-800 max-w-3xl mx-auto">
              O Método Pele Coreana 7D foi criado para ser direto, simples e extremamente eficaz. Você aplica hoje e já sente diferença nos próximos dias.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={redirectToCheckout}
                className="bg-gradient-to-r from-gold-300 to-gold-400 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 animate-pulse shadow-gold-glow"
              >
                QUERO REJUVENESCER MINHA PELE
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center space-y-12">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                E Ainda Recebe Tudo Isso Como Presente Hoje
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Para acelerar seus resultados e potencializar o efeito do Método Pele Coreana 7D, você recebe 3 bônus exclusivos totalmente gratuitos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Bonus 1 */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gold-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="bg-gold-100 text-gold-600 font-bold text-sm py-1 px-3 rounded-full self-center mb-4">
                  🎁 BÔNUS 1
                </div>
                <img src={fotoBonus1} alt="72 Horas Sem Olheiras" className="w-full h-48 object-contain mb-6" />
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  72 Horas Sem Olheiras
                </h3>
                <div className="text-left space-y-4 flex-grow">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">O que é:</p>
                    <p className="text-gray-600 text-sm">Um protocolo de emergência que reduz olheiras, inchaço e marcas ao redor dos olhos em apenas 3 dias.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Por que acelera:</p>
                    <p className="text-gray-600 text-sm">A área dos olhos é onde o envelhecimento aparece primeiro — e quando ela rejuvenesce, o rosto inteiro parece mais jovem.</p>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    <li>Compressa de efeito lifting</li>
                    <li>Máscara natural para clareamento</li>
                    <li>Rotina anti-inchaço</li>
                    <li>Guia de aplicação e frequência</li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500">Valor sugerido:</p>
                  <p className="text-red-600 font-bold line-through decoration-red-600 decoration-2">R$ 47,00</p>
                  <p className="text-gold-500 font-bold text-xl mt-1">Você paga: R$ 0</p>
                </div>
              </div>

              {/* Bonus 2 */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gold-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="bg-gold-100 text-gold-600 font-bold text-sm py-1 px-3 rounded-full self-center mb-4">
                  🎁 BÔNUS 2
                </div>
                <img src={fotoBonus2} alt="Detox Facial Coreano 48h" className="w-full h-48 object-contain mb-6" />
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  Detox Facial Coreano 48h
                </h3>
                <div className="text-left space-y-4 flex-grow">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">O que é:</p>
                    <p className="text-gray-600 text-sm">Um protocolo de desintoxicação que limpa poros, remove impurezas e prepara sua pele para absorver melhor o Método Pele Coreana 7D.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Por que acelera:</p>
                    <p className="text-gray-600 text-sm">Pele limpa = melhor absorção = efeito mais rápido da máscara coreana.</p>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    <li>Máscara de limpeza profunda</li>
                    <li>Ritual calmante de chá verde</li>
                    <li>Guia de frequência ideal</li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500">Valor sugerido:</p>
                  <p className="text-red-600 font-bold line-through decoration-red-600 decoration-2">R$ 39,00</p>
                  <p className="text-gold-500 font-bold text-xl mt-1">Você paga: R$ 0</p>
                </div>
              </div>

              {/* Bonus 3 */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gold-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="bg-gold-100 text-gold-600 font-bold text-sm py-1 px-3 rounded-full self-center mb-4">
                  🎁 BÔNUS 3
                </div>
                <img src={fotoBonus1} alt="Rotina Caseira Para Todos os Tipos de Pele" className="w-full h-48 object-contain mb-6" />
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  Rotina Caseira Para Todos os Tipos de Pele
                </h3>
                <div className="text-left space-y-4 flex-grow">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">O que é:</p>
                    <p className="text-gray-600 text-sm">Um guia completo com receitas naturais, hidratantes, tônicos e rotinas para manter sua pele bonita todos os dias.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Por que acelera:</p>
                    <p className="text-gray-600 text-sm">Garante que você mantenha os efeitos do Método Pele Coreana 7D por semanas e semanas.</p>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    <li>Rotina para pele oleosa</li>
                    <li>Rotina para pele seca</li>
                    <li>Máscaras naturais</li>
                    <li>Tônicos caseiros</li>
                    <li>Dicas práticas de manutenção</li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500">Valor sugerido:</p>
                  <p className="text-red-600 font-bold line-through decoration-red-600 decoration-2">R$ 59,00</p>
                  <p className="text-gold-500 font-bold text-xl mt-1">Você paga: R$ 0</p>
                </div>
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
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gold-50 via-white to-gold-50">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Leve o Método Pele Coreana 7D + Todos os Bônus Por Apenas R$ 29,90
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
                    <p className="font-bold text-gold-500 text-xl">R$ 29,90</p>
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
                    <p className="font-bold text-green-600 text-xl">R$ 0,00</p>
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
                    <p className="font-bold text-green-600 text-xl">R$ 0,00</p>
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
                    <p className="font-bold text-green-600 text-xl">R$ 0,00</p>
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
                    <span className="text-4xl font-bold text-green-600">R$ 29,90</span>
                  </div>
                </div>
                {/* CTA diretamente abaixo do preço */}
                <button
                  onClick={redirectToCheckout}
                  className="relative mx-auto w-48 h-32 bg-gradient-to-r from-gold-300 to-gold-400 text-white font-bold text-lg flex flex-col items-center justify-center text-center hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 animate-pulse shadow-gold-glow"
                  style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                >
                  QUERO REJUVENESCER
                  <span className="text-base">MINHA PELE AGORA</span>
                  <span className="block text-xs font-normal mt-1 opacity-90">Acesso imediato por R$ 29,90</span>
                </button>
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
          <div className="space-y-4">
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
