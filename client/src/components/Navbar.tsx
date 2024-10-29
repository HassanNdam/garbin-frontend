import { Link } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import Logo from '../assets/logo/garbin-nav.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center p-3">
        <div className="logo" style={{ width: '7rem' }}>
          <Link to={'/'}>
            <img src={Logo} alt="" className="" />
          </Link>
        </div>
        <div className="flex justify-between gap-4">
          {user ? (
            <>
              <div className="pages mx-10 flex gap-6">
                <Link
                  to={'/wardrobe'}
                  className={
                    location.pathname === '/wardrobe' ? 'font-medium' : ''
                  }
                >
                  Ma garde robe
                </Link>
                <Link
                  to={'/my-outfits'}
                  className={
                    location.pathname === '/my-outfits' ? 'font-medium' : ''
                  }
                >
                  Mes tenues
                </Link>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex row gap-3 items-center cursor-pointer">
                    <i className="fa fa-user" />
                    <p>{user.username}</p>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem onClick={() => logout()}>
                    Se déconnecter
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <a href="/login" className="flex row gap-3 items-center">
              <i className="fa fa-user" />
              <p>Se connecter</p>
            </a>
          )}
        </div>
      </nav>
    </div>
  );
};
