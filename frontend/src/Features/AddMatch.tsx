// @ts-ignore
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Card, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Matches } from "../User/Matches.ts";
import { User } from "../User/User.ts";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface AddMatchProps {
  openAddMatch: boolean;
  handleAddMatchClose: () => void;
  users: User[];
  addNewMatch: (match: Matches) => void;
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
  backgroundImage: `url("../images/pingpong.gif")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  fontFamily: "AtariFont",
};

const AddMatch = ({
  openAddMatch,
  handleAddMatchClose,
  users,
  addNewMatch,
}: AddMatchProps) => {
  const [newMatch, setNewMatch] = useState<Matches>({
    id: 0,
    winner: "",
    loser: "",
    matchDate: "",
  });
  const [error, setError] = useState({
    winner: "",
    loser: "",
  });
  const [nicknames, setNicknames] = useState<String[]>(
    users.map((user) => {
      return user.nickname;
    }),
  );

  useEffect(() => {
    handleUsersChange();
  }, [users]);

  const handleUsersChange = () => {
    setNicknames(
      users.map((user) => {
        return user.nickname;
      }),
    );
  };

  const handleChange = (event: any, selected: string) => {
    const { id } = event.target;
    let name = id.toString().toLowerCase();
    let updatedMatch: Matches;
    setNewMatch((match) => {
      if (name.includes("winner")) {
        updatedMatch = new Matches({ ...match, winner: selected });
      } else if (name.includes("loser")) {
        updatedMatch = new Matches({ ...match, loser: selected });
      }
      return updatedMatch;
    });
  };
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const validated = validate(newMatch);
    setError(validated);

    if (validated.winner.length != 0 || validated.loser.length != 0) {
      return;
    }

    addNewMatch(newMatch);
    handleClose();
  };

  const handleClose = () => {
    setError({
      winner: "",
      loser: "",
    });
    setNewMatch({
      id: 0,
      winner: "",
      loser: "",
      matchDate: "",
    });
    handleAddMatchClose();
  };

  function validate(match: Matches) {
    let error: any = { winner: "", loser: "" };
    if (match.winner.length === 0 || !match.winner) {
      error.winner = "Winner is required.";
    } else if (
      users.findIndex((user) => {
        return (
          user.nickname.toString().toLowerCase() ==
          match.winner.toString().toLowerCase()
        );
      }) === -1
    ) {
      error.winner = "Player does not exist.";
    } else {
      error.winner = "";
    }

    if (match.loser.length === 0 || !match.loser) {
      error.loser = "Loser is required.";
    } else if (
      users.findIndex((user) => {
        return (
          user.nickname.toString().toLowerCase() ==
          match.loser.toString().toLowerCase()
        );
      }) === -1
    ) {
      error.loser = "Player does not exist.";
    } else {
      error.loser = "";
    }

    if (match.loser == match.winner) {
      error.loser = "Winner and Loser cannot be the same.";
      error.winner = "Winner and Loser cannot be the same.";
    }
    return error;
  }

  return (
    <Modal
      open={openAddMatch}
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
          Add New Match
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
            }}
          >
            <label
              htmlFor="winner"
              style={{ fontSize: "2.6vw", color: "yellow" }}
            >
              Winner
            </label>
            {/*<input*/}
            {/*  type="text"*/}
            {/*  name="winner"*/}
            {/*  placeholder="Enter Winner"*/}
            {/*  onChange={handleChange}*/}
            {/*  style={{*/}
            {/*    width: "100%",*/}
            {/*    fontSize: "1.5vw",*/}
            {/*    border: "none",*/}
            {/*    borderRadius: "8px",*/}
            {/*    height: "4.5vh",*/}
            {/*    fontFamily: "AtariFontSmooth",*/}
            {/*  }}*/}
            {/*/>*/}
            <Autocomplete
              id="winner"
              freeSolo
              options={nicknames}
              onInputChange={(event: any, value) => {
                handleChange(event, value);
              }}
              sx={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={"Enter Winner"}
                  inputProps={{
                    ...params.inputProps,
                    style: { fontSize: "1.5vw", fontFamily: "AtariFontSmooth" },
                  }}
                />
              )}
            />
            {error.winner.length > 0 && (
              <Card>
                <Typography color={"error"}>{error.winner}</Typography>
              </Card>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.2rem",
              width: "50%",
            }}
          >
            <label
              htmlFor="loser"
              style={{ fontSize: "2.6vw", color: "yellow" }}
            >
              Loser
            </label>
            {/*<input*/}
            {/*  type="text"*/}
            {/*  name="loser"*/}
            {/*  placeholder="Enter Loser"*/}
            {/*  onChange={handleChange}*/}
            {/*  style={{*/}
            {/*    width: "100%",*/}
            {/*    fontSize: "1.5vw",*/}
            {/*    border: "none",*/}
            {/*    borderRadius: "8px",*/}
            {/*    height: "4.5vh",*/}
            {/*    fontFamily: "AtariFontSmooth",*/}
            {/*  }}*/}
            {/*/>*/}
            <Autocomplete
              id="loser"
              freeSolo
              options={nicknames}
              onInputChange={(event: any, value) => {
                handleChange(event, value);
              }}
              sx={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={"Enter Loser"}
                  inputProps={{
                    ...params.inputProps,
                    style: { fontSize: "1.5vw", fontFamily: "AtariFontSmooth" },
                  }}
                />
              )}
            />
            {error.loser.length > 0 && (
              <Card>
                <Typography color={"error"}>{error.loser}</Typography>
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
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default AddMatch;
