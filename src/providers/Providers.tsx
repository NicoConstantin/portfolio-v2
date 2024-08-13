import { ClientProviders } from './ClientProviders';
import { ServerProviders } from './ServerProviders';

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ServerProviders>
      <ClientProviders> {children}</ClientProviders>
    </ServerProviders>
  );
}
