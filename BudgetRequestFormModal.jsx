import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BudgetRequestForm from './BudgetRequestForm';
import { buttonVariants } from '@/styles/buttonStyles';
import { ArrowRight } from 'lucide-react';

const BudgetRequestFormModal = ({ trigger, open: controlledOpen, onOpenChange: setControlledOpen }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled ? setControlledOpen : setInternalOpen;

  const handleSuccess = () => {
    setOpen(false);
  };

  // Default trigger if none provided, using the new unified style
  const defaultTrigger = (
    <button className={buttonVariants.primary}>
      Solicitar Orçamento <ArrowRight className="w-5 h-5" />
    </button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#1a3a52] text-2xl">Solicitar Orçamento</DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo para receber uma proposta personalizada de Segurança do Trabalho.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <BudgetRequestForm onSuccess={handleSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BudgetRequestFormModal;