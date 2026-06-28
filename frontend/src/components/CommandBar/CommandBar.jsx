import { Icon } from "@iconify-icon/solid";
import { Button } from "../Button/Button";

export function CommandBar() {
  return (
    <>
      <Button
        type="button"
        class="btn"
        data-variant="outline"
        onclick={() => document.getElementById("commandbar").showModal()}
      >
        Open commandbar
        <kbd class="kbd">⌘J</kbd>
      </Button>

      <dialog
        id="commandbar"
        class="command-dialog"
        aria-label="Command menu"
        onclick="if (event.target === this) this.close()"
      >
        <div class="command">
          <header>
            <Icon icon="mdi:magnify" />
            <input
              type="text"
              id="command-scrollable-input"
              placeholder="Type a command or search..."
              autocomplete="off"
              autocorrect="off"
              spellcheck="false"
              aria-autocomplete="list"
              role="combobox"
              aria-expanded="true"
              aria-controls="command-scrollable-menu"
            />
          </header>
          <div
            role="menu"
            id="command-scrollable-menu"
            aria-orientation="vertical"
            data-empty="No results found."
          >
            <div role="group" aria-labelledby="command-scrollable-navigation">
              <span role="heading" id="command-scrollable-navigation">
                Navigation
              </span>
              <div role="menuitem" data-filter="Home">
                <Icon icon="mdi:home" />
                <span>Home</span>
                <span data-shortcut>⌘H</span>
              </div>
              <div role="menuitem" data-filter="Inbox">
                <Icon icon="mdi:mail-ru" />
                <span>Inbox</span>
                <span data-shortcut>⌘I</span>
              </div>
            </div>
            <hr role="separator" />
            <div role="group" aria-labelledby="command-scrollable-actions">
              <span role="heading" id="command-scrollable-actions">
                Actions
              </span>
              <div role="menuitem" data-filter="New File">
                <svg
                  class="lucide lucide-plus"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                <span>New File</span>
                <span data-shortcut>⌘N</span>
              </div>
              <div role="menuitem" data-filter="New Folder">
                <svg
                  class="lucide lucide-folder-plus"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 10v6" />
                  <path d="M9 13h6" />
                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                </svg>
                <span>New Folder</span>
                <span data-shortcut>⇧⌘N</span>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
