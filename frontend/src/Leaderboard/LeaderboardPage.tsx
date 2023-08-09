import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import LeaderTable from "./LeaderTable.tsx";
import { User } from "../User/User.ts";
// @ts-ignore
import { MockUsers } from "../MockData/MockUsers.ts";
import { userAPI } from "../API/userApi.ts";
import TemporaryDrawer from "../Features/TemporaryDrawer.tsx";

const LeaderboardPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url("../images/background.jpeg")`,
    // backgroundColor: "black",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    overflow: "hidden",
    // Add more styling properties as needed
  };

  // @ts-ignore
  const [users, setUsers] = useState<User[]>([]);
  // @ts-ignore
  const [players, setPlayers] = useState<User[]>([]);
  // @ts-ignore
  const [mockUsers, setMockUsers] = useState<User[]>(MockUsers);

  // @ts-ignore
  const [loading, setLoading] = useState(false);

  // @ts-ignore
  const [error, setError] = useState<string | undefined>(undefined);
  useEffect(() => {
    async function loadUsers() {
      setLoading(true);
      try {
        const data = await userAPI.get();
        setError("");
        setUsers(data);
        setPlayers(data.filter((user) => user.wins + user.loses > 0));
        console.log(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  return (
    <Container maxWidth={false} disableGutters style={containerStyle}>
      <TemporaryDrawer />
      <LeaderTable users={mockUsers} />
    </Container>
  );
};

export default LeaderboardPage;