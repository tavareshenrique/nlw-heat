import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';

import style from './App.module.scss';
import { useAuth } from './hooks/useAuth';
import SendMessageForm from './components/SendMessageForm';

export function App() {
  const { user } = useAuth();

  return (
    <main
      className={`${style.contentWrapper} ${user ? style.contentSigned : ''}`}
    >
      <MessageList />
      {user ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
}
