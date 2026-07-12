import { motion, type MotionStyle, type Variants } from 'framer-motion'
import { smoothTransition } from '../../../utils/animations'
import type { ShowcaseItem } from '../../../types/content'
import { cn } from '../../../lib/cn'
import rmMark from '../../../assets/Logo RM - branco.svg'

type ShowcaseCardProps = {
  item: ShowcaseItem
  featured?: boolean
  className?: string
  style?: MotionStyle
  variants?: Variants
}

export function ShowcaseCard({
  item,
  featured = false,
  className,
  style,
  variants,
}: ShowcaseCardProps) {
  const isComingSoon = item.status === 'coming-soon'
  const isBrandCard = item.id === 'brand-rm'

  return (
    <motion.a
      href={item.href}
      className={cn(
        'group relative block h-full min-h-[280px] overflow-hidden rounded-[10px] border border-white/[0.08] bg-[#070707] shadow-[0_22px_80px_rgba(0,0,0,0.28)] outline-none transition-[box-shadow,border-color] duration-500 ease-out will-change-transform focus-visible:ring-2 focus-visible:ring-white/20 md:rounded-[12px]',
        featured
          ? 'min-h-[360px] shadow-[0_32px_110px_rgba(0,0,0,0.42)]'
          : 'min-h-[260px]',
        (isBrandCard || item.logo) && 'bg-[#050505]',
        className,
      )}
      style={style}
      variants={variants}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow:
          '0 44px 130px rgba(0,0,0,0.56), inset 0 1px 0 rgba(255,255,255,0.16)',
        transition: smoothTransition(0.45),
      }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {isBrandCard ? (
          <div className="flex h-full w-full items-center justify-center bg-[#151515]">
            <img
              src={rmMark}
              alt={item.title}
              className="h-24 w-24 object-contain md:h-28 md:w-28"
            />
          </div>
        ) : item.image ? (
          <motion.img
            src={item.image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-0 saturate-[0.9] brightness-[0.86] transition-[opacity,filter] duration-700 ease-out group-hover:opacity-100 group-hover:saturate-100 group-hover:brightness-100 group-focus-visible:opacity-100"
            initial={{ scale: 1.08 }}
            whileHover={{ scale: 1.01, transition: smoothTransition(0.72) }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#626262]">
            <span className="text-lg font-semibold uppercase tracking-[-0.04em] text-white md:text-xl">
              {item.title}
            </span>
          </div>
        )}
      </div>

      {item.logo ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center px-10">
          <img
            src={item.logo}
            alt={item.title}
            className="max-h-24 w-[min(68%,240px)] object-contain opacity-95 transition-[transform,opacity,filter] duration-500 ease-out group-hover:scale-95 group-hover:opacity-90 group-focus-visible:scale-95 md:max-h-28"
          />
        </div>
      ) : null}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(0,0,0,0.08)_56%,rgba(0,0,0,0.46))] opacity-90 transition-opacity duration-500 ease-out group-hover:opacity-72" />
      <div className="absolute inset-0 bg-white/[0.015] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />

      <motion.span
        className={cn(
          'absolute inset-x-3 bottom-3 z-10 inline-flex h-8 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/[0.08] px-4 text-[10px] font-medium text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_28px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-[border-color,background-color,color,filter] duration-300 ease-out group-hover:border-white/55 group-hover:bg-white/[0.16] group-hover:text-white group-hover:brightness-110',
          isComingSoon && 'text-white/88',
        )}
        whileHover={{ scale: 1.015 }}
        transition={smoothTransition(0.3)}
      >
        <span>Ver Portfolio</span>
        <span aria-hidden="true" className="text-white/70">
          ↗
        </span>
      </motion.span>
    </motion.a>
  )
}
