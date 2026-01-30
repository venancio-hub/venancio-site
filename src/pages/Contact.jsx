import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, FileText, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { supabase } from '@/lib/customSupabaseClient';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { buttonVariants } from '@/styles/buttonStyles';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguageContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });

  // SEO Content
  const seoContent = {
    introTitle: "Fale com Nossos Especialistas em Segurança do Trabalho",
    introText: "Está precisando regularizar sua empresa? Solicite um orçamento para elaboração de PGR, PCMSO, LTCAT ou Laudos de Insalubridade. Nossa equipe de engenheiros e médicos do trabalho está pronta para atender em Macaé, Rio das Ostras, Duque de Caxias, Rio de Janeiro e Campos dos Goytacazes."
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contact_submissions').insert([formData]);
      if (error) throw error;
      
      try { await supabase.functions.invoke('send-email-notification', { body: { type: 'CONTACT_FORM', data: formData } }); } catch (e) { console.warn(e); }

      toast({ title: "Mensagem Enviada!", description: "Entraremos em contato em breve.", duration: 3000 });
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      toast({ title: "Erro", description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const locations = [
    { city: "Macaé", title: "Matriz Operacional", fullAddress: "Av. Nossa Senhora da Glória, 1181 - Praia Campista, Macaé - RJ, 27920-360", phone: "+55 21 99254-4623", email: "comercial@venancioconsult.com.br", mapQuery: "Av. Nossa Senhora da Glória, 1181 - Praia Campista, Macaé - RJ" },
    { city: "Duque de Caxias", title: "Unidade Baixada", fullAddress: "Avenida Governador Leonel de Moura Brizola, 999 - Centro - Duque de Caxias - RJ, 25070-000", phone: "+55 21 99254-4623", email: "comercial@venancioconsult.com.br", mapQuery: "Avenida Governador Leonel de Moura Brizola, 999 - Centro - Duque de Caxias - RJ" },
    { city: "Rio das Ostras", title: "Base Região dos Lagos", fullAddress: "Rod. Amaral Peixoto, 4557 - Centro, Rio das Ostras - RJ, 28890-000", phone: "+55 21 99254-4623", email: "comercial@venancioconsult.com.br", mapQuery: "Rod. Amaral Peixoto, 4557 - Centro, Rio das Ostras - RJ" },
    { city: "Rio de Janeiro", title: "Escritório Comercial", fullAddress: "Centro Empresarial Mourisco, Praia de Botafogo, 228 - Botafogo, RJ", phone: "+55 21 99254-4623", email: "comercial@venancioconsult.com.br", mapQuery: "Praia de Botafogo, 228 - Botafogo, Rio de Janeiro - RJ" },
    { city: "Campos dos Goytacazes", title: "Base Norte Fluminense", fullAddress: "Av. Pelinca, 116 - Parque Centro, Campos dos Goytacazes - RJ", phone: "+55 21 99254-4623", email: "comercial@venancioconsult.com.br", mapQuery: "Av. Pelinca, 116 - Parque Centro, Campos dos Goytacazes - RJ" }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Venancio Consultoria",
    "url": "https://venancioconsult.com.br/contact",
    "contactPoint": { "@type": "ContactPoint", "telephone": "+55-21-99254-4623", "contactType": "customer service", "areaServed": "BR", "availableLanguage": "Portuguese" },
    "subOrganization": locations.map(loc => ({
      "@type": "LocalBusiness",
      "name": `Venancio Consultoria - ${loc.city}`,
      "address": { "@type": "PostalAddress", "streetAddress": loc.fullAddress, "addressLocality": loc.city, "addressRegion": "RJ", "addressCountry": "BR" },
      "telephone": loc.phone
    }))
  };

  return (
    <>
      <Helmet>
        <title>Contato Venancio Consultoria SST | Solicite Orcamento</title>
        <meta name="description" content="Entre em contato com Venancio Consultoria SST. Solicite orcamento para servicos de Saude e Seguranca do Trabalho." />
        <meta name="keywords" content="Contato Segurança do Trabalho, Orçamento PGR Macaé, Telefone Venancio Consultoria, Endereço Duque de Caxias" />
        <link rel="canonical" href="https://venancioconsult.com.br/contact" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section className="bg-[#1a3a52] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fale Conosco</h1>
          <p className="text-xl text-gray-300">Solicite seu orçamento de SST para Macaé, Rio e todo o Brasil.</p>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">{seoContent.introTitle}</h2>
            <p className="text-gray-600 mb-6">{seoContent.introText}</p>
            <BudgetRequestFormModal 
              trigger={
                <Button className={buttonVariants.primary}>
                  <FileText className="w-5 h-5 mr-2" /> Solicitar Orçamento Formal
                </Button>
              } 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {locations.map((loc, index) => (
              <motion.div key={loc.city} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto bg-gray-200 relative min-h-[250px]">
                  <iframe title={`Map ${loc.city}`} width="100%" height="100%" className="absolute inset-0 border-0" loading="lazy" src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}></iframe>
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-2 flex items-center gap-2"><MapPin className="w-5 h-5 text-[#FFD700]" /> {loc.city}</h3>
                  <p className="text-xs font-semibold text-[#FFD700] bg-[#1a3a52] inline-block px-2 py-1 rounded mb-4 w-fit">{loc.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{loc.fullAddress}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#1a3a52]" /><a href={`tel:${loc.phone}`} className="text-sm hover:text-[#FFD700]">{loc.phone}</a></div>
                    <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#1a3a52]" /><a href={`mailto:${loc.email}`} className="text-sm hover:text-[#FFD700] break-all">{loc.email}</a></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="bg-[#f9fafb] p-8 md:p-10 rounded-2xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">Envie uma Mensagem Rápida</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><label className="block text-sm font-bold text-[#1a3a52] mb-2">Nome *</label><input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" placeholder="Seu nome" /></div>
                    <div><label className="block text-sm font-bold text-[#1a3a52] mb-2">Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" placeholder="Seu email" /></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><label className="block text-sm font-bold text-[#1a3a52] mb-2">Telefone</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" placeholder="Seu telefone" /></div>
                    <div><label className="block text-sm font-bold text-[#1a3a52] mb-2">Empresa</label><input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" placeholder="Nome da empresa" /></div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#1a3a52] mb-2">Assunto *</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg">
                      <option value="">Selecione um assunto</option>
                      <option value="Orçamento PGR/PCMSO">Orçamento PGR / PCMSO / LTCAT</option>
                      <option value="Treinamentos">Cotação de Treinamentos</option>
                      <option value="Parceria">Parceria Comercial</option>
                      <option value="Outros">Outros Assuntos</option>
                    </select>
                  </div>
                  <div><label className="block text-sm font-bold text-[#1a3a52] mb-2">Mensagem *</label><textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border rounded-lg resize-none" placeholder="Como podemos ajudar?" /></div>
                  <Button type="submit" disabled={isSubmitting} className={buttonVariants.secondary + " w-full"}>{isSubmitting ? "Enviando..." : "Enviar Mensagem"}</Button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-[#1a3a52] text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-[#FFD700]" /> Horário de Atendimento</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-white/10 pb-2"><span>Seg-Sex</span><span className="font-semibold text-[#FFD700]">08:00 - 18:00</span></li>
                  <li className="flex justify-between border-b border-white/10 pb-2"><span>Sábado</span><span className="font-semibold text-[#FFD700]">09:00 - 13:00</span></li>
                </ul>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm opacity-80 mb-1">Plantão 24h (Emergências)</p>
                  <p className="text-2xl font-bold text-[#FFD700]">+55 21 99254-4623</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;