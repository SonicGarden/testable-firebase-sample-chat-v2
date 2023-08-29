import { Timestamp, WithId } from '@/lib/firebase';

export type MessageDocumentData = {
  createdAt: Timestamp;
  content: string;
  imagePath: string | null;
  senderId: string;
};

export type Message = WithId<MessageDocumentData>;
