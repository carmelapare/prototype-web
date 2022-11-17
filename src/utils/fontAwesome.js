import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";

export default function initFontAwesome() {
  library.add(faLink);
  library.add(faUser);
  library.add(faPowerOff);
}