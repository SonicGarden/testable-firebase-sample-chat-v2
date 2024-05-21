# 1.1 最初のyarnでコケる

yarn install v1.22.19
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
error @typescript-eslint/eslint-plugin@7.8.0: The engine "node" is incompatible with this module. Expected version "^18.18.0 || >=20.0.0". Got "18.15.0"
error Found incompatible module.

-> node 18.19.0に変更

# 1.1 eslint version

yarn add --dev eslint@8.19.0 prettier eslint-config-prettier
npx @eslint/create-config@0.4.6

# 1.3 firebase initの設問が変わってる

=== Hosting Setup
The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.
? Detected an existing Vite codebase in the current directory, should we use this? Yes
? In which region would you like to host server-side content, if applicable? asia-east1 (Taiwan)
? Set up automatic builds and deploys with GitHub? No

=== Storage Setup

Firebase Storage Security Rules allow you to define how and when to allow
uploads and downloads. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Storage Rules? storage.rules
✔  Wrote storage.rules

=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices. Authentication Emulator, Functions Emulator, Firestore Emulator, Hosting Emulator, Storage Emulator
? Which port do you want to use for the auth emulator? 9099
? Which port do you want to use for the functions emulator? 5001
? Which port do you want to use for the firestore emulator? 8080
? Which port do you want to use for the hosting emulator? 5000
? Which port do you want to use for the storage emulator? 9199
? Would you like to enable the Emulator UI? Yes
? Which port do you want to use for the Emulator UI (leave empty to use any available port)? 4000
? Would you like to download the emulators now? No

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!

# 1.3 firestoreがない

Error: It looks like you haven't used Cloud Firestore in this project before. Go to https://console.firebase.google.com/project/testable-firebase-sample-c37d4/firestore to create your Cloud Firestore database.

# 1.3 storageもない

Error: Cloud resource location is not set for this project but the operation you are attempting to perform in Cloud Storage requires it. Please see this documentation for more details: https://firebase.google.com/docs/projects/locations

# 1.4 .firebaseをignoreする

# 2.2 パスミス
// test/firestore/index.test.ts
// test/rules/firestore/index.test.ts

# 2.2 この時点でテストを実行すると以下のような形で全てのテストをパスすると思います。
コマンド教えてくれ


# 2.5 ymlのファイル名がわからない

# 3.6
vitest.rules.config.ts? vitest.node.config.ts?

# 3.6
yarn testの初回時にjsdomのインストールが必要

```
yarn run v1.22.21
$ vitest run
 MISSING DEPENDENCY  Cannot find dependency 'jsdom'

✔ Do you want to install jsdom? … yes
```

# 3.6 rulesテストが失敗する

```
 FAIL  test/rules/firestore/utils.ts [ test/rules/firestore/utils.ts ]
Error: No test suite found in file /Users/t-kojima/Git/github.com/t-kojima/testable-firebase-sample-chat-v2/test/rules/firestore/utils.ts
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/3]⎯

 FAIL  test/rules/firestore/collections/message.ts [ test/rules/firestore/collections/message.ts ]
Error: No test suite found in file /Users/t-kojima/Git/github.com/t-kojima/testable-firebase-sample-chat-v2/test/rules/firestore/collections/message.ts
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/3]⎯

 FAIL  test/rules/firestore/collections/user.ts [ test/rules/firestore/collections/user.ts ]
Error: No test suite found in file /Users/t-kojima/Git/github.com/t-kojima/testable-firebase-sample-chat-v2/test/rules/firestore/collections/user.ts
```

-> includeでtestファイルに限定する必要がある
    include: ['**/rules/**/*.test.ts'],

# 4.4
describe('loading中の場合、' () => {
describe('loading中の場合、', () => {    

# 4.4
/images/noname.pngの置き場所

# 5.1
mv test/rules/utils.ts test/utils.ts
mv test/rules/firestore/utils.ts test/utils.ts

# 5.2
```
+   aftereach(() => {
+     vi.resetallmocks();
+     cleanup();
+   });
```
```
+   afterEach(() => {
+     vi.resetAllMocks();
+     cleanup();
+   });
```

# 6.0
yarn add -D @testing-library/user-event @testing-library/jest-dom
yarn add --dev @testing-library/user-event @testing-library/jest-dom

# 6.1
setupFiles: ['./vitest.setup.ts'],をvitest.config.ts側も追加

# 7.1
test/rules/storage/index.test.ts
initializeTestEnvironmentが正解はinitializeStorageTestEnvironment

# 7.2
```
+     const message = messagefactory.build({
+       content: `テストのメッセージ`,
+       senderid: 'user-id',
+       createdat: timestamp.fromdate(
+         new date('2022-07-01 00:00:00+09:00')
+       ),
+     });
```
```
    const message = messageFactory.build({
      content: `テストのメッセージ`,
      senderId: 'user-id',
      createdAt: Timestamp.fromDate(new Date('2022-07-01 00:00:0009:00')),
    });
```

# 7.2
```
+   describe('画像なしの場合', () => {
+     const message = messagefactory.build({
+       content: `テストのメッセージ`,
+       senderid: 'user-id',
+       imagepath: null,
+       createdat: timestamp.fromdate(
+         new date('2022-07-01 00:00:00+09:00')
+       ),
+     });
+
+     beforeEach(() => {
+       useBlobMock.mockReturnValue({});
+     });
```
```
-  describe('loadingが完了した場合', async () => {
-    beforeEach(() => {
-      useUsersMock.mockReturnValue({ usersById: { 'user-id': sender }, loading: false });
-    });
+   describe('画像なしの場合', () => {
+     const message = messagefactory.build({
+       content: `テストのメッセージ`,
+       senderid: 'user-id',
+       imagepath: null,
+       createdat: timestamp.fromdate(
+         new date('2022-07-01 00:00:00+09:00')
+       ),
+     });
+
+     beforeEach(() => {
+       useBlobMock.mockReturnValue({});
+     });
```

# 7.2 mockの追加漏れ（2箇所）

```
    beforeEach(() => {
      useBlobMock.mockReturnValue({});
+      useUsersMock.mockReturnValue({ usersById: { 'user-id': sender }, loading: false });
    });
```

# 8.5 tsconfig.node.jsonの更新も必要
```
{
    "compilerOptions": {
      "composite": true,
      "module": "esnext",
      "moduleResolution": "node"
    },
    "include": ["vitest.config.ts", "test"]
  }
```
```
{
    "compilerOptions": {
      "composite": true,
      "module": "esnext",
      "moduleResolution": "node",
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "types": ["vitest/globals"]
    },
    "include": ["vitest.config.ts", "test", "src"]
  }
```
tsconfig.jsonに以下も追加
  "references": [{ "path": "./tsconfig.node.json" }]
