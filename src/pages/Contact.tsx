import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { company, whatsappLink } from '../data/company';
import './Contact.css';

type FormState = {
  nome: string;
  email: string;
  telefone: string;
  message: string;
};

const INITIAL: FormState = { nome: '', email: '', telefone: '', message: '' };

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const headRef = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(state: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!state.nome.trim()) next.nome = 'Conta pra gente como você se chama.';
    if (!state.email.trim()) next.email = 'Precisamos de um e-mail para retornar.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
      next.email = 'Esse e-mail parece incompleto.';
    if (state.message.trim().length < 10)
      next.message = 'Conte um pouco mais — pelo menos 10 caracteres.';
    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;
    setSubmitting(true);

    const body = new FormData();
    body.append('nome', form.nome);
    body.append('email', form.email);
    body.append('telefone', form.telefone);
    body.append('message', form.message);
    body.append('accessKey', '5cffd304-13ec-4102-aaca-6e7d1956dd87');
    body.append('subject', `Contato site — ${form.nome}`);

    try {
      await fetch('https://api.staticforms.xyz/submit', { method: 'POST', body });
    } catch {
      // staticforms returns CORS errors but still delivers — ignore network failure
    } finally {
      setSubmitting(false);
      navigate('/enviado');
    }
  }

  return (
    <main className="contact">
      <div className="container contact__layout">
        <aside className="contact__aside reveal" ref={headRef}>
          <span className="eyebrow">Trabalhe conosco</span>
          <h1 className="contact__title">
            Vamos construir<br />
            algo <em>extraordinário</em> juntos.
          </h1>
          <p className="contact__lede">
            Conte sobre seu projeto, sua empresa ou seu interesse em fazer
            parte do nosso time. Lemos cada mensagem com atenção e retornamos
            o quanto antes.
          </p>

          <ul className="contact__channels">
            <li>
              <span className="contact__channel-label">Endereço</span>
              <span>{company.address}</span>
            </li>
            <li>
              <span className="contact__channel-label">Telefone</span>
              <span>{company.phone}</span>
            </li>
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp
                <span className="arrow" aria-hidden>→</span>
              </a>
            </li>
          </ul>
        </aside>

        <div className="contact__form-wrap reveal" ref={cardRef}>
          <form className="contact__form" onSubmit={onSubmit} noValidate>
            <Field
              id="nome"
              label="Nome"
              value={form.nome}
              error={errors.nome}
              onChange={(v) => update('nome', v)}
              autoComplete="name"
            />
            <Field
              id="email"
              type="email"
              label="E-mail"
              value={form.email}
              error={errors.email}
              onChange={(v) => update('email', v)}
              autoComplete="email"
            />
            <Field
              id="telefone"
              label="Telefone (opcional)"
              value={form.telefone}
              onChange={(v) => update('telefone', v)}
              autoComplete="tel"
            />
            <Field
              id="message"
              label="Fale um pouco sobre você ou seu projeto"
              value={form.message}
              error={errors.message}
              onChange={(v) => update('message', v)}
              multiline
            />

            <button className="btn contact__submit" disabled={submitting}>
              {submitting ? 'Enviando…' : 'Enviar mensagem'}
              {!submitting && <span className="arrow" aria-hidden>→</span>}
            </button>

            <p className="contact__disclaimer">
              Suas informações são tratadas com confidencialidade.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  multiline?: boolean;
  autoComplete?: string;
};

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  multiline,
  autoComplete,
}: FieldProps) {
  const filled = value.length > 0;
  const Input = multiline ? 'textarea' : 'input';
  return (
    <div className={`field${filled ? ' is-filled' : ''}${error ? ' is-error' : ''}`}>
      <Input
        id={id}
        name={id}
        type={multiline ? undefined : type}
        rows={multiline ? 5 : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <label htmlFor={id}>{label}</label>
      {error && (
        <span className="field__error" id={`${id}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}
