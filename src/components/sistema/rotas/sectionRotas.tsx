import { FormControl, MenuItem, Box, Container, InputLabel, TextField, Autocomplete, } from "@mui/material"
import { TimelineContent, TimelineDot, TimelineConnector, Timeline, TimelineItem, TimelineSeparator } from "@mui/lab";
import { useState } from "react";
import Select from '@mui/material/Select';
import axios from "axios";
import ModalContext from "../../../context/modalcontext";
import React from "react";
import { CardUsos } from "../../interfaces";

function SectionRota1() {
  const [value, setValue] = useState<CardUsos>([]);
  const [options, setAge] = useState('');
  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const [routes, setRoutes] = React.useState<CardUsos>([])
  const token = localStorage.getItem('token')
  const fundo = themes.palette.background.default
  const [Loading, setLoading] = useState(false);
  const [routesAll, setRoutesAll] = React.useState([])

  async function takeIt() {
    try {
      const resbus = await axios.post('https://easypass-iak1.onrender.com/routes/all', {
        token: token
      });
      console.log(resbus);
      console.log('ta indo');
      console.log(resbus);

      if (resbus.data) {
        const Cards = resbus.data
        setRoutesAll(Cards)
        console.log(routesAll)
        console.log(Cards);
      } else {
        console.log('deu merda rapeize')
      }
      if (options === 'Número do ônibus') {
        const response = await axios.post('https://easypass-iak1.onrender.com/routes/search', {
          token: token,
          route_num: value.route_num
        });
        const rotasres = response.data.consultStop;
        setRoutes(rotasres);
        setLoading(true);
        console.log(response);
        console.log(rotasres);
        console.log(routes);
      } else if (options === 'Rotas') {
        const response = await axios.post('https://easypass-iak1.onrender.com/routes/search', {
          token: token,
          route_nome: value.route_nome
        });
        const rotasres = response.data.consultStop;
        setRoutes(rotasres);
        setLoading(true);
        console.log(response);
        console.log(rotasres);
        console.log(routes);
      }
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    takeIt();
  }, [options, value]);

  console.log(value);


  return (
    <Box
      id="section1"
      sx={{
        height: "100vh",
        width: "80vw",
        float: "right",
        background: verify ? fundo : "white",
        position: "relative",
        overflowY: "scroll",
      }}>

      <Container sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <Container sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', mt: 10 }}>
          <FormControl sx={{ flex: 2 }}>
            <InputLabel id="demo-simple-select-autowidth-label" > Rotas disponiveis </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={options}
              onChange={(event) => setAge(event.target.value)}
              autoWidth
              label="Opções"
            >
              <MenuItem value={'Número do ônibus'}>Número do ônibus</MenuItem>
              <MenuItem value={'Rotas'} >Rotas</MenuItem>
            </Select>
          </FormControl>
          <Container sx={{ flex: 2 }}>
            <Container sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <FormControl variant="standard" >
                <Autocomplete
                  disablePortal
                  id="menu-item"
                  options={routesAll || []}
                  getOptionLabel={(option: any) => {
                    if (options === "Número do ônibus") {
                      const route_num = option.route_num || '';
                      return route_num;
                    } else if (options === "Rotas") {
                      const route_nome = option.route_nome || '';
                      return route_nome;
                    } else if (!options) {
                      return '';
                    }
                  }}
                  isOptionEqualToValue={(option, value) => {
                    if (options === "Número do ônibus") {
                      return option.route_num === (value.route_num || '');
                    } else if (options === "Rotas") {
                      return option.route_nome === (value.route_nome || '');
                    } else if (!options) {
                      return false; // Return a boolean value here
                    }
                    return false; // Return a boolean value here
                  }}
                  value={value}
                  onChange={(_, newValue) => {
                    setValue(newValue);
                  }}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label={options} />}
                />
              </FormControl>
            </Container>
          </Container>
        </Container>
      </Container>

      <Container sx={{
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2,
        mb: 10
      }}>
        {Loading ?
          <Timeline position="alternate" sx={{ boxShadow: ' 2px 2px 4px 2px rgba(0, 0, 0, 0.3)', width: '100%', mt: 10 }}>
            {routes.map((rotas) => (
              <TimelineItem key={rotas.stop_id} sx={{ paddingTop: '  5%' }}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{
                  color: verify ? 'white' : 'black',
                }}>
                  {rotas.stop_endbairro}, {rotas.stop_endrua}: {rotas.stop_endnum}, {rotas.stop_endcidade} - {rotas.stop_endUF}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline> : null}
      </Container>
    </Box>
  )
}

export default SectionRota1