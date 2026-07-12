import type { TextareaHTMLAttributes } from 'react'

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
}

export function TextareaField({ label, id, ...props }: TextareaFieldProps) {
  return (
    <label htmlFor={id} className="group grid gap-2 text-sm text-white/72">
      <span>{label}</span>
      <textarea
        id={id}
        className="min-h-[178px] resize-none rounded-[18px] border border-white/[0.08] bg-white/[0.045] px-5 py-4 text-base leading-relaxed text-white outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 placeholder:text-white/30 focus:border-[#B2F828]/70 focus:bg-white/[0.065] focus:shadow-[0_0_0_4px_rgba(178,248,40,0.08),inset_0_1px_0_rgba(255,255,255,0.12)]"
        {...props}
      />
    </label>
  )
}
