import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { smoothTransition } from '../../../../src/utils/animations'

export function VersionNotice() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.aside
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={smoothTransition(0.45)}
          className="fixed inset-x-4 bottom-4 z-[70] mx-auto w-auto max-w-[360px] rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(13,13,13,0.92),rgba(6,6,6,0.96))] p-4 text-left text-white shadow-[0_24px_80px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:left-auto sm:right-5 sm:mx-0"
          aria-live="polite"
          aria-label="Aviso de versão do site"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#b2f828]/82">
                v1.0.1
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Este site ainda está em sua primeira versão.
              </p>
              <p className="mt-1 text-sm leading-6 text-white/62">
                Algumas funcionalidades seguem em desenvolvimento e podem evoluir nas próximas atualizações.
              </p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/72 transition hover:bg-white/[0.08] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/16"
              aria-label="Fechar aviso"
            >
              x
            </button>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  )
}
