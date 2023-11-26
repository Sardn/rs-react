import React from 'react';
import type { ReactNode } from 'react';
import { Header } from '@/components/header/Header';
import styles from './Layout.module.css';
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className={styles.layout}>
      <Header />
      <main>{children}</main>
    </section>
  );
};

export default Layout;
