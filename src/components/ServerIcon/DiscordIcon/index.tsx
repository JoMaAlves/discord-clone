import React from "react";
import { IconTypes } from "../../../common/enums/iconTypes";

type Props = {
  active: boolean;
  iconType: IconTypes;
  mouseOver: boolean;
};

export default function DiscordIcon({ active, iconType, mouseOver }: Props) {
  const basicIcons = {
    [IconTypes.COMPASS]:
      "M24 22.9C23.39 22.9 22.9 23.39 22.9 24C22.9 24.61 23.39 25.1 24 25.1C24.61 25.1 25.1 24.61 25.1 24C25.1 23.39 24.61 22.9 24 22.9ZM24 14C18.48 14 14 18.48 14 24C14 29.52 18.48 34 24 34C29.52 34 34 29.52 34 24C34 18.48 29.52 14 24 14ZM26.19 26.19L18 30L21.81 21.81L30 18L26.19 26.19Z",
    [IconTypes.PLUS]:
      "M32 23.1111H24.8889V16H23.1111V23.1111H16V24.8889H23.1111V32H24.8889V24.8889H32V23.1111Z",
    [IconTypes.DOWNLOAD]:
      "M28.293 21.293L29.707 22.707L24 28.414L18.293 22.707L19.707 21.293L23 24.586V14H25V24.586L28.293 21.293ZM30 32V30H32V32C32 33.102 31.104 34 30 34H18C16.896 34 16 33.102 16 32V30H18V32H30Z",
  };

  const BuildSVG = () => {
    if (iconType !== IconTypes.DISCORD) {
      return (
        <path
          d={basicIcons[iconType]}
          fill={mouseOver || active ? "white" : "#23a559"}
        />
      );
    }

    return (
      <path
        d="M33.7187 15.675C31.9062 14.8925 29.9682 14.3238 27.942 14C27.6932 14.4151 27.4025 14.9735 27.2021 15.4176C25.0482 15.1187 22.9142 15.1187 20.8 15.4176C20.5996 14.9735 20.3023 14.4151 20.0513 14C18.0229 14.3238 16.0827 14.8946 14.2702 15.6791C10.6144 20.7767 9.62339 25.7476 10.1189 30.648C12.5436 32.3188 14.8935 33.3338 17.2037 33.9979C17.7741 33.2736 18.2828 32.5035 18.721 31.692C17.8864 31.3994 17.087 31.0382 16.3316 30.6189C16.532 30.482 16.728 30.3387 16.9174 30.1914C21.5246 32.1798 26.5304 32.1798 31.0825 30.1914C31.2741 30.3387 31.4701 30.482 31.6683 30.6189C30.9107 31.0403 30.1091 31.4014 29.2744 31.6941C29.7127 32.5035 30.2192 33.2757 30.7918 34C33.1042 33.3358 35.4563 32.3209 37.881 30.648C38.4624 24.9672 36.8878 20.0419 33.7187 15.675ZM19.3487 27.6343C17.9657 27.6343 16.8315 26.4429 16.8315 24.9921C16.8315 23.5413 17.9415 22.3479 19.3487 22.3479C20.756 22.3479 21.8902 23.5392 21.8659 24.9921C21.8681 26.4429 20.756 27.6343 19.3487 27.6343ZM28.6512 27.6343C27.2682 27.6343 26.134 26.4429 26.134 24.9921C26.134 23.5413 27.2439 22.3479 28.6512 22.3479C30.0584 22.3479 31.1926 23.5392 31.1684 24.9921C31.1684 26.4429 30.0584 27.6343 28.6512 27.6343Z"
        fill="white"
      />
    );
  };

  const changeColor = () => {
    if (mouseOver || active) {
      if (iconType !== IconTypes.DISCORD) {
        return "#23a559";
      }

      return "#5865F2";
    }

    return "#313338";
  };

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" fill={changeColor()} />
      <BuildSVG />
    </svg>
  );
}
