interface StatItemProps {
  value: string
  label: string
}

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div>
      <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{value}</p>
      <p className="text-xs sm:text-sm text-slate-500 font-medium">{label}</p>
    </div>
  )
}
