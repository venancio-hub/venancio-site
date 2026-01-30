import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Award, CheckCircle, Clock, BookOpen, Monitor, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Training = () => {
  // Rich SEO Content for Training
  const seoContent = {
    introTitle: "Capacitação Profissional e Treinamentos Normativos (NR)",
    introText: "A Venancio Consultoria é referência em treinamentos de Segurança do Trabalho em Macaé, Rio das Ostras e Duque de Caxias. Oferecemos cursos presenciais, semipresenciais e 100% online (EAD) com validade jurídica. Nossos instrutores são engenheiros e técnicos altamente qualificados para ministrar cursos de NR-10 (Elétrica), NR-35 (Altura), NR-33 (Espaço Confinado), NR-12 (Máquinas) e CIPA (NR-05).",
    methodologyTitle: "Metodologia de Ensino e Certificação",
    methodologyText: "Nossa plataforma EAD permite que sua empresa capacite colaboradores em todo o Brasil com flexibilidade. Para treinamentos práticos (como NR-35 e Brigada de Incêndio), dispomos de centro de treinamento em Macaé ou realizamos In-Company na sua sede no Rio de Janeiro e região. Todos os certificados são assinados por responsáveis técnicos e possuem rastreabilidade via QR Code."
  };

  const courses = [
    {
      id: "nr35",
      code: "NR-35",
      title: "Trabalho em Altura",
      duration: "08 horas",
      type: "Normativo",
      modalities: ["Presencial", "EAD / Online"],
      description: "Curso obrigatório para trabalhos acima de 2,00m. Aborda análise de risco, EPIs, e resgate. Atende empresas de construção e manutenção em Macaé.",
      topics: ["Análise de Risco (AR)", "Sistemas de Ancoragem", "Nós e Amarrações", "Trauma de Suspensão"]
    },
    {
      id: "nr10",
      code: "NR-10",
      title: "Segurança em Eletricidade",
      duration: "40 horas",
      type: "Normativo",
      modalities: ["Presencial", "Semipresencial", "EAD"],
      description: "Segurança em instalações e serviços com eletricidade. Essencial para eletricistas e mantenedores prediais/industriais.",
      topics: ["Riscos Elétricos", "Combate a Incêndio", "Primeiros Socorros", "Arc Flash e Choque"]
    },
    {
      id: "nr33",
      code: "NR-33",
      title: "Espaços Confinados",
      duration: "16h / 40h",
      type: "Normativo",
      modalities: ["Presencial", "Semipresencial"],
      description: "Para vigias e trabalhadores autorizados. Foco em medição de gases, ventilação e permissão de entrada (PET) em indústrias.",
      topics: ["Detecção de Gases", "Ventilação e Purga", "Equipamentos de Resgate", "Deveres do Vigia"]
    },
    {
      id: "nr05",
      code: "NR-05",
      title: "CIPA - Comissão Interna",
      duration: "20 horas",
      type: "Gestão",
      modalities: ["Presencial", "EAD"],
      description: "Treinamento para cipeiros e designados. Mapeamento de riscos, inspeções de segurança e prevenção de acidentes.",
      topics: ["Mapa de Risco", "Investigação de Acidentes", "Campanhas de Segurança", "SIPAT"]
    },
    {
      id: "brigada",
      code: "BRIGADA",
      title: "Brigada de Incêndio",
      duration: "08 a 20h",
      type: "Emergência",
      modalities: ["Presencial"],
      description: "Formação de brigadistas conforme NBR 14276 e COSCIP/RJ. Combate a princípios de incêndio e primeiros socorros.",
      topics: ["Classes de Incêndio", "Extintores e Hidrantes", "RCP e DEA", "Abandono de Área"]
    },
    {
      id: "nr12",
      code: "NR-12",
      title: "Segurança em Máquinas",
      duration: "08 a 16h",
      type: "Normativo",
      modalities: ["Presencial", "In-Company"],
      description: "Capacitação para operação segura de máquinas e equipamentos. Foco em proteções, parada de emergência e bloqueio.",
      topics: ["Proteções Fixas e Móveis", "Dispositivos de Intertravamento", "Procedimentos de Trabalho"]
    }
  ];

  const schedule = useMemo(() => {
    const today = new Date();
    const classes = [];
    const templates = [
      { course: "NR-35 Trabalho em Altura", daysAdd: 2, time: "08:00 - 17:00", location: "Centro de Treinamento - Macaé", status: "Aberto", type: "Presencial" },
      { course: "NR-10 Básico (Reciclagem)", daysAdd: 3, time: "Início Imediato", location: "Plataforma Online", status: "Aberto", type: "EAD" },
      { course: "CIPA (NR-05) Designado", daysAdd: 5, time: "18:00 - 22:00", location: "Online (Ao vivo)", status: "Últimas Vagas", type: "Online" },
      { course: "Brigada de Incêndio", daysAdd: 7, time: "09:00 - 18:00", location: "In-Company (RJ)", status: "Agendar", type: "Presencial" },
      { course: "NR-33 Espaços Confinados", daysAdd: 10, time: "08:00 - 17:00", location: "Macaé - RJ", status: "Sob Demanda", type: "Presencial" }
    ];

    templates.forEach(template => {
      const classDate = new Date(today);
      classDate.setDate(today.getDate() + template.daysAdd);
      classes.push({ ...template, date: classDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }) });
    });
    return classes;
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": courses.map((course, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": course.title,
      "description": course.description,
      "provider": {
        "@type": "Organization",
        "name": "Venancio Consultoria",
        "sameAs": "https://venancioconsult.com.br"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": course.modalities.join(", ")
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Treinamentos NR | Cursos de Seguranca do Trabalho | Venancio</title>
        <meta name="description" content="Treinamentos NR e cursos de Seguranca do Trabalho. Atendimento in company. Solicite orcamento com Venancio Consultoria." />
        <meta name="keywords" content="Curso NR-10, Curso NR-35, Treinamento CIPA, Brigada de Incêndio Macaé, Segurança do Trabalho EAD, NR-33, NR-12" />
        <link rel="canonical" href="https://venancioconsult.com.br/training" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section className="relative bg-[#1a3a52] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img className="w-full h-full object-cover" alt="Treinamento de segurança do trabalho NR-35" src="https://images.unsplash.com/photo-1656256874355-0e15ff726286" />
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#FFD700] text-[#1a3a52] px-4 py-1.5 rounded-full font-bold text-sm mb-6">
            <Award className="w-4 h-4" /> <span>Certificação Válida em Todo Brasil</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Treinamentos de <span className="text-[#FFD700]">Segurança do Trabalho (NRs)</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Cursos de NR-10, NR-35, CIPA e Brigada. Capacite sua equipe em Macaé, Rio de Janeiro ou Online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' })} className="bg-[#FFD700] text-[#1a3a52] font-semibold px-8 py-6 text-lg">Próximas Turmas</Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1a3a52] px-8 py-6 text-lg bg-transparent" onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}>Catálogo de Cursos</Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">{seoContent.introTitle}</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-justify mb-8">{seoContent.introText}</p>
            <div className="bg-[#f8f9fa] p-8 rounded-xl border-l-4 border-[#FFD700]">
              <h3 className="text-xl font-bold text-[#1a3a52] mb-4">{seoContent.methodologyTitle}</h3>
              <p className="text-gray-600 text-justify">{seoContent.methodologyText}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-12 text-center">Nossos Cursos Normativos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col">
                <div className="bg-[#1a3a52] p-4 flex justify-between items-center text-white">
                  <span className="font-bold text-lg">{course.code}</span>
                  <span className="bg-[#FFD700] text-[#1a3a52] text-xs font-bold px-3 py-1 rounded-full">{course.type}</span>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-2">{course.title}</h3>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {course.modalities.map(m => <span key={m} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 font-bold">{m}</span>)}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 mb-4 text-sm"><Clock className="w-4 h-4" /> {course.duration}</div>
                  <p className="text-gray-600 mb-6 text-sm">{course.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#1a3a52] mb-3 text-sm flex items-center gap-2"><BookOpen className="w-4 h-4" /> Conteúdo:</h4>
                    <ul className="space-y-2">
                      {course.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600"><CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-6 pt-0"><Link to="/contact"><Button className="w-full bg-[#1a3a52] text-white">Orçamento</Button></Link></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-8 text-center">Agenda de Treinamentos - Próximas Turmas</h2>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
             <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#1a3a52] text-white">
                    <tr><th className="py-4 px-6 text-left">Curso</th><th className="py-4 px-6 text-left">Data</th><th className="py-4 px-6 text-left">Local</th><th className="py-4 px-6 text-center">Status</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {schedule.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-[#1a3a52]">{item.course}</td>
                        <td className="py-4 px-6 text-gray-600 flex items-center gap-2"><Calendar className="w-4 h-4 text-[#FFD700]"/> {item.date}</td>
                        <td className="py-4 px-6 text-gray-600"><div className="flex items-center gap-2">{item.type === 'EAD' || item.type === 'Online' ? <Monitor className="w-4 h-4 text-blue-500"/> : <MapPin className="w-4 h-4 text-red-500"/>} {item.location}</div></td>
                        <td className="py-4 px-6 text-center"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">{item.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1B5E20] text-white text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold mb-4">Treinamentos In-Company</h2>
           <p className="mb-8 text-lg max-w-2xl mx-auto">Levamos a estrutura completa de treinamento para sua empresa em Macaé, Rio das Ostras e região.</p>
           <Link to="/budget-request"><Button className="bg-[#FFD700] text-[#1a3a52] font-bold px-8 py-6 text-lg">Solicitar Proposta In-Company</Button></Link>
        </div>
      </section>
    </>
  );
};

export default Training;