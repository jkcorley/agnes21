import '../globals.css';
import { HumeProvider } from 'hume-react';

export const metadata = {
  title: 'Agnes 2.1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HumeProvider projectId={process.env.NEXT_PUBLIC_HUME_PROJECT_ID!}>
          {children}
        </HumeProvider>
      </body>
    </html>
  );
}
