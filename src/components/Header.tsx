
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import { AuthDialog } from './AuthDialog';
import { LogOut, User, Settings, Crown, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const { user, logout } = useAuth();
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const openLogin = () => {
    setAuthMode('login');
    setAuthDialogOpen(true);
  };

  const openRegister = () => {
    setAuthMode('register');
    setAuthDialogOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center shadow-md">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl artisan-text-primary">Bangla Artisan Hub</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/artisans" className="text-sm font-medium artisan-text-secondary hover:text-primary transition-colors">
              Artisans
            </Link>
            <Link to="/gallery" className="text-sm font-medium artisan-text-secondary hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link to="/events" className="text-sm font-medium artisan-text-secondary hover:text-primary transition-colors">
              Events
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-br from-amber-100 to-orange-100 text-primary">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border-stone-200" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium artisan-text-primary">{user.name}</p>
                    <p className="w-[200px] truncate text-sm artisan-text-muted">
                      {user.email}
                    </p>
                    <div className="flex items-center gap-1">
                      {user.role === 'admin' && <Crown className="h-3 w-3 text-amber-600" />}
                      <span className="text-xs capitalize artisan-text-muted">
                        {user.role}
                      </span>
                    </div>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-stone-50">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-stone-50">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="hover:bg-red-50 text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" onClick={openLogin} className="artisan-text-secondary hover:text-primary">
                Sign In
              </Button>
              <Button onClick={openRegister} className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white shadow-md">
                Join Us
              </Button>
            </div>
          )}
        </div>
      </div>

      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} defaultMode={authMode} />
    </header>
  );
}
