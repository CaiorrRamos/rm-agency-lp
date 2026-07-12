import type { InputHTMLAttributes } from 'react'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export function InputField({ label, id, ...props }: InputFieldProps) {
  return (
    <label htmlFor={id} className="group grid gap-2 text-sm text-white/72">
      <span>{label}</span>
      <input
        id={id}
        className="h-14 rounded-[18px] border border-white/[0.08] bg-white/[0.045] px-5 text-base text-white outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 placeholder:text-white/30 focus:border-[#B2F828]/70 focus:bg-white/[0.065] focus:shadow-[0_0_0_4px_rgba(178,248,40,0.08),inset_0_1px_0_rgba(255,255,255,0.12)]"
        {...props}
      />
    </label>
  )
}
