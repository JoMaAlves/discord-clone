import { useState } from "react";
import ServerSideBar from "./components/ServerSideBar";
import SideBar from "./components/SideBar";
import ServerEntry from "./common/interfaces/serverEntry";
import { IconTypes } from "./common/enums/iconTypes";

const serversMock = [
  { id: "1", active: true, name: "Discord", iconType: IconTypes.DISCORD },
  { id: "2", active: false, name: "Joma" },
  { id: "3", active: false, name: "Joma" },
  { id: "4", active: false, name: "Joma" },
  { id: "5", active: false, name: "Joma" },
  { id: "6", active: false, name: "Plus", iconType: IconTypes.PLUS },
  { id: "7", active: false, name: "Compass", iconType: IconTypes.COMPASS },
  { id: "8", active: false, name: "Download", iconType: IconTypes.DOWNLOAD },
];

function App() {
  const [servers, setServers] = useState<ServerEntry[]>(serversMock);

  const updateActiveServer = (id: string) => {
    setServers((prevServers) => {
      return prevServers.map((server) => {
        if (server.id === id) {
          server.active = true;
          return server;
        }

        server.active = false;
        return server;
      });
    });
  };

  return (
    <div className="App position-relative d-flex">
      <ServerSideBar
        servers={servers}
        updateActiveServer={updateActiveServer}
      />
      <SideBar />
    </div>
  );
}

export default App;
