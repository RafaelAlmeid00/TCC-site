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

function SectionRota1() {
    const [take, setTake] = useState();
    const [vis, visState] = useState('hidden');
    const [value, setValue] = useState('');
    const [options, setAge] = useState('');
    const [ex, setEx] = useState('');
    const [textval, setTextval] = useState(' ');
    var [fax, setFax] = useState(0);

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
        fax = 0;
    };

    useEffect(() => {
      setTextval(String(take?.data[0]?.route_nome));
      if (take != undefined) {
        visState('visible')
      }
    }, [take])
    const regex = /[/]/;
    var Strcasa = () => { if (textval != undefined){return textval.search(regex)}else{setTextval(' ')} };
    console.log(Strcasa);
    
    //console.log('this is take: ', take?.data[0]?.route_nome);
    //console.log('this is textval: ', textval);
    
    useEffect(() => {
      if (options == 'Número do ônibus') {
        console.log('oi kkkkkkkkkkkkkkkkk');
        
        setEx('Ex: 230, 720, 260*');
      }else
      if (options == 'Rotas') {
        setEx('Ex: santo agostinho, conforto, aterrado*');
      }else{setEx('')}
      
    }, [options])
   
    const keyEvent = param => {
      
        console.log(param.key);
        if (param.key == 'Enter') {
          takeIt()
        }

    }
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
                borderRadius: '2%',
                width: '70vw',
                height: '70vh',
                boxShadow: ' 4px 4px 4px 4px rgba(0, 0, 0, 0.3)',
            }}>
                <Box id='box' component="div" sx={{
                 
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
              <TextField label={options} type="input" tabIndex={0} onKeyDown={keyEvent} onChange={i => setValue(i.target.value)} sx={{
                mr: 0.1
              }}></TextField><Button variant="outlined" id="btn" sx={{height: '8vh',  
              '&:hover': {
                background: '#e9e9e9e9',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
                '& svg': {
                    fill: colors.sc, 
                },
                '& .MuiTypography-root': {
                    color: colors.sc, 
                }}}} onClick={takeIt} endIcon={<SendIcon sx={{width: '100%', paddingRight: '2vh', 
              '&:hover': {
                  color: color.sc,
                  '& svg': {
                      fill: colors.sc,
                  },
                  '& .MuiTypography-root': {
                      color: colors.sc,
                  }}}}/>}></Button>
                  <Typography color={'#f9a825'}>{ex}</Typography>
              <Timeline position="alternate"  sx={{padding: '10%', visibility: `${vis}`, }}>
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

export default SectionRota1