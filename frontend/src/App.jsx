import { Icon } from "@iconify-icon/solid";
import { CommandBar } from "./components/CommandBar/CommandBar";

function App() {
  return (
    <>
      <div>
        <button
          type="button"
          aria-label="Toggle dark mode"
          data-tooltip="Toggle dark mode"
          data-side="bottom"
          onclick="document.dispatchEvent(new CustomEvent('basecoat:theme'))"
          class="btn-icon-outline size-8"
        >
          <span class="hidden dark:block">
            <Icon icon="mdi:white-balance-sunny" height="1em" />
          </span>
          <span class="dark:hidden block">
            <Icon icon="mdi:weather-night" height="1em" />
          </span>
        </button>
      </div>

      <CommandBar />
    </>
  );
}

export default App;
