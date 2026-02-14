// pages/_app.tsx
import '@assets/main.css';
import { UIProvider } from '@components/ui/context';
import 'keen-slider/keen-slider.min.css';
import type { AppProps } from 'next/app';
import type { FC, ReactNode } from 'react';

// Define a layout component type that accepts children
type LayoutComponent = FC<{ children: ReactNode }>;

// Extend AppProps to allow optional Layout on Component
type CustomAppProps = AppProps & {
  Component: AppProps['Component'] & {
    Layout?: LayoutComponent;
  };
};

const Noop: LayoutComponent = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: CustomAppProps) {
  const Layout: LayoutComponent = Component.Layout || Noop;

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;