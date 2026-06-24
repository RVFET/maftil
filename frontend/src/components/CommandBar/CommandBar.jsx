import { Icon } from "@iconify-icon/solid";

export function CommandBar() {
  return (
    <>
      <button
        type="button"
        class="btn-outline"
        onclick="document.getElementById('commandbar').showModal()"
      >
        Open commandbar
        <kbd class="kbd">⌘J</kbd>
      </button>

      <dialog
        id="commandbar"
        class="command-dialog"
        aria-label="Command menu"
        onclick="if (event.target === this) this.close()"
      >
        <div class="pb-2 command">
          <header>
            <Icon icon="mdi:magnify" />
            <input
              type="text"
              id="commandbar-input"
              placeholder="Type a command or search..."
              autocomplete="off"
              autocorrect="off"
              spellcheck="false"
              aria-autocomplete="list"
              role="combobox"
              aria-expanded="true"
              aria-controls="commandbar-menu"
            />
          </header>
          <div
            role="menu"
            id="commandbar-menu"
            aria-orientation="vertical"
            data-empty="No results found."
            class="scrollbar"
          >
            <div role="group" aria-labelledby="cmd-suggestions">
              <span role="heading" id="cmd-suggestions">
                Suggestions
              </span>
              <div role="menuitem" onclick="console.log('Search emoji')">
                <Icon icon="mdi:sticker-emoji" />
                <span>Search Emoji</span>
              </div>
              <div role="menuitem" aria-disabled="true">
                <Icon icon="mdi:calculator" />
                <span>Calculator</span>
              </div>
            </div>
            <hr role="separator" />
            <div role="group" aria-labelledby="cmd-settings">
              <span role="heading" id="cmd-settings">
                Settings
              </span>
              <div
                role="menuitem"
                onclick="console.log('Open profile')"
                data-filter="Profile"
              >
                <Icon icon="mdi:account" />
                <span>Profile</span>
                <kbd class="ml-auto text-muted-foreground tracking-widest kbd">
                  ⌘P
                </kbd>
              </div>
              <div
                role="menuitem"
                onclick="console.log('Open settings')"
                data-filter="Settings"
              >
                <Icon icon="mdi:cog" />
                <span>Settings</span>
                <kbd class="ml-auto text-muted-foreground tracking-widest kbd">
                  ⌘S
                </kbd>
              </div>
              <div
                class="text-destructive"
                role="menuitem"
                onclick="console.log('Quit')"
                data-filter="Quit"
              >
                <Icon icon="mdi:exit-to-app" />
                <span>Quit</span>
                <kbd class="ml-auto text-muted-foreground tracking-widest kbd">
                  ⌘Q
                </kbd>
              </div>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close dialog"
            onclick="this.closest('dialog').close()"
          >
            <Icon icon="mdi:close" />
          </button>
        </div>
      </dialog>
    </>
  );
}
