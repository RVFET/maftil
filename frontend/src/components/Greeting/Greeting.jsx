import { Greet } from "../../../wailsjs/go/main/App";
import { Icon } from "@iconify-icon/solid";

export function Greeting() {
  return (
    <div role="group" aria-label="Greet" class="button-group">
      <input class="input" type="Greet" placeholder="Greet..." />
      <button
        type="submit"
        class="btn"
        data-variant="outline"
        data-size="icon"
        aria-label="Greet"
      >
        <Icon icon="mdi:human-greeting-variant" />
      </button>
    </div>
  );
}
