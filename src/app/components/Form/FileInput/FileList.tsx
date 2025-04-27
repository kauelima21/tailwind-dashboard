'use client'

import { Trash2, UploadCloud } from "lucide-react"
import { useFileInput } from "./Root"
import { formatBytes } from "@/utils/format-bytes"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { Button } from "../../Button"

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map(file => {
        return (
          <div key={file.name} className="group flex items-start gap-4 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4">
            <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500">
              <UploadCloud className="h-4 w-4" />
            </div>

            <div className="flex flex-1 flex-col items-start gap-1 truncate">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">{file.name}</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">{formatBytes(file.size)}</span>
              </div>

              <div className="flex w-full items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
                  <div className="h-2 rounded-full bg-violet-600 w-4/5 dark:bg-violet-400" />
                </div>
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">80%</div>
              </div>
            </div>

            <Button type="button" variant='ghost'>
              <Trash2 className="h-5 w-5 text-zinc-500" />
            </Button>
          </div>
        )
      })}
    </div>
  )
}
