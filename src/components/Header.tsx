import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import { AuthDialog } from './AuthDialog';
import { LogOut, User, Settings, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Header() {
  const {
    user,
    logout
  } = useAuth();
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
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between bg-lime-50">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-red-600"></div>
            <span className="font-bold text-xl">Bangla Artisan Hub</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/artisans" className="text-sm font-medium hover:text-primary transition-colors">
              Artisans
            </Link>
            <Link to="/gallery" className="text-sm font-medium hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link to="/events" className="text-sm font-medium hover:text-primary transition-colors">
              Events
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {user ? <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user.name}</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      {user.email}
                    </p>
                    <div className="flex items-center gap-1">
                      {user.role === 'admin' && <Crown className="h-3 w-3 text-yellow-500" />}
                      <span className="text-xs capitalize text-muted-foreground">
                        {user.role}
                      </span>
                    </div>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> : <div className="flex items-center space-x-2">
              <Button variant="ghost" onClick={openLogin}>
                Sign In
              </Button>
              <Button onClick={openRegister}>
                Join Us
              </Button>
            </div>}
        </div>
      </div>

      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} defaultMode={authMode} />
    </header>;
}