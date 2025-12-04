import { Sparkles, Clock, Leaf, Heart, Star, Gift, Shield, CheckCircle2, ChevronRight } from 'lucide-react';
import antesDepois from './assets/Antes-e-Depois-1.jpg';
import fotoBonus1 from './assets/Foto-do-Bonus-1.png';
import fotoBonus2 from './assets/Foto-do-Bonus-2.png';
import fotoProduto1 from './assets/Foto-do-Produto-1.png';
import fotoProduto2 from './assets/Foto-do-Produto-2.png';
import fotoProduto3 from './assets/Foto-do-Produto-3.png';
import antesDepois2 from './assets/Antes-e-Depois-2.png';
import antesDepois3 from './assets/Antes-e-Depois-3.jpg';
import antesDepois4 from './assets/Antes-e-Depois-4.png';
import depoimento from './assets/depoimento.png';

function App() {
  const redirectToCheckout = () => {
    window.location.href = 'https://pay.cakto.com.br/7cn5uvv_616238';
  };



  return (
    <div className="min-h-screen bg-white">
      <main className="pt-8">
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Novo Método Coreano Está Eliminando Marcas de Expressão em 7 Dias. Sem Cremes Caros, Sem Botox e Usando Só o Que Você Já Tem em Casa!
            </h1>

            <img src={antesDepois} alt="Antes e Depois" className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg my-8" />

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Essa máscara facial coreana virou febre entre especialistas de skincare no mundo todo  e você só precisa de 5 minutos por dia e ingredientes simples e de facil acesso.
            </p>

            <div className="pt-4">
              <button
                onClick={redirectToCheckout}
                className="bg-gradient-to-r from-gold-300 to-gold-400 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 animate-pulse shadow-gold-glow"
              >
                <span className="flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  APAGAR MINHAS IMPERFEIÇÕES AGORA!
                </span>
              </button>
            </div>

            <img src={depoimento} alt="Depoimento" className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mt-8" />
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center space-y-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              Conheça Seu Novo Ritual de Beleza!
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-6">
              O Método Pele Coreana 7D é uma máscara facial simples, rápida e altamente eficaz, revelada por coreanas reconhecidas mundialmente pela pele firme, lisa e naturalmente jovem.
              <br /><br />
              Você aprende um processo fácil, seguro e totalmente guiado, que pode ser feito em casa em poucos minutos por dia. O método foi criado para reduzir marcas de expressão, melhorar a firmeza da pele e devolver o brilho que você sente que perdeu com o tempo.
              <br /><br />
              É um ritual prático, acessível e pensado para mulheres reais, que querem resultados visíveis sem depender de rotinas longas ou produtos caros.
            </p>
            <div className="relative h-96 my-8 flex justify-center items-center">
              <img src={fotoProduto1} alt="Produto 1" className="absolute w-auto h-full object-contain transform -rotate-12 -translate-x-8 hover:z-10 hover:scale-110 transition-transform duration-300" />
              <img src={fotoProduto2} alt="Produto 2" className="absolute w-auto h-full object-contain transform pointer-events-none" />
              <img src={fotoProduto3} alt="Produto 3" className="absolute w-auto h-full object-contain transform rotate-12 translate-x-8 hover:z-10 hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="relative bg-gradient-to-br from-gold-50 via-white to-gold-50 rounded-3xl p-8 sm:p-12 border-2 border-gold-200 shadow-xl">
              <div className="text-center space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                  Benefícios Comprovados
                </h2>

                <div className="grid grid-cols-1 gap-4 text-center max-w-2xl mx-auto pt-4">
                  {[
                    {
                      icon: Sparkles,
                      title: 'Redução Visível das Marcas de Expressão em 7 Dias!',
                    },
                    {
                      icon: Heart,
                      title: 'Hidratação Profunda',
                    },
                    {
                      icon: Leaf,
                      title: 'Ingredientes Naturais',
                    },
                    {
                      icon: Clock,
                      title: 'Adaptado à sua Rotina!',
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center justify-center gap-3">
                      <div className="w-6 h-6 bg-gold-300 rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{benefit.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={redirectToCheckout}
                className="bg-gradient-to-r from-gold-300 to-gold-400 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 animate-pulse shadow-gold-glow"
              >
                <span className="flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  APAGAR MINHAS IMPERFEIÇÕES AGORA!
                </span>
              </button>
            </div>

            <div className="bg-gold-50 rounded-2xl p-8 sm:p-12 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
                Este Método Foi Feito Para Você?
              </h2>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-300 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Funciona para qualquer tipo de pele?</h3>
                  <p className="text-gray-700 leading-relaxed">Sim! O método foi desenvolvido para se adaptar a todos os tipos de pele.</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-300 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Posso fazer com ingredientes comuns?</h3>
                  <p className="text-gray-700 leading-relaxed">Com certeza! Todos os ingredientes são fáceis de encontrar, e você provavelmente já tem tudo em casa.</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-300 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Em quanto tempo vejo os resultados?</h3>
                  <p className="text-gray-700 leading-relaxed">As mudanças são visíveis entre 3 e 7 dias, com resultados ainda melhores após 2 a 4 semanas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center space-y-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              Como esta técnica funciona?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Esta é a técnica inventada por mulheres coreanas, agora disponível para brasileiras que se recusam a envelhecer. O método acelera a regeneração celular com ativos naturais e cria um efeito tensor imediato, suavizando marcas de expressão sem depender de cremes caros ou promessas de influenciadores. São apenas 5 minutos por dia para enganar o espelho, os anos e quem duvidava que você poderia rejuvenescer.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gold-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              Testado e Aprovado por Mulheres Reais!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <img src={antesDepois2} alt="Antes e Depois 2" className="w-full h-auto rounded-2xl shadow-lg" />
              <img src={antesDepois3} alt="Antes e Depois 3" className="w-full h-auto rounded-2xl shadow-lg" />
              <img src={antesDepois4} alt="Antes e Depois 4" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-gold-50 via-white to-gold-50 rounded-3xl p-8 sm:p-12 border-2 border-gold-200 shadow-xl">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-gold-300 to-gold-400 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Gift className="w-5 h-5" />
                <span className="font-semibold">Bônus Exclusivo</span>
              </div>
            </div>

            <div className="text-center space-y-6 mt-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Rotina Caseira para Todos os Tipos de Pele
              </h2>

              <div className="relative h-64 my-8 flex justify-center items-center">
                <img src={fotoBonus1} alt="Bônus 1" className="absolute w-auto h-full object-contain transform -rotate-6 hover:rotate-0 hover:scale-110 transition-transform duration-300" />
                <img src={fotoBonus2} alt="Bônus 2" className="absolute w-auto h-full object-contain transform rotate-6 hover:rotate-0 hover:scale-110 transition-transform duration-300" />
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Guia com receitas específicas para peles secas e oleosas, com ingredientes que você já tem em casa. Ao adquirir o Pele de Porcelana 7D, você recebe nosso material completo de forma totalmente gratuita!
              </p>
              <div className="text-sm text-gray-600">
                <span className="line-through">De R$21,90</span> por <span className="font-bold text-gold-400 animate-pulse">R$00,00</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center max-w-2xl mx-auto pt-4">
                {[
                  'Soluções 100% caseiras',
                  'Máscaras e esfoliantes simples',
                  'Rotinas personalizadas',
                  'Resultados visíveis em dias'
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center gap-3">
                    <div className="w-6 h-6 bg-gold-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cta-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gold-50">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-gold-200 p-8 sm:p-12 text-center space-y-8">
              <div className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Últimas Unidades com Desconto
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Comece Sua Transformação Hoje!
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl text-gray-400 line-through font-oswald">R$ 69,90</span>
                  <span className="text-5xl font-bold text-gold-400 text-shadow-white font-oswald animate-scale-pulse">R$ 36,90</span>
                </div>
                <p className="text-gray-600">Acesso imediato + bônus gratuito</p>
              </div>

              <button onClick={redirectToCheckout} className="w-full sm:w-auto bg-gradient-to-r from-gold-300 to-gold-400 text-white px-6 py-3 rounded-full font-bold text-xl hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 animate-pulse shadow-gold-glow">
                <span className="flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  APAGAR MINHAS IMPERFEIÇÕES AGORA!
                </span>
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gold-400 text-shadow-white" />
                  <span>Pagamento 100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 text-shadow-white" />
                  <span>Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gold-400 text-shadow-white" />
                  <span>Garantia de 30 Dias</span>
                </div>
              </div>
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
              Confiamos plenamente na qualidade e eficácia do Método Pele de Porcelana 7D. Cada etapa foi pensada para ser simples, acessível e entregar resultados reais, mesmo para quem já tentou de tudo. Por isso, você tem 30 dias para testar sem nenhum risco.<br />
              <span className="font-semibold">Simples assim.</span>
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gold-100">
          <div className="max-w-7xl mx-auto flex justify-center">
            <button
              onClick={redirectToCheckout}
              className="w-full bg-gradient-to-r from-gold-300 to-gold-400 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-2xl hover:from-gold-400 hover:to-gold-400 transition-all duration-300 mb-8 animate-pulse shadow-gold-glow transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <Sparkles className="w-5 h-5 mr-2" />
                APAGAR MINHAS IMPERFEIÇÕES AGORA!
              </span>
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gold-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-gold-400 text-shadow-white" />
              <span className="font-serif text-xl font-semibold text-gray-800">Pele de Porcelana 7D</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gold-400 hover:text-shadow-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-gold-400 hover:text-shadow-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-gold-400 hover:text-shadow-white transition-colors">Contato</a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/556193711943"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gold-400 hover:text-shadow-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="text-sm font-medium">Suporte via WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gold-100 text-center text-sm text-gray-500">
            <p>© 2025 Pele de Porcelana 7D. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;