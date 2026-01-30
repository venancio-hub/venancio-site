import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, Building } from 'lucide-react';

const clinicRegions = [
  {
    region: "Região Sul",
    states: [
      { name: "Paraná", clinics: 25 },
      { name: "Santa Catarina", clinics: 20 },
      { name: "Rio Grande do Sul", clinics: 30 }
    ],
    totalClinics: 75
  },
  {
    region: "Região Sudeste",
    states: [
      { name: "São Paulo", clinics: 120 },
      { name: "Rio de Janeiro", clinics: 85 },
      { name: "Minas Gerais", clinics: 60 },
      { name: "Espírito Santo", clinics: 15 }
    ],
    totalClinics: 280
  },
  {
    region: "Região Centro-Oeste",
    states: [
      { name: "Mato Grosso", clinics: 18 },
      { name: "Mato Grosso do Sul", clinics: 12 },
      { name: "Goiás", clinics: 25 },
      { name: "Distrito Federal", clinics: 15 }
    ],
    totalClinics: 70
  },
  {
    region: "Região Nordeste",
    states: [
      { name: "Bahia", clinics: 40 },
      { name: "Pernambuco", clinics: 25 },
      { name: "Ceará", clinics: 20 },
      { name: "Maranhão", clinics: 15 },
      { name: "Paraíba", clinics: 10 },
      { name: "Rio Grande do Norte", clinics: 12 },
      { name: "Alagoas", clinics: 8 },
      { name: "Sergipe", clinics: 6 },
      { name: "Piauí", clinics: 8 }
    ],
    totalClinics: 144
  },
  {
    region: "Região Norte",
    states: [
      { name: "Amazonas", clinics: 15 },
      { name: "Pará", clinics: 18 },
      { name: "Rondônia", clinics: 8 },
      { name: "Tocantins", clinics: 10 },
      { name: "Acre", clinics: 5 },
      { name: "Amapá", clinics: 4 },
      { name: "Roraima", clinics: 3 }
    ],
    totalClinics: 63
  }
];

const HomeClinics = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">Rede de Clínicas Credenciadas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cobertura nacional para exames ocupacionais (ASO) com atendimento em Macaé, Rio de Janeiro e principais capitais.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicRegions.map((region, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="bg-[#1a3a52] p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#FFD700]" />
                  <h3 className="font-bold text-lg">{region.region}</h3>
                </div>
                <span className="bg-[#FFD700] text-[#1a3a52] text-xs font-bold px-2 py-1 rounded-full">{region.totalClinics} Clínicas</span>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {region.states.map((state, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                      <span className="text-gray-700 font-medium">{state.name}</span>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Building className="w-3 h-3" />
                        <span>{state.clinics}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-block bg-[#e8f5e9] border border-[#1B5E20] rounded-lg p-6 max-w-3xl">
            <div className="flex flex-col md:flex-row items-center gap-4 text-[#1B5E20]">
              <Truck className="w-10 h-10 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-lg mb-1">Unidades Móveis de Audiometria e RX</h4>
                <p>Levamos a clínica até sua empresa. Realize exames periódicos in-company em Macaé, Campos e região.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HomeClinics);