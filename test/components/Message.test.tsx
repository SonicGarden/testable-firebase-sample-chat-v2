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

const useBlobMock = vi.fn();
vi.mock('@/hooks/useBlob', () => {
  return {
    useBlob: useBlobMock,
  };
});

describe('Message', async () => {
  vi.mock('@/contexts/UsersContext', () => {
    return {
      useUsers: useUsersMock,
    };
  });

  const { Message } = await import('@/components/Message');

  afterEach(() => cleanup());

  describe('loading中の場合、', () => {
    const message = messageFactory.build({
      content: `テストのメッセージ`,
      senderId: 'user-id',
      createdAt: Timestamp.fromDate(new Date('2022-07-01 00:00:0009:00')),
    });

    beforeEach(() => {
      useBlobMock.mockReturnValue({});
    });

    it('loadingメッセージが表示される', async () => {
      useUsersMock.mockReturnValue({ usersById: { 'user-id': sender }, loading: true });
      render(<Message message={message} />);
      expect(screen.getByText('loading...')).toBeTruthy();
    });
  });

  describe('画像なしの場合', () => {
    const message = messageFactory.build({
      content: `テストのメッセージ`,
      senderId: 'user-id',
      imagePath: null,
      createdAt: Timestamp.fromDate(new Date('2022-07-01 00:00:0009:00')),
    });

    beforeEach(() => {
      useBlobMock.mockReturnValue({});
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

    it('画像は表示されない', () => {
      render(<Message message={message} />);
      waitFor(() => expect(screen.getByText('message-image')).toBeUndefined());
    });
  });

  describe('画像ありの場合', () => {
    const message = messageFactory.build({
      content: `テストのメッセージ`,
      senderId: 'user-id',
      imagePath: 'image-storage-path',
      createdAt: Timestamp.fromDate(new Date('2022-07-01 00:00:0009:00')),
    });

    beforeEach(() => {
      useBlobMock.mockReturnValue({ url: 'message-image-url' });
      useUsersMock.mockReturnValue({ usersById: { 'user-id': sender }, loading: false });
    });

    it('アイコン画像が表示される', async () => {
      render(<Message message={message} />);
      await waitFor(() =>
        expect(screen.getByRole('img', { name: 'user-icon' })).toHaveAttribute('src', 'user-photo-url')
      );
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

    it('画像が表示される', async () => {
      render(<Message message={message} />);
      await waitFor(() =>
        expect(screen.getByRole('img', { name: 'message-image' })).toHaveAttribute('src', 'message-image-url')
      );
    });
  });
});
