import { signIn } from '@junobuild/core-peer';
import { Button } from './ui/Button';
import { useRouter } from 'next/navigation';

export const SignInButton = () => {
  const router = useRouter();

  const handleSignIn = async () => {
    await signIn().then(() => router.push('/dashboard'));
  };

  return <Button onClick={handleSignIn}>Launch app</Button>;
};