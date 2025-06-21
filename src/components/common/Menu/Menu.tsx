// Menu.tsx
import styles from './Menu.module.css';

type MenuItem = {
  label: string;
  icon: string;
  subItems: string[];
};

type MenuProps = {
  item: MenuItem;
};

const Menu = ({ item }: MenuProps) => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>
        {item?.label}
        <i className="fa fa-caret-down"></i>
      </button>
      <div className={styles.dropdowncontent}>
        {item?.subItems.map((sub, subIndex) => (
          <a href="#" key={subIndex}>
            {sub}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
