
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import { AuthDialog } from './AuthDialog';
import { LogOut, User, Settings, Crown, Palette, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const { user, logout } = useAuth();
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openLogin = () => {
    setAuthMode('login');
    setAuthDialogOpen(true);
  };

  const openRegister = () => {
    setAuthMode('register');
    setAuthDialogOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 rounded-xl artisan-gradient flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl artisan-text-primary group-hover:text-primary transition-colors">
              Bangla Artisan Hub
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/artisans" 
              className="text-sm font-medium artisan-text-secondary hover:text-primary transition-colors relative group"
            >
              Artisans
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/gallery" 
              className="text-sm font-medium artisan-text-secondary hover:text-primary transition-colors relative group"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/events" 
              className="text-sm font-medium artisan-text-secondary hover:text-primary transition-colors relative group"
            >
              Community
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full hover:ring-2 hover:ring-primary/20 transition-all">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-br from-amber-100 to-orange-100 text-primary font-semibold">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white border-stone-200 shadow-xl" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-3 bg-gradient-to-r from-amber-50 to-orange-50">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-semibold artisan-text-primary">{user.name}</p>
                    <p className="w-[200px] truncate text-sm artisan-text-muted">
                      {user.email}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {user.role === 'admin' && <Crown className="h-3 w-3 text-amber-600" />}
                      <span className="text-xs capitalize font-medium px-2 py-1 bg-white rounded-full artisan-text-secondary">
                        {user.role}
                      </span>
                    </div>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-stone-50 cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-stone-50 cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="hover:bg-red-50 text-red-600 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                onClick={openLogin} 
                className="artisan-text-secondary hover:text-primary hover:bg-stone-50 transition-all"
              >
                Sign In
              </Button>
              <Button 
                onClick={openRegister} 
                className="artisan-gradient hover:shadow-lg transition-all duration-300 text-white shadow-md"
              >
                Join Community
              </Button>
            </div>
          )}

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200/60 bg-white/95 backdrop-blur-md">
          <nav className="container py-4 space-y-3">
            <Link 
              to="/artisans" 
              className="block text-sm font-medium artisan-text-secondary hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Artisans
            </Link>
            <Link 
              to="/gallery" 
              className="block text-sm font-medium artisan-text-secondary hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/events" 
              className="block text-sm font-medium artisan-text-secondary hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
          </nav>
        </div>
      )}

      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} defaultMode={authMode} />
    </header>
  );
}
