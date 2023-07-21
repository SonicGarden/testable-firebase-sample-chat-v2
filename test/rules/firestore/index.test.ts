import { initializeTestEnvironment, getTestEnv } from './utils';

process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';

describe('firestore.rules', () => {
  beforeAll(async () => {
    await initializeTestEnvironment();
  });

  afterAll(async () => {
    await getTestEnv().cleanup();
  });

  afterEach(async () => {
    await getTestEnv().clearFirestore();
  });
  // ここに実際のテストを追加します。
});