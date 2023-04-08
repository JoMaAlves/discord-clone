import { IconTypes } from "../enums/iconTypes";

export default interface ServerEntry {
  active: boolean;
  id: string;
  name: string;
  iconType?: IconTypes;
}
