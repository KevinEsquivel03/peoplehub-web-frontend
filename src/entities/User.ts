import type {
  UserAppMetadata,
  UserIdentity,
  UserMetadata,
} from "@supabase/supabase-js";

export interface User {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: UserAppMetadata;
  user_metadata: UserMetadata;
  identities: UserIdentity;
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
}
