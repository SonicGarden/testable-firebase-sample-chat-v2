import { initializeStorageTestEnvironment, getTestEnv } from '@/../test/utils';
import { messagesTest } from '@/../test/rules/storage/messages';

describe('storage.rules', () => {
  beforeAll(async () => {
    await initializeStorageTestEnvironment('testable-firebase-sample-chat-storage-rules-test');
  });

  afterAll(async () => {
    await getTestEnv().cleanup();
  });

  afterEach(async () => {
    await getTestEnv().clearStorage();
  });

  messagesTest();
});
