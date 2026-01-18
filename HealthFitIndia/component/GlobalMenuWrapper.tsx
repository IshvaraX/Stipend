// components/GlobalMenuWrapper.tsx
import { useMenu } from '../app/context/MenuContext';
import { useAuth } from '../app/context/AuthContext';
import HamburgerMenu from './Menu';

const GlobalMenuWrapper = () => {
  const { isMenuOpen, closeMenu } = useMenu();
  const { user, logout } = useAuth();

  return (
    <HamburgerMenu
      isVisible={isMenuOpen}
      onClose={closeMenu}
      user={user}
      onLogout={logout}
    />
  );
};

export default GlobalMenuWrapper;