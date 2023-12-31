// @ts-ignore
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Card, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Player } from "../User/Player.ts";
import { User } from "../User/User.ts";

interface AddPlayerProps {
  openAddPlayer: boolean;
  handleAddPlayerClose: () => void;
  users: User[];
  addNewPlayer: (player: Player) => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "43%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "54vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  backgroundImage: `url("../images/guyPingpong.gif")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  fontFamily: "AtariFont",
};

const AddPlayer = ({
  openAddPlayer,
  handleAddPlayerClose,
  users,
  addNewPlayer,
}: AddPlayerProps) => {
  const [newPlayer, setNewPlayer] = useState<Player>({
    id: "",
    firstName: "",
    lastName: "",
    nickname: "",
  });
  const [error, setError] = useState({
    nickname: "",
    firstName: "",
    lastName: "",
  });
  useEffect(() => {}, [users]);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    let updatedPlayer: Player;
    setNewPlayer((player) => {
      updatedPlayer = new Player({ ...player, [name]: value });
      return updatedPlayer;
    });
  };
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const validated = validate(newPlayer);
    setError(validated);

    if (
      validated.firstName.length != 0 ||
      validated.lastName.length != 0 ||
      validated.nickname != 0
    ) {
      return;
    }
    addNewPlayer(newPlayer);
    handleClose();
  };

  const handleClose = () => {
    setError({
      firstName: "",
      lastName: "",
      nickname: "",
    });
    setNewPlayer({
      id: "",
      nickname: "",
      firstName: "",
      lastName: "",
    });
    handleAddPlayerClose();
  };

  function validate(player: Player) {
    let error: any = { nickname: "", firstName: "", lastName: "" };
    if (player.nickname.length === 0 || !player.nickname) {
      error.nickname = "Username is required.";
    } else if (!isNaN(+player.nickname.charAt(0))) {
      error.nickname = "Username needs to start with a letter.";
    } else if (
      users.findIndex((user) => {
        return (
          user.nickname.toString().toLowerCase() ==
          player.nickname.toString().toLowerCase()
        );
      }) != -1
    ) {
      error.nickname = "Username is already taken.";
    } else {
      error.nickname = "";
    }

    if (player.firstName.length === 0 || !player.firstName) {
      error.firstName = "First name is required.";
    } else if (!isNaN(+player.firstName.charAt(0))) {
      error.firstName = "First name needs to start with a letter.";
    } else {
      error.firstName = "";
    }

    if (player.lastName.length === 0 || !player.lastName) {
      error.lastName = "Last name is required.";
    } else if (!isNaN(+player.lastName.charAt(0))) {
      error.lastName = "Last name needs to start with a letter.";
    } else {
      error.lastName = "";
    }
    return error;
  }

  return (
    <Modal
      open={openAddPlayer}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div
          style={{
            textAlign: "center",
            fontSize: "3.5vw",
            borderBottom: "2px solid white",
            fontFamily: "AtariFont",
            color: "yellow",
          }}
        >
          Add New Player
        </div>
        <form
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "15px",
            paddingTop: "1.5rem",
            paddingLeft: "1.5rem",
            fontSize: "1.7rem",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.2rem",
              width: "50%",
              color: "yellow",
            }}
          >
            <label htmlFor="nickname" style={{ fontSize: "2.6vw" }}>
              Username
            </label>
            <input
              type="text"
              name="nickname"
              placeholder="Enter Username"
              onChange={handleChange}
              style={{
                width: "100%",
                fontSize: "1.5vw",
                border: "none",
                borderRadius: "8px",
                height: "4.5vh",
                fontFamily: "AtariFontSmooth",
              }}
            />
            {error.nickname.length > 0 && (
              <Card>
                <Typography color={"error"}>{error.nickname}</Typography>
              </Card>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.2rem",
              width: "50%",
              color: "yellow",
            }}
          >
            <label htmlFor="firstName" style={{ fontSize: "2.6vw" }}>
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              onChange={handleChange}
              style={{
                width: "100%",
                fontSize: "1.5vw",
                border: "none",
                borderRadius: "8px",
                height: "4.5vh",
                fontFamily: "AtariFontSmooth",
              }}
            />
            {error.firstName.length > 0 && (
              <Card>
                <Typography color={"error"}>{error.firstName}</Typography>
              </Card>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.2rem",
              width: "50%",
              color: "yellow",
            }}
          >
            <label htmlFor="lastName" style={{ fontSize: "2.6vw" }}>
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={handleChange}
              style={{
                width: "100%",
                fontSize: "1.5vw",
                border: "none",
                borderRadius: "8px",
                height: "4.5vh",
                fontFamily: "AtariFontSmooth",
              }}
            />
            {error.lastName.length > 0 && (
              <Card>
                <Typography color={"error"}>{error.lastName}</Typography>
              </Card>
            )}
          </div>

          <div className="input-group">
            <Button
              type="button"
              sx={{
                fontSize: "1.9vw",
                fontFamily: "AtariFontExtraSmooth",
                // color: "yellow",
                color: "white",
              }}
              variant={"outlined"}
              onClick={handleSubmit}
            >
              Save
            </Button>
            <span> </span>
            <Button
              type="button"
              sx={{
                fontSize: "1.9vw",
                fontFamily: "AtariFontExtraSmooth",
                // color: "yellow",
                color: "white",
              }}
              variant={"outlined"}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <div
              style={{
                textAlign: "center",
                fontSize: "1.2vw",
                paddingTop: "1.5rem",
                color: "yellow",
              }}
            >
              New players need at least 5 matches to be displayed on the
              Leaderboard
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default AddPlayer;
