import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ChevronLeft, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/styles/buttonStyles';

const WhatsAppChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversationState, setConversationState] = useState('greeting'); // greeting, submenu, input, sending
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);
  const [userMessage, setUserMessage] = useState('');
  const [hasError, setHasError] = useState(false);
  const messagesEndRef = useRef(null);

  // Phone Numbers
  const defaultPhoneNumber = "5521992544623";
  const financialPhoneNumber = "5521992633016";

  // Script Configuration
  const script = {
    greeting: {
      text: "Olá! Seja bem-vindo à Venancio Consultoria. Sou seu assistente virtual. 🤖\n\nPor favor, escolha uma das opções abaixo para que eu possa direcionar seu atendimento:",
      options: [
        { id: 'commercial', label: 'Comercial e Orçamentos', icon: '💰' },
        { id: 'support', label: 'Suporte Técnico', icon: '🛠️' },
        { id: 'sst', label: 'Consultoria em SST', icon: '📋' },
        { id: 'financial', label: 'Financeiro', icon: '📄' },
        { id: 'general', label: 'Dúvidas Gerais', icon: 'ℹ️' }
      ]
    },
    submenus: {
      commercial: {
        text: "Entendi, você deseja falar com nosso setor Comercial. Sobre qual assunto seria?",
        options: [
          { id: 'new_quote', label: 'Novo Orçamento' },
          { id: 'proposal_followup', label: 'Acompanhar Proposta' },
          { id: 'partnership', label: 'Parcerias' }
        ]
      },
      support: {
        text: "Certo, Suporte Técnico. Como podemos ajudar você hoje?",
        options: [
          { id: 'system_access', label: 'Acesso ao Sistema' },
          { id: 'training_platform', label: 'Plataforma de Treinamentos' },
          { id: 'technical_issue', label: 'Relatar Problema' }
        ]
      },
      sst: {
        text: "Consultoria Técnica em SST. Qual é o foco da sua dúvida?",
        options: [
          { id: 'esocial', label: 'Envios ao eSocial' },
          { id: 'docs', label: 'Documentação (PGR/PCMSO)' },
          { id: 'visit', label: 'Agendamento de Visita' }
        ]
      },
      financial: {
        text: "Departamento Financeiro. Selecione o que você precisa:",
        options: [
          { id: 'boleto', label: '2ª Via de Boleto' },
          { id: 'invoice', label: 'Nota Fiscal (NF-e)' },
          { id: 'contract', label: 'Status do Contrato' }
        ]
      },
      general: {
        text: "Para Dúvidas Gerais, por favor descreva abaixo como podemos ajudar.",
        skipSubmenu: true
      }
    },
    closing: {
      text: "Perfeito! Para finalizar, descreva brevemente sua solicitação abaixo. \n\nEm seguida, clique em 'Iniciar Chat' para falar com um de nossos especialistas."
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversationState, selectedDept, selectedSubmenu, isOpen]);

  // Error boundary effect for safe rendering
  useEffect(() => {
    try {
      if (!script || !script.greeting) {
        throw new Error("Script configuration missing");
      }
    } catch (err) {
      console.error("Chatbot Error:", err);
      setHasError(true);
    }
  }, []);

  const handleOptionSelect = (option) => {
    try {
      setSelectedDept(option);
      
      if (script.submenus[option.id]?.skipSubmenu) {
        setConversationState('input');
      } else {
        setConversationState('submenu');
      }
    } catch (error) {
      console.error("Error selecting option:", error);
      // Fallback behavior
      setConversationState('input');
    }
  };

  const handleSubmenuSelect = (option) => {
    setSelectedSubmenu(option);
    setConversationState('input');
  };

  const handleBack = () => {
    if (conversationState === 'input') {
       if (selectedDept && script.submenus[selectedDept.id]?.skipSubmenu) {
         setConversationState('greeting');
         setSelectedDept(null);
       } else {
         setConversationState('submenu');
         setSelectedSubmenu(null);
       }
    } else if (conversationState === 'submenu') {
      setConversationState('greeting');
      setSelectedDept(null);
    }
    setUserMessage('');
  };

  const handleSendToWhatsApp = () => {
    const targetNumber = (selectedDept && selectedDept.id === 'financial') ? financialPhoneNumber : defaultPhoneNumber;
    
    let text = `*Olá, iniciei o atendimento pelo site.*\n\n`;
    if (selectedDept) text += `*Departamento:* ${selectedDept.label}\n`;
    
    if (selectedSubmenu) {
      text += `*Assunto:* ${selectedSubmenu.label}\n`;
    }
    
    if (userMessage.trim()) {
      text += `*Mensagem:* ${userMessage}\n`;
    }

    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderBotMessage = (text) => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex gap-2 mb-2"
    >
      <div className="w-8 h-8 rounded-full bg-[#1a3a52] flex items-center justify-center flex-shrink-0 mt-1">
        <Bot className="w-5 h-5 text-white" />
      </div>
      <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-sm text-gray-800 shadow-sm max-w-[85%] whitespace-pre-line">
        {text}
      </div>
    </motion.div>
  );

  const renderUserSelection = (text) => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex gap-2 mb-2 justify-end"
    >
      <div className="bg-[#f0f4f8] p-3 rounded-2xl rounded-tr-none text-sm text-[#1a3a52] shadow-sm max-w-[85%] border border-gray-200">
        {text}
      </div>
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
        <User className="w-5 h-5 text-gray-600" />
      </div>
    </motion.div>
  );

  if (hasError) return null;

  return (
    <>
      {/* Floating Button - High Z-Index, Responsive Positioning */}
      <motion.button
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] bg-[#FFD700] p-0 rounded-full shadow-xl hover:shadow-2xl transition-all border-4 border-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir Chat"
      >
        {isOpen ? (
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#1a3a52] rounded-full text-white">
             <X className="w-6 h-6" />
          </div>
        ) : (
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full overflow-hidden bg-white">
             <img 
               src="https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/180607864e757360c4497be233b7be75.jpg" 
               alt="Venancio Chat"
               className="w-10 h-10 md:w-11 md:h-11 object-contain" 
             />
          </div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 w-[calc(100vw-32px)] md:w-full md:max-w-[350px] md:bottom-24 md:right-6 z-[100] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[80vh] md:max-h-[700px] font-sans"
          >
            {/* Header without Logo (as requested) */}
            <div className="bg-[#1a3a52] p-4 text-white flex items-center gap-3 shadow-md relative">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base leading-tight truncate">Venancio Assistant</h3>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse"></span>
                  Online agora
                </p>
              </div>
              {conversationState !== 'greeting' && (
                <button onClick={handleBack} className="p-1.5 hover:bg-white/10 rounded-full transition-colors" aria-label="Voltar">
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Chat Body */}
            <div className="flex-1 bg-white p-4 overflow-y-auto min-h-[300px] relative scrollbar-thin scrollbar-thumb-gray-200">
              <div className="relative z-10 space-y-4">
                {renderBotMessage(script.greeting.text)}
                {selectedDept && renderUserSelection(selectedDept.label)}
                {conversationState === 'submenu' && selectedDept && (
                   renderBotMessage(script.submenus[selectedDept.id]?.text || "Como posso ajudar?")
                )}
                {selectedSubmenu && renderUserSelection(selectedSubmenu.label)}
                {conversationState === 'input' && (
                  renderBotMessage(script.closing.text)
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Interactive Footer Area */}
            <div className="bg-gray-50 p-3 pt-2 border-t border-gray-200">
              <AnimatePresence mode="wait">
                {conversationState === 'greeting' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                  >
                    {script.greeting.options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleOptionSelect(opt)}
                        className="w-full text-left px-3 py-3 bg-white hover:bg-gray-100 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 transition-colors flex items-center gap-2 shadow-sm active:scale-95"
                      >
                        <span className="text-lg">{opt.icon}</span>
                        <span className="truncate">{opt.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {conversationState === 'submenu' && selectedDept && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 gap-2"
                  >
                    {script.submenus[selectedDept.id]?.options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleSubmenuSelect(opt)}
                        className="w-full text-left px-4 py-3 bg-white hover:bg-gray-100 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 transition-colors shadow-sm active:scale-95 flex justify-between items-center"
                      >
                        {opt.label}
                        <ChevronLeft className="w-4 h-4 rotate-180 text-gray-400" />
                      </button>
                    ))}
                  </motion.div>
                )}

                {conversationState === 'input' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <textarea
                      value={userMessage}
                      onChange={(e) => setUserMessage(e.target.value)}
                      placeholder="Digite sua mensagem aqui..."
                      className="w-full p-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a52] resize-none h-20 shadow-inner"
                      autoFocus
                    />
                    <Button 
                      onClick={handleSendToWhatsApp}
                      className={(buttonVariants?.secondary || "bg-blue-600 text-white hover:bg-blue-700") + " w-full shadow-md"}
                    >
                      <span>Iniciar Chat no WhatsApp</span>
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChatbot;