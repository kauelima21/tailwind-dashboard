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
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">Update your photo and personal details here.</span>
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

        <form id="settings" action="" className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200">
          <div className="pb-5 grid gap-3 grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Name</label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue='Kauê' />
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue='Leal' />
              </InputRoot>
            </div>
          </div>

          <div className="pb-5 grid gap-3 grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email address</label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl id="email" type="email" defaultValue='kaue.lima@email.com' />
            </InputRoot>
          </div>

          <div className="pb-5 grid gap-3 grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
              Your photo
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="pb-5 grid gap-3 grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">Role</label>

            <InputRoot>
              <InputControl id="role" defaultValue='Software Engineer' />
            </InputRoot>
          </div>

          <div className="pb-5 grid gap-3 grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700">
              Country
            </label>

            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="pb-5 grid gap-3 grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
              Timezone
            </label>

            <Select placeholder="Select a timezone...">
              <SelectItem value="ps" text="Pacific Standard Time (UTC-08:00)" />
              <SelectItem value="sp" text="America Sao Paulo (UTC-03:00" />
            </Select>
          </div>

          <div className="pb-5 grid gap-3 grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid gap-3 grid-cols-2">
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

          <div className="pb-5 grid gap-3 grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
            <label htmlFor="portfolio" className="text-sm font-medium text-zinc-700">
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
