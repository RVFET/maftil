import { Icon } from "@iconify-icon/solid";
import { Button } from "../Button/Button";

export function ThemeToggle() {
  return (
    <Button
      type="button"
      class="btn"
      data-variant="outline"
      aria-label="Toggle dark mode"
      data-tooltip="Toggle dark mode"
      data-side="bottom"
      onclick={() => document.dispatchEvent(new CustomEvent("basecoat:theme"))}
    >
      <span class="hidden dark:block">
        <Icon icon="mdi:white-balance-sunny" />
      </span>
      <span class="dark:hidden block">
        <Icon icon="mdi:weather-night" />
      </span>
    </Button>
  );
}
