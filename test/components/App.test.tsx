import { render, cleanup, screen } from '@testing-library/react';
import { App } from '@/components/App';

vi.mock('@/components/MessageForm', () => {
  return {
    MessageForm: () => <div>MessageForm</div>,
  };
});

vi.mock('@/components/Messages', () => {
  return {
    Messages: () => <div>Messages</div>,
  };
});

describe('App', () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('タイトル文字列が表示される', async () => {
    render(<App />);
    expect(screen.getByText('Sample Chat App')).toBeTruthy();
  });
});
