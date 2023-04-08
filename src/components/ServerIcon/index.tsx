import React, { useState } from "react";
import DiscordIcon from "./DiscordIcon";
import classNames from "classnames";
import ServerEntry from "../../common/interfaces/serverEntry";

type Props = {
  serverEntry: ServerEntry;
  updateActiveServer: (id: string) => void;
};

export default function ServerIcon({ serverEntry, updateActiveServer }: Props) {
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  const handleClick = () => {
    updateActiveServer(serverEntry.id);
  };

  const IconContent = () => {
    if (serverEntry.iconType) {
      return (
        <DiscordIcon
          iconType={serverEntry.iconType}
          mouseOver={mouseOver}
          active={serverEntry.active}
        />
      );
    }

    return (
      <img
        src={`https://picsum.photos/id/${Number(serverEntry.id) * 12}/400`}
        alt=""
      />
    );
  };

  return (
    <div className="d-flex align-items-center server-icon-container">
      {(mouseOver || serverEntry.active) && (
        <span
          style={{ height: serverEntry.active ? "2.5rem" : "1.25rem" }}
          className="localizator position-absolute rounded"
        />
      )}

      <div
        className={classNames("mx-auto overflow-hidden server-icon", {
          "circle-border": !mouseOver,
          "rounded-border": mouseOver || serverEntry?.active,
        })}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IconContent />
      </div>
    </div>
  );
}
