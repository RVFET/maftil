import { onMount } from "solid-js";
import { GetPlatform } from "../wailsjs/go/main/App";
import { TitleBar } from "./components/TitleBar/TitleBar";

export default function App() {
  onMount(async () => {
    const p = await GetPlatform();
    document.body.classList.add(`platform-${p}`);
  });

  return (
    <>
      <TitleBar />
      <main class="bg-background w-screen h-[calc(100vh-var(--titlebar-height))]">
        Hello world!
      </main>
    </>
  );
}
