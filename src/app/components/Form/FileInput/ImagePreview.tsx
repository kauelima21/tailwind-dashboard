'use client'

import { User } from "lucide-react";
import { useFileInput } from "./Root";
import { useMemo } from "react";

export function ImagePreview() {
  const { files } = useFileInput()

  const previewUrl = useMemo(() => {
    if (files.length == 0) return null

    return URL.createObjectURL(files[0])
  }, [files])

  if (!previewUrl) {
    return (
      <div className="rounded-full flex h-16 w-16 justify-center items-center bg-violet-50 dark:bg-violet-500/10">
        <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
      </div>
    )
  } else {
    return (
      <img src={previewUrl} alt='' className="w-16 h-16 rounded-full object-cover" />
    )
  }
}
