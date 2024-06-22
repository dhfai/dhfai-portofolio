import React, { ReactNode } from 'react';
import { BackgroundPattern } from './components/animations/BackgroundPattern';
import { Provider } from './provider/Provider';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html lang='en'>
            <body className='Kalnia'>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
};