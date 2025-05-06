import { defineCustomElement } from "vue";
import Button from "./components/Button.ce.vue";
import TextInput from "./components/TextInput.ce.vue";
import CheckBox from "./components/CheckBox.ce.vue";

export type { ButtonProps, CheckboxProps, TextInputProps } from "./types";

(function register() {
  customElements.define("wc-button", defineCustomElement(Button));
  customElements.define("wc-text-input", defineCustomElement(TextInput));
  customElements.define("wc-checkbox", defineCustomElement(CheckBox));
})();
