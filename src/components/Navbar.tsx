import React, { useState } from 'react';
import '../assets/Navbar.css';
import SearchBox from './SearchBox';
import Menu from './common/Menu/Menu';

type MenuItem = {
  label: string;
  icon: string;
  subItems: string[];
};

const menuItems: MenuItem[] = [
  { label: 'Men', icon : '', subItems: ['T-Shirts', 'Shirts', 'Jeans', 'Shoes'] },
  { label: 'Women', icon : '', subItems: ['Kurtas', 'Tops', 'Sarees', 'Heels'] },
  { label: 'Kids', icon : '', subItems: ['T-Shirts', 'Dresses', 'Toys'] },
  { label: 'Home & Living', icon : '', subItems: ['Bedsheets', 'Cushions'] },
  { label: 'Beauty', icon : '', subItems: ['Makeup', 'Skincare'] },
];

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <nav className="navbar">
      <div className="logo text-purple-900">EShop</div>
        <ul className="menu">
          {
            menuItems.map((item , index) => (
               <Menu item={item} key={index}/>
            ))
          }          
        </ul>
      <div className="search-box">
        <SearchBox />
      </div>
      <div className="icons">
        <div>User</div>
        <div>Wishlist</div>
        <div>Bag</div>
      </div>
    </nav>
  );
};

export default Navbar;
