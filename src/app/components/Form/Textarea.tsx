export interface TextareaProps {
  value: string
}

export function TextArea({ value }: TextareaProps) {
  return (
    <textarea
      id="bio"
      defaultValue={value}
      className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-violet-500 dark:focus:ring-violet-500/20 dark:placeholder-zinc-400 dark:text-zinc-100"
    />
  )
}
