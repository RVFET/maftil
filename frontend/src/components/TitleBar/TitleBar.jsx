import { Icon } from "@iconify-icon/solid";
import { Quit } from "../../../wailsjs/runtime/runtime";
import { Button } from "../Button/Button";
import { CommandBar } from "../CommandBar/CommandBar";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import logo from "../../assets/logo-icon.svg?raw";
import rawJson from "../../../package.json?raw";

function getVersionAndRepo() {
  const pkg = JSON.parse(rawJson);
  return {
    version: pkg.version,
    repo: pkg.repository?.url || "#",
  };
}

const { version, repo } = getVersionAndRepo();

export function TitleBar() {
  return (
    <div
      class="flex justify-between items-center bg-card px-1 w-full h-(--titlebar-height) select-none"
      style={{
        "--wails-draggable": "drag",
      }}
    >
      <div class="flex items-center gap-2 ml-2">
        <figure
          innerHTML={logo}
          class="pointer-events-none select-none titlebar-logo"
        ></figure>
        <b class="mt-1">Məftil</b>
        <a href={repo} target="top" class="ml-2 badge" data-variant="secondary">
          <Icon icon="mdi:github" />v{version}
        </a>
      </div>
      <div className="flex justify-center items-center gap-1">
        <CommandBar />
        <ThemeToggle />
        <Button
          type="button"
          class="sticky px-4 btn"
          data-variant="outline"
          onclick={() =>
            document.getElementById("quitting-confirmation").showModal()
          }
        >
          <Icon icon="mdi:close" />
        </Button>
      </div>

      <dialog
        id="quitting-confirmation"
        class="alert-dialog"
        aria-labelledby="quitting-confirmation-title"
        aria-describedby="quitting-confirmation-description"
      >
        <div>
          <header>
            <h2 id="quitting-confirmation-title">Are you sure?</h2>
            <p id="quitting-confirmation-description">
              If you continue, the application will shut down.
            </p>
          </header>
          <footer>
            <button
              class="btn"
              data-variant="outline"
              onclick="this.closest('dialog').close()"
            >
              Cancel
            </button>
            <button class="btn" onclick={() => Quit()}>
              Quit
            </button>
          </footer>
        </div>
      </dialog>
    </div>
  );
}
