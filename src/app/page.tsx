import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "./components/Input";
import { SettingsTabs } from "./components/SettingsTabs";
import * as FileInput from "./components/Form/FileInput";
import { Select } from "./components/Form/Select";
import { SelectItem } from "./components/Form/Select/SelectItem";
import { TextArea } from "./components/Form/Textarea";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal info</h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Update your photo and personal details here.</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
            >Cancel</Button>
            <Button
              type="submit"
              form="settings"
              variant="primary"
            >Save</Button>
          </div>
        </div>

        <form id="settings" action="" className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700">
          <div className="flex flex-col pb-5 lg:grid gap-3 lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
            <div className="flex flex-col lg:grid gap-6 lg:grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue='Kauê' />
              </InputRoot>

              <div className="flex flex-col gap-3 lg:block">
                <label htmlFor="lastName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only">Last name</label>
                <InputRoot>
                  <InputControl id='lastName' defaultValue='Leal' />
                </InputRoot>
              </div>
            </div>
          </div>

          <div className="flex flex-col pb-5 lg:grid gap-3 lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email address</label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl id="email" type="email" defaultValue='kaue.lima@email.com' />
            </InputRoot>
          </div>

          <div className="flex flex-col pb-5 lg:grid gap-3 lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Your photo
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col pb-5 lg:grid gap-3 lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Role</label>

            <InputRoot>
              <InputControl id="role" defaultValue='Software Engineer' />
            </InputRoot>
          </div>

          <div className="flex flex-col pb-5 lg:grid gap-3 lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Country
            </label>

            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="flex flex-col pb-5 lg:grid gap-3 lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Timezone
            </label>

            <Select placeholder="Select a timezone...">
              <SelectItem value="ps" text="Pacific Standard Time (UTC-08:00)" />
              <SelectItem value="sp" text="America Sao Paulo (UTC-03:00" />
            </Select>
          </div>

          <div className="flex flex-col pb-5 lg:grid gap-3 lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Bio
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="flex flex-col lg:grid gap-3 lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                </div>
              </div>

              <TextArea value="I'm a Product Designer based in Melbourne, Australia." />
            </div>
          </div>

          <div className="flex flex-col pb-5 lg:grid gap-3 lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="portfolio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Portfolio projects
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2">
            <Button
              type="button"
              variant="outline"
            >Cancel</Button>
            <Button
              type="submit"
              form="settings"
              variant="primary"
            >Save</Button>
          </div>
        </form>
      </div>
    </>
  );
}
