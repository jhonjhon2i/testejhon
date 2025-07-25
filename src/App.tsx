import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Heart, Users, Brain, Sparkles, Star, MessageCircle, Shield, Video, Calendar, CheckCircle, ChevronDown, ChevronUp, Instagram } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Como funciona a terapia?",
      answer: "A terapia é um processo de autoconhecimento onde você terá um espaço seguro para falar sobre suas questões. Através da abordagem sistêmica familiar, trabalharemos juntas para identificar padrões que afetam suas emoções e comportamentos, buscando soluções e transformações positivas em sua vida."
    },
    {
      question: "A terapia é confidencial?",
      answer: "Sim, absolutamente. Todo o processo terapêutico é regido pelo sigilo profissional estabelecido pelo Código de Ética da Psicologia. Suas informações são tratadas com total confidencialidade e nunca serão compartilhadas sem seu consentimento expresso."
    },
    {
      question: "Como são realizadas as sessões online?",
      answer: "As sessões online são realizadas através de videochamadas seguras e confidenciais. Você pode participar do conforto de sua casa, mantendo a mesma qualidade e eficácia da terapia presencial. É necessário apenas uma conexão estável com a internet e um dispositivo com câmera."
    },
    {
      question: "Qual a duração de cada sessão?",
      answer: "Cada sessão tem duração de 50 minutos. A frequência é geralmente semanal, mas pode ser ajustada conforme suas necessidades e disponibilidade. O importante é manter a regularidade para obter melhores resultados no processo terapêutico."
    },
    {
      question: "Quanto tempo dura o processo terapêutico?",
      answer: "O tempo varia conforme cada pessoa e suas necessidades específicas. Algumas questões podem ser trabalhadas em poucos meses, enquanto outras podem necessitar de um processo mais longo. Sempre respeitamos seu ritmo e reavaliamos o progresso periodicamente."
    },
    {
      question: "Aceita convênios médicos?",
      answer: "Atualmente trabalho como particular, mas forneço recibos que podem ser utilizados para reembolso em alguns planos de saúde. Consulte seu convênio sobre a cobertura para psicoterapia e os procedimentos para reembolso."
    }
  ];

  const whatsappNumber = "5538998059506";
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta com a Dra. Marisa Alves.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-slate-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Marisa Alves</h1>
                <p className="text-sm text-blue-600">Psicóloga Clínica - Abordagem Sistêmica</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Sobre</a>
              <a href="#especialidades" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Especialidades</a>
              <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Benefícios</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Depoimentos</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">FAQ</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contato</a>
            </nav>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg font-medium"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Ocean Wave Background */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 w-full h-40" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#e0f2fe" fillOpacity="0.4" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#bfdbfe" fillOpacity="0.5" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#93c5fd" fillOpacity="0.6" d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-200">
                Terapia Online e Presencial
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Você não precisa enfrentar tudo só<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">!</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Acolhimento, escuta e transformação para uma vida mais leve. 
                Juntos, encontraremos caminhos para seu bem-estar e crescimento pessoal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Agendar Primeira Consulta</span>
                </a>
                {/* Botão "Saiba Mais" direcionando para a seção "Sobre" */}
                <a href="#sobre" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all">
                  Saiba Mais
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-full blur opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
                <img 
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Dra. Marisa Alves dos Santos" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white text-lg font-semibold">Dra. Marisa Alves</p>
                  <p className="text-white/90 text-sm">Psicóloga Clínica CRP 04/74656</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 120" className="w-full h-24 fill-white">
            <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre Mim</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Sou Marisa Alves, psicóloga clínica em Montes Claros, especialista em saúde mental, com formação em Psicologia e Contabilidade. Atuo com a abordagem sistêmica familiar, que considera o ser humano em sua totalidade, dentro de seus contextos emocionais, relacionais e sociais.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Realizo atendimentos presenciais e online, acolhendo adultos que buscam mais equilíbrio emocional, autoconhecimento, produtividade consciente, alívio do estresse e transformação pessoal.

                Meu trabalho é voltado especialmente para quem enfrenta ansiedade, sobrecarga emocional e dificuldades nas relações pessoais, familiares ou profissionais. Com uma escuta qualificada, empatia e olhar sistêmico, ajudo a identificar padrões que influenciam comportamentos, emoções e decisões, muitas vezes de forma inconsciente.

              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Através da terapia, é possível ressignificar vivências, fortalecer sua autonomia emocional e construir uma vida com mais leveza, clareza e bem-estar.
Acredito que cada pessoa carrega em si um enorme potencial de transformação — e minha missão é caminhar ao seu lado nessa jornada de reconexão consigo mesma.

              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 border border-blue-100 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Formação Acadêmica</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Graduação em Psicologia</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Graduação em Contabilidade</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Especialização em Abordagem Sistêmica Familiar</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-6 border border-amber-100 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Localização & Atendimento</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">R. Correia Machado, 1025 - Sala 708<br />Centro, Montes Claros - MG</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Video className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-gray-700">Atendimento Online e Presencial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="py-20 bg-gradient-to-b from-blue-50 via-slate-50 to-white relative overflow-hidden">
        {/* Subtle texture background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Desafios que Ajudo a Tratar</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especializo-me em ajudar pessoas a superarem desafios emocionais e encontrarem equilíbrio em suas vidas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Brain className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ansiedade</h3>
              <p className="text-gray-600 leading-relaxed">
                Tratamento especializado para ansiedade generalizada, ataques de pânico e preocupações excessivas que afetam o dia a dia.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-green-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Heart className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sobrecarga Emocional</h3>
              <p className="text-gray-600 leading-relaxed">
                Suporte para lidar com estresse emocional, burnout, pressões do trabalho e sobrecarga do dia a dia.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-purple-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Users className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dificuldades Relacionais</h3>
              <p className="text-gray-600 leading-relaxed">
                Terapia familiar e de casal para melhorar comunicação, resolver conflitos e fortalecer vínculos.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-orange-100">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Sparkles className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Estagnação Profissional</h3>
              <p className="text-gray-600 leading-relaxed">
                Superação de bloqueios pessoais e profissionais, desenvolvimento de autoconhecimento e crescimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-20 bg-white relative overflow-hidden">
        {/* Subtle wave pattern */}
        <div className="absolute top-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" className="w-full h-24 fill-blue-50 opacity-50">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefícios da Terapia</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como a terapia pode transformar sua vida e relacionamentos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-all">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clareza Emocional</h3>
              <p className="text-gray-600 leading-relaxed">
                Desenvolva maior consciência sobre seus sentimentos, reações emocionais e padrões de comportamento.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-all">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Autoestima Fortalecida</h3>
              <p className="text-gray-600 leading-relaxed">
                Construa uma relação mais saudável consigo mesmo, aumente sua confiança e valorize suas qualidades.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-all">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vínculos Saudáveis</h3>
              <p className="text-gray-600 leading-relaxed">
                Aprenda a estabelecer e manter relacionamentos mais equilibrados e saudáveis em todas as áreas da vida.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-all">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Relacionamentos Melhores</h3>
              <p className="text-gray-600 leading-relaxed">
                Melhore a comunicação e a qualidade de seus relacionamentos pessoais, familiares e profissionais.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-all">
                <Sparkles className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Autonomia Fortalecida</h3>
              <p className="text-gray-600 leading-relaxed">
                Desenvolva maior segurança para tomar decisões importantes e assumir o controle de sua vida.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-all">
                <CheckCircle className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Equilíbrio Interior</h3>
              <p className="text-gray-600 leading-relaxed">
                Alcance um estado de maior estabilidade emocional, leveza e bem-estar em seu dia a dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-gradient-to-b from-blue-50 via-slate-50 to-blue-50 relative overflow-hidden">
        {/* Ocean foam effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-cyan-200 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-white rounded-full blur-lg"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Depoimentos</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja o que minhas clientes dizem sobre nossa jornada juntas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic leading-relaxed">
                "Dra. Marisa me ajudou a encontrar clareza em momentos muito difíceis. 
                Sua abordagem acolhedora e sistêmica fez toda a diferença no meu processo de cura e autoconhecimento."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">A</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Ana Paula</p>
                  <p className="text-sm text-gray-500">Empresária, 32 anos</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic leading-relaxed">
                "Finalmente consegui estabelecer vínculos mais saudáveis em meus relacionamentos. 
                O atendimento online foi perfeito para minha rotina corrida, sem perder a qualidade."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">M</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Mariana</p>
                  <p className="text-sm text-gray-500">Advogada, 28 anos</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic leading-relaxed">
                "Minha ansiedade diminuiu significativamente após começar a terapia. 
                Sinto-me mais confiante, com maior autonomia e no controle da minha vida."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">J</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Juliana</p>
                  <p className="text-sm text-gray-500">Professora, 35 anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white relative overflow-hidden">
        {/* Subtle sand dunes */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" className="w-full h-24 fill-amber-50 opacity-30">
            <path d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,64C672,75,768,85,864,85.3C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-100/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-20 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        {/* Ocean waves at bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" className="w-full h-24 fill-blue-900 opacity-30">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Conversar?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-white to-cyan-200 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Estou aqui para ajudá-la a dar o primeiro passo em direção ao seu bem-estar emocional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Entre em Contato</h3>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  {/* Link de telefone para WhatsApp */}
                  <a href="https://wa.me/5538998059506" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:underline">(38) 99805-9506</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Instagram</p>
                  {/* Link para o Instagram */}
                  <a href="https://www.instagram.com/marisaalvespsi" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:underline">@marisaalvespsi</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Endereço</p>
                  {/* Link para o Google Maps */}
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Rua+Correia+Machado,+1025,+Sala+708,+Centro,+Montes+Claros+-+MG" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-100 hover:underline"
                  >
                    <p className="text-blue-100">R. Correia Machado, 1025 - Sala 708</p>
                    <p className="text-blue-100">Centro, Montes Claros - MG</p>
                    <p className="text-blue-100">CEP: 39400-090</p>
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Horário de Atendimento</p>
                  <p className="text-blue-100">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-blue-100">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Agende sua Consulta</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Pronta para começar sua jornada de autoconhecimento e crescimento pessoal? 
                Entre em contato comigo e vamos conversar sobre como posso ajudá-la.
              </p>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-white to-cyan-50 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-50 hover:to-cyan-100 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Conversar no WhatsApp</span>
              </a>
              
              <div className="mt-4 text-center">
                <p className="text-blue-100 text-sm">
                  Clique acima!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 relative overflow-hidden">
        {/* Subtle wave pattern */}
        <div className="absolute top-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" className="w-full h-12 fill-gray-700 opacity-20">
            <path d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,16C672,11,768,21,864,26.7C960,32,1056,32,1152,26.7C1248,21,1344,11,1392,5.3L1440,0L1440,60L1392,60C1344,60,1248,60,1152,60C1056,60,960,60,864,60C768,60,672,60,576,60C480,60,384,60,288,60C192,60,96,60,48,60L0,60Z"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Marisa Alves</h3>
                  <p className="text-gray-400 text-sm">Psicóloga Clínica</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Especializada em abordagem sistêmica familiar, ajudando as pessoas 
                a encontrarem equilíbrio emocional, clareza e crescimento pessoal.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#especialidades" className="hover:text-white transition-colors">Especialidades</a></li>
                <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>R. Correia Machado, 1025 - Sala 708</li>
                <li>Centro, Montes Claros - MG</li>
                <li>(38) 99805-9506</li>
                <li>@marisaalvespsi</li>
                <li>CRP 04/74656</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Marisa Alves - Psicóloga Clínica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 animate-pulse"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;