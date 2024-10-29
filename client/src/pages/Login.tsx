import styles from '../features/auth/assets/auth.module.css';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '../components/ui/form';
import { Container } from '../layouts/Container';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

const formSchema = z.object({
  email: z
    .string()
    .email('Adresse e-mail incorrecte')
    .min(1, 'Trop court')
    .max(50, 'Trop long'),
  password: z.string().min(8, 'Trop court').max(50, 'Trop long'),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { loginUser, isLoggedIn } = useAuth();

  function onSubmit(form: z.infer<typeof formSchema>) {
    loginUser(form.email, form.password);
  }

  if (isLoggedIn()) {
    return <Navigate to="/home" />;
  }

  return (
    <Container className="mt-20 text-center">
      <div className="header mb-10">
        <h3 className="font-semibold">Connexion</h3>
        <Link to={'/register'}>
          <small>Pas encore de compte ?</small>
        </Link>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={styles.input}
                    placeholder="E-mail ou nom d'utilisateur *"
                    {...field}
                    style={{ minWidth: '300px' }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={styles.input}
                    type="password"
                    placeholder="Mot de passe"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-right">
                  <Link to="#">Mot de passe oublié ?</Link>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col mt-0">
            <Button type="submit">Se connecter</Button>
          </div>
        </form>
      </Form>
    </Container>
  );
};

export default Login;
