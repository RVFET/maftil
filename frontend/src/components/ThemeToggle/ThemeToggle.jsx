import { Icon } from "@iconify-icon/solid";

export function ThemeToggle() {
  return (
    <button
      type="button"
      class="btn"
      data-variant="outline"
      aria-label="Toggle dark mode"
      data-tooltip="Toggle dark mode"
      data-side="bottom"
      onclick="document.dispatchEvent(new CustomEvent('basecoat:theme'))"
    >
      <span class="hidden dark:block">
        <Icon icon="mdi:white-balance-sunny" height="1em" />
      </span>
      <span class="dark:hidden block">
        <Icon icon="mdi:weather-night" height="1em" />
      </span>
    </button>
  );
}
