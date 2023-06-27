import {Fade,  Avatar, FormControl, MenuItem, Box, Button, Container, IconButton, InputLabel, Typography, TextField, colors, useMediaQuery } from "@mui/material"
import  color from "../../../assets/colors";
import {  TimelineContent, TimelineDot, TimelineConnector, Timeline, TimelineItem, TimelineSeparator, TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import MenuLateral from "../../../components/menu/menulateral";
import MenuSistema from "../../../components/menu/menusistema";
import { useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import { Margin, Padding, WidthFull} from "@mui/icons-material";
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
    const [textval, setTextval] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
      };

    async function takeIt() {
        if (options == 'N ônibus') {
          setTake(await axios.post('http://localhost:3344/routes/search', 
          {token: token, route_num: value}));
        }else
        if (options == 'Rotas') {
          setTake(await axios.post('http://localhost:3344/routes/search', 
          {token: token, route_nome: value}));
        }
        setTextval(String(take?.data[0].route_nome));
    };
    
    const regex = /[/]/; 
    var Strcasa = textval.search(regex);
    
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
                width: '70vw',
                height: '70vh',
            }}>
                <Box id='box' component="div" sx={{
                    border: 1,
                    width: '50%',
                    display: 'inline-block',

                    padding: '4%',
                }}>
                <FormControl sx={{mr: 1, minWidth: 80 }} >
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
                  <MenuItem value={'N ônibus'}>Número do ônibus</MenuItem>
                  <MenuItem value={'Rotas'} >Rotas</MenuItem>
                  
                </Select>
              </FormControl>
              <TextField label={options} type="input" onChange={i => setValue(i.target.value)}></TextField><Button onClick={takeIt}>clica</Button>
              <Timeline sx={{mr:55, mt: 5}}>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>{textval.slice(0, Strcasa - 1)}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>               
                      <TimelineSeparator>
                        <TimelineDot />
                      </TimelineSeparator>
                      <TimelineContent>{textval.slice(Strcasa + 1)}</TimelineContent>
                    </TimelineItem>
              </Timeline>
              </Box>

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