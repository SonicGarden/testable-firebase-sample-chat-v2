import {
  db,
  CollectionReference,
} from './firebase';
import { UserSecretDocumentData } from '../shared/types/userSecret';

export const userSecretsRef = db.collection(
  'userSecrets'
) as CollectionReference<UserSecretDocumentData>;