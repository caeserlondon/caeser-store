import { CartSidebar } from '@components/cart';
import { Footer, Navbar } from '@components/common';
import { Sidebar } from '@components/ui';
import { useUI } from '@components/ui/context';
import { ApiProvider } from '@framework';
import { FC } from 'react';
import style from './Layout.module.css';

const Layout: FC = ({ children }) => {
	const { isSidebarOpen, closeSidebar } = useUI();

	return (
		<ApiProvider>
			<div className={style.root}>
				<Navbar />
				<Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
					<CartSidebar />
				</Sidebar>
				<main className='fit'>{children}</main>
				<Footer />
			</div>
		</ApiProvider>
	);
};

export default Layout;
