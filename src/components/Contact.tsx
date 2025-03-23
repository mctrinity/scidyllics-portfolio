import { useState } from 'react';
import styles from '@/styles/Contact.module.css';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      website: formData.get('website') as string, // 👈 honeypot field
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? 'success' : 'error');
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={className ? className : styles.form}
    >
      {/* 👻 Honeypot field (hidden from humans) */}
      <input
        type="text"
        name="website"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <input name="name" type="text" placeholder="Your name" required />
      <input name="email" type="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your message" required />
      <button type="submit">Send</button>

      {status === 'success' && (
        <p className={styles.success}>Thanks! Message sent.</p>
      )}
      {status === 'error' && (
        <p className={styles.error}>Oops! Something went wrong.</p>
      )}
    </form>
  );
}
