import { messagesTest } from './collections/message';
import { usersTest } from './collections/user';
import { initializeTestEnvironment, getTestEnv } from '../../utils';

process.env.FIRESTORE_EMULATOR_HOST = '127.0.0.1:8080';

describe('firestore.rules', () => {
  beforeAll(async () => {
    await initializeTestEnvironment(
      'testable-firebase-sample-chat-rules-test'
    );
  });

  afterAll(async () => {
    await getTestEnv().cleanup();
  });

  afterEach(async () => {
    await getTestEnv().clearFirestore();
  });

  usersTest();
  messagesTest();
});