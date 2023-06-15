import { Box, IconButton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import colors from "../../assets/colors";
import { AgradecimentosAnderson, AgradecimentosHenrique, AgradecimentosLuciane, EquipeEasyPass, Objetivo, PorqueEasyPass } from "./cards";
import { Fade } from "react-awesome-reveal";

function Section2EasyPass() {
    const [selectedId, setSelectedId] = useState(null);

    const items = [
        { id: '1', title: 'Equipe EasyPass', subtitle: 'Quem trabalha conosco' },
        { id: '5', title: '', subtitle: ' ' },
        { id: '3', title: 'Porquê a EasyPass', subtitle: 'Nossos Motivos' },
        { id: '4', title: '', subtitle: '' },
        { id: '2', title: 'Objetivo', subtitle: 'Nossas Metas' },
        { id: '6', title: '', subtitle: ' ' },
    ];

    const renderComponentById = (id: any) => {
        switch (id) {
            case '1':
                return <EquipeEasyPass />;
            case '5':
                return <AgradecimentosAnderson />;
            case '3':
                return <PorqueEasyPass />;
            case '4':
                return <AgradecimentosLuciane />;
            case '2':
                return <Objetivo />;
            case '6':
                return <AgradecimentosHenrique />;
            default:
                return null;
        }
    }

    const handleClose = () => {
        setSelectedId(null);
    };



    return (
        <Fade cascate>
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        key={selectedId}
                        layoutId={selectedId}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onClick={handleClose}
                    >
                        <motion.div
                            whileHover={{ boxShadow: '0px 0px 0px 3px #30e09a' }}
                            layoutId={`card-${selectedId}`}
                            style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '0.5rem',
                                maxWidth: 950
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <IconButton sx={{
                                float: 'right',
                            }}>
                                <CloseIcon onClick={handleClose} sx={{
                                    fontSize: '1.5rem',
                                }}/>
                            </IconButton>
                            {renderComponentById(selectedId)}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                }}
            >
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layoutId={`card-${item.id}`}
                        onClick={() => setSelectedId(item.id)}
                        whileHover={{ boxShadow: '0px 0px 0px 3px #30e09a' }}
                        style={{
                            backgroundColor: 'lightgray',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            cursor: 'pointer',
                        }}
                    >
                        <motion.h5 style={{ color: colors.tc, fontWeight: '900', fontSize: '15px' }}>
                            {item.subtitle}
                        </motion.h5>
                        <motion.h2>{item.title}</motion.h2>
                    </motion.div>
                ))}
            </Box>
        </Box>
        </Fade>
    );
}

export default Section2EasyPass;