'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className='outline-none group relative cursor-pointer px-1 pb-4 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-violet-700 data-[state=active]:text-violet-700 dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300'
    >
      <span className='whitespace-nowrap group-focus-visible:ring-2 group-focus-visible:ring-violet-400 rounded group-focus-visible:ring-offset-4'>{title}</span>

      {isSelected && (
        <motion.div
          layoutId='activeTab'
          className='absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300'
        />
      )}
    </Tabs.Trigger>
  )
}
