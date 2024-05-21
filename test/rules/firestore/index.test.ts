import { initializeTestEnvironment, getTestEnv } from '@/../test/utils';
import { usersTest } from './collections/user';
import { messagesTest } from './collections/message';
import { userSecretsTest } from '@/../test/rules/firestore/collections/userSecrets';

process.env.FIRESTORE_EMULATOR_HOST = '127.0.0.1:8080';

describe('firestore.rules', () => {
  beforeAll(async () => {
    await initializeTestEnvironment('testable-firebase-sample-chat-firestore-rules-test');
  });

  afterAll(async () => {
    await getTestEnv().cleanup();
  });

  afterEach(async () => {
    await getTestEnv().clearFirestore();
  });

  usersTest();
  messagesTest();
  userSecretsTest();
});
