import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { FiLock } from 'react-icons/fi'
import { smoothTransition } from '../../../utils/animations'
import { InputField } from './InputField'
import { SubmitButton } from './SubmitButton'
import { TextareaField } from './TextareaField'

const fieldVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: smoothTransition(0.55) },
}

const emailJsConfig = {
  publicKey: 'SmRX8csgOhy2WrpIW',
  serviceId: 'service_pg0fwxk',
  templateId: 'template_9uas1tw',
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

function getFormValue(formData: FormData, fieldName: string) {
  const value = formData.get(fieldName)

  return typeof value === 'string' ? value.trim() : ''
}

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle')
  const [feedback, setFeedback] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (submissionState === 'submitting') return

    const form = event.currentTarget

    if (!form.reportValidity()) return

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId) {
      setSubmissionState('error')
      setFeedback('O canal de email ainda não está configurado. Tente novamente mais tarde.')
      return
    }

    const formData = new FormData(form)
    const name = getFormValue(formData, 'name')
    const email = getFormValue(formData, 'email')
    const subject = getFormValue(formData, 'subject')
    const message = getFormValue(formData, 'message')

    setSubmissionState('submitting')
    setFeedback('')

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailJsConfig.serviceId,
          template_id: emailJsConfig.templateId,
          user_id: emailJsConfig.publicKey,
          template_params: {
            name,
            email,
            user_name: name,
            user_email: email,
            from_name: name,
            from_email: email,
            reply_to: email,
            subject,
            title: subject,
            message,
          },
        }),
      })

      if (!response.ok) throw new Error(`EmailJS request failed with status ${response.status}`)

      form.reset()
      setSubmissionState('success')
      setFeedback('Mensagem enviada com sucesso. Em breve entraremos em contato.')
    } catch (error) {
      console.error('Falha ao enviar mensagem pelo EmailJS:', error)
      setSubmissionState('error')
      setFeedback('Não foi possível enviar agora. Confira sua conexão e tente novamente.')
    }
  }

  return (
    <motion.form
      className="mt-10 grid gap-5"
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.08 }}
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <motion.div variants={fieldVariants}>
          <InputField id="name" name="name" label="Nome" placeholder="Seu nome" autoComplete="name" required maxLength={100} />
        </motion.div>
        <motion.div variants={fieldVariants}>
          <InputField
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="voce@empresa.com"
            autoComplete="email"
            required
            maxLength={254}
          />
        </motion.div>
      </div>

      <motion.div variants={fieldVariants}>
        <InputField
          id="subject"
          name="subject"
          label="Assunto"
          placeholder="Branding, landing page, direção criativa..."
          required
          maxLength={150}
        />
      </motion.div>

      <motion.div variants={fieldVariants}>
        <TextareaField
          id="message"
          name="message"
          label="Mensagem"
          placeholder="Conte um pouco sobre o projeto, momento da marca e objetivo principal."
          required
          minLength={20}
          maxLength={3000}
        />
      </motion.div>

      <motion.div
        variants={fieldVariants}
        className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between"
      >
        <SubmitButton isSubmitting={submissionState === 'submitting'} />
        <p className="inline-flex items-center gap-2 text-xs text-white/42">
          <FiLock aria-hidden="true" className="text-white/34" />
          Normalmente respondemos em até 24 horas.
        </p>
      </motion.div>

      <p
        role={submissionState === 'error' ? 'alert' : 'status'}
        aria-live="polite"
        className={`min-h-5 text-sm ${
          submissionState === 'success' ? 'text-[#B2F828]' : 'text-red-300'
        }`}
      >
        {feedback}
      </p>
    </motion.form>
  )
}
