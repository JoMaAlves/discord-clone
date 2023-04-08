import React from "react";
import ServerIcon from "../ServerIcon";
import { IconTypes } from "../../common/enums/iconTypes";
import ServerEntry from "../../common/interfaces/serverEntry";
import classNames from "classnames";

type Props = {
  servers: ServerEntry[];
  updateActiveServer: (id: string) => void;
};

export default function ServerSideBar({ servers, updateActiveServer }: Props) {
  return (
    <div className="d-flex flex-column server-side-bar-container">
      {servers.map((server, index) => (
        <div
          className={classNames("d-flex flex-column", {
            "mt-2": server.iconType !== IconTypes.DISCORD,
          })}
          key={server.id}
        >
          <ServerIcon
            serverEntry={server}
            updateActiveServer={updateActiveServer}
          />

          {(index === 0 || index === servers.length - 2) && (
            <div className="mt-2 separator align-self-center" />
          )}
        </div>
      ))}
    </div>
  );
}
