import { render, cleanup, screen } from '@testing-library/react';

vi.mock('@/components/Messages', () => ({ Messages: () => <div>Messages</div> }));
vi.mock('@/components/MessageForm', () => ({ MessageForm: () => <div>MessageForm</div> }));

describe('App', async () => {
  const { App } = await import('@/components/App');

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('タイトル文字列が表示される', async () => {
    render(<App />);
    expect(screen.getByText('Sample Chat App')).toBeTruthy();
  });
});
