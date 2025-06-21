
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultMode?: 'login' | 'register';
}

export function AuthDialog({ open, onOpenChange, defaultMode = 'login' }: AuthDialogProps) {
  const [mode, setMode] = useState<'login' | 'register'>(defaultMode);

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {mode === 'login' ? (
          <LoginForm onToggleMode={toggleMode} onClose={handleClose} />
        ) : (
          <RegisterForm onToggleMode={toggleMode} onClose={handleClose} />
        )}
      </DialogContent>
    </Dialog>
  );
}
