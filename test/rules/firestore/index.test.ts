import { messagesTest } from './collections/message';
import { usersTest } from './collections/user';
import { initializeTestEnvironment, getTestEnv } from '../../utils';

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
