import { FirebaseError, getApp, getApps, initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onIdTokenChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function firebaseAuth() {
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return getAuth(app);
}

export type Account = { name: string; email: string };

function toAccount(user: User | null): Account | null {
  if (!user) return null;
  const email = user.email ?? "";
  return { name: user.displayName || email.split("@")[0], email };
}

export function watchAccount(callback: (account: Account | null) => void) {
  return onIdTokenChanged(firebaseAuth(), (user) => callback(toAccount(user)));
}

export async function signUp(name: string, email: string, password: string) {
  const { user } = await createUserWithEmailAndPassword(firebaseAuth(), email, password);
  await updateProfile(user, { displayName: name });
  // a fresh token notifies watchAccount so the new display name shows up
  await user.getIdToken(true);
}

export async function signIn(email: string, password: string) {
  await signInWithEmailAndPassword(firebaseAuth(), email, password);
}

export function signOutAccount() {
  return signOut(firebaseAuth());
}

const errorMessages: Record<string, string> = {
  "auth/invalid-credential": "Incorrect email or password.",
  "auth/wrong-password": "Incorrect email or password.",
  "auth/user-not-found": "Incorrect email or password.",
  "auth/email-already-in-use": "An account with this email already exists.",
  "auth/weak-password": "Password must be at least 6 characters.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
  "auth/network-request-failed": "Network error. Check your connection and try again.",
};

export function authErrorMessage(error: unknown) {
  const code = error instanceof FirebaseError ? error.code : "";
  return errorMessages[code] ?? "Something went wrong. Please try again.";
}
