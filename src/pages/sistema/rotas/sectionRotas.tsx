import {Fade,  Avatar, FormControl, MenuItem, Box, Button, Container, IconButton, InputLabel, Typography, TextField, colors, useMediaQuery } from "@mui/material"
import  color from "../../../assets/colors";
import {  TimelineContent, TimelineDot, TimelineConnector, Timeline, TimelineItem, TimelineSeparator, TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SendIcon from '@mui/icons-material/Send';
import MenuLateral from "../../../components/menu/menulateral";
import MenuSistema from "../../../components/menu/menusistema";
import { useEffect, useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import { Margin, Padding, WidthFull} from "@mui/icons-material";
import Image from "../../../assets/busao.jpg";
const token = localStorage.getItem('token');

const a = {
  token: token
};

const options = {
  method: 'GET',
  url: 'http://localhost:3344/routes/search',
  params: a, 
};


function SectionRota1() {
    const [take, setTake] = useState();
    const [value, setValue] = useState('');
    const [options, setAge] = useState('');
    const [textval, setTextval] = useState(' ');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
      };

    async function takeIt() {
        if (options == 'Número do ônibus') {
          setTake(await axios.post('http://localhost:3344/routes/search', 
          {token: token, route_num: value}));

        }else
        if (options == 'Rotas') {
          setTake(await axios.post('http://localhost:3344/routes/search', 
          {token: token, route_nome: value}));

        }
        
    };
    useEffect(() => {
      setTextval(String(take?.data[0]?.route_nome));
    }, [take])
    const regex = /[/]/;
    var Strcasa = () => { if (textval != undefined){return textval.search(regex)}else{setTextval(' ')} };
    console.log(Strcasa);
    
    console.log('this is take: ', take?.data[0]?.route_nome);
    console.log('this is textval: ', textval);
    
    
    return (
        <>  
            <MenuSistema></MenuSistema>
            <MenuLateral></MenuLateral>
            <Container sx={{
                display: 'flex',
                flexDirection: 'row',                
                marginTop: '10%',
                marginLeft: '25%',
                padding: '0%',
                border: 1,
                borderRadius: '2%',
                width: '70vw',
                height: '70vh',
            }}>
                <Box id='box' component="div" sx={{
                    borderRight: 1,
                    
                    width: '50%',
                    display: 'inline-block',

                    padding: '4%',
                   
                }}>
                <FormControl  sx={{mr: 0.5, minWidth: 80, padding: 0.1, width: '24%'}} >
                <InputLabel id="demo-simple-select-autowidth-label">Opções</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={options}
                  onChange={handleChange}
                  autoWidth
                  label="Opções"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Número do ônibus'}>Número do ônibus</MenuItem>
                  <MenuItem value={'Rotas'} >Rotas</MenuItem>
                  
                </Select>
              </FormControl>
              <TextField label={options} type="input" onChange={i => setValue(i.target.value)} sx={{
                mr: 0.1
              }}></TextField><Button variant="outlined" id="btn" sx={{height: '8vh',  
              '&:hover': {
                background: '#e9e9e9e9',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
                '& svg': {
                    fill: colors.sc, // Adicionado para mudar a cor do ícone
                },
                '& .MuiTypography-root': {
                    color: colors.sc, // Adicionado para mudar a cor do texto
                }}}} onClick={takeIt} endIcon={<SendIcon sx={{width: '100%', paddingRight: '2vh', 
              '&:hover': {
                  color: color.sc,
                  '& svg': {
                      fill: colors.sc, // Adicionado para mudar a cor do ícone
                  },
                  '& .MuiTypography-root': {
                      color: colors.sc, // Adicionado para mudar a cor do texto
                  }}}}/>}></Button>
              <Timeline position="alternate" sx={{padding: '10%'}}>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot variant="outlined" color="primary"/>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>{textval.slice(0, Strcasa() - 1)}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>               
                      <TimelineSeparator>
                        <TimelineDot variant="outlined" color="secondary"/>
                      </TimelineSeparator>
                      <TimelineContent>{textval.slice(Strcasa() + 1)}</TimelineContent>
                    </TimelineItem>
              </Timeline>
              <Typography>{take?.data[0]?.path_routes}</Typography>
              </Box>

              <Box sx={{
                width: '50%',
                
              }}>
              <img src={Image} style={{
                height: '70vh',
                borderRadius: '2%',
                width: '35vw',}}></img></Box>

            </Container>
        </>
    )
}
/* aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {renderTree(data)}
    </TreeView>*/

    //VAI TOMAR NO CU PIRANHA, CHUPA MINHA PIKA
export default SectionRota1