import { Alert, AlertTitle } from "@mui/material"
import { BtnHome } from "../btns"
import ModalContext from "../../context/modalcontext";
import React from "react";
import colors from "../../assets/colors";

interface Prop {
    nomeBtn: string;
    rotaBtn: string;
    statusAlert: string;
    textAlert: string;
    titleAlert: string;
}

export default function AlertaModal({
    nomeBtn,
    rotaBtn,
    statusAlert,
    textAlert,
    titleAlert,
}: Prop) {
    const { verify } = React.useContext(ModalContext);
  
    return (
        <>
            <Alert severity={statusAlert == 'warning' ? 'warning' : (statusAlert == 'error' ? 'error' : 'info')} sx={{ width: '100%', padding: 3, gap: 2 }}>
                <AlertTitle>{titleAlert}</AlertTitle>
                <div style={{ marginBottom: 10 }}>{textAlert}</div>
                <BtnHome
                    name={nomeBtn}
                    route={rotaBtn}
                    cl={verify ? colors.pm : 'white'}
                    bc={verify ? 'white' : undefined}
                    bch={verify ? 'white' : undefined}
                />
            </Alert>
        </>
    );
}
