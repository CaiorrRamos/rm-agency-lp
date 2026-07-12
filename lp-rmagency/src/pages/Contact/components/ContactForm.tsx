import { motion } from 'framer-motion'
import { FiLock } from 'react-icons/fi'
import { smoothTransition } from '../../../utils/animations'
import { InputField } from './InputField'
import { SubmitButton } from './SubmitButton'
import { TextareaField } from './TextareaField'

const fieldVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: smoothTransition(0.55) },
}

export function ContactForm() {
  return (
    <motion.form
      className="mt-10 grid gap-5"
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.08 }}
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <motion.div variants={fieldVariants}>
          <InputField id="name" name="name" label="Nome" placeholder="Seu nome" autoComplete="name" />
        </motion.div>
        <motion.div variants={fieldVariants}>
          <InputField
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="voce@empresa.com"
            autoComplete="email"
          />
        </motion.div>
      </div>

      <motion.div variants={fieldVariants}>
        <InputField
          id="subject"
          name="subject"
          label="Assunto"
          placeholder="Branding, landing page, direção criativa..."
        />
      </motion.div>

      <motion.div variants={fieldVariants}>
        <TextareaField
          id="message"
          name="message"
          label="Mensagem"
          placeholder="Conte um pouco sobre o projeto, momento da marca e objetivo principal."
        />
      </motion.div>

      <motion.div
        variants={fieldVariants}
        className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between"
      >
        <SubmitButton />
        <p className="inline-flex items-center gap-2 text-xs text-white/42">
          <FiLock aria-hidden="true" className="text-white/34" />
          Normalmente respondemos em até 24 horas.
        </p>
      </motion.div>
    </motion.form>
  )
}
