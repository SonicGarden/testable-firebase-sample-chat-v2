import { render, cleanup, screen, waitFor } from '@testing-library/react';
import { userFactory } from '@/../test/factories/user';
import { messageFactory } from '@/../test/factories/message';
import { Timestamp } from 'firebase/firestore';

const sender = userFactory.build({
  id: 'user-id',
  name: 'テストユーザー',
  photoUrl: 'user-photo-url',
});
const useUsersMock = vi.fn();

vi.mock('@/contexts/UsersContext', () => {
  return {
    useUsers: useUsersMock,
  };
});

describe('Message', async () => {
  const { Message } = await import('@/components/Message');

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  const message = messageFactory.build({
    content: `テストのメッセージ`,
    senderId: 'user-id',
    createdAt: Timestamp.fromDate(new Date('2022-07-01 00:00:00+09:00')),
  });

  describe('loading中の場合', () => {
    beforeEach(() => {
      useUsersMock.mockReturnValue({ usersById: {}, loading: true });
    });

    it('loading中はloadingメッセージが表示される', async () => {
      render(<Message message={message} />);
      await waitFor(() => expect(screen.getByText('loading...')).toBeTruthy());
    });
  });

  describe('loading済みの場合', () => {
    beforeEach(() => {
      useUsersMock.mockReturnValue({ usersById: { 'user-id': sender }, loading: false });
    });

    it('アイコン画像が表示される', async () => {
      render(<Message message={message} />);
      await waitFor(() => expect(screen.getByRole('img').getAttribute('src')).toBe('user-photo-url'));
    });

    it('送信者の名前が表示される', async () => {
      render(<Message message={message} />);
      await waitFor(() => expect(screen.getByText('テストユーザー')).toBeTruthy());
    });

    it('送信時間が表示される', async () => {
      render(<Message message={message} />);
      await waitFor(() => expect(screen.getByText('2022-07-01 00:00')).toBeTruthy());
    });

    it('メッセージが表示される', async () => {
      render(<Message message={message} />);
      await waitFor(() => expect(screen.getByText('テストのメッセージ')).toBeTruthy());
    });
  });
});
