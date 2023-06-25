import {Fade,  Avatar, FormControl, MenuItem, Box, Button, Container, IconButton, InputLabel, Typography, TextField, colors, useMediaQuery } from "@mui/material"
import  color from "../../../assets/colors";
import {  TimelineContent, TimelineDot, TimelineConnector, Timeline, TimelineItem, TimelineSeparator, TreeView } from "@mui/lab";
import MenuLateral from "../../../components/menu/menulateral";
import MenuSistema from "../../../components/menu/menusistema";
import { useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import { Margin, Padding, WidthFull } from "@mui/icons-material";


async function takeIt() {
  return await axios.get('http://localhost:3344/routes');
}


function SectionRota1() {
    const [options, setAge] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
      };
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
                  <MenuItem value={'Número do ônibus'}>Número do ônibus</MenuItem>
                  <MenuItem value={'Rotas'} >Rotas</MenuItem>
                  
                </Select>
              </FormControl>
              <TextField label={options}></TextField>
              <Timeline sx={{mr:55, mt: 5}}>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>a</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>               
                      <TimelineSeparator>
                        <TimelineDot />
                      </TimelineSeparator>
                      <TimelineContent>c</TimelineContent>
                    </TimelineItem>
              </Timeline>
              <TreeView>
                
              </TreeView>
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