import { FormControl, MenuItem, Box, Container, InputLabel, Typography, TextField, } from "@mui/material"
import { TimelineContent, TimelineDot, TimelineConnector, Timeline, TimelineItem, TimelineSeparator } from "@mui/lab";
import { useState } from "react";
import Select from '@mui/material/Select';
import axios from "axios";
import ModalContext from "../../context/modalcontext";
import React from "react";

function SectionRota1() {
  const [take, setTake] = useState([]);
  const [value, setValue] = useState('');
  const [options, setAge] = useState('');
  const [ex, setEx] = useState('');
  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const [routes, setRoutes] = React.useState([])
  const token = localStorage.getItem('token')
  const fundo = themes.palette.background.default
  const [Loading, setLoading] = useState(false);

    async function takeIt() {
      try {
        if (options === 'Número do ônibus') {
          const response = await axios.post('http://localhost:3344/routes/search', {
            token: token,
            route_num: value
          });
          const rotasres = response.data.consultStop;
          setRoutes(rotasres);
          setLoading(true);
          console.log(response);
          console.log(rotasres);
          console.log(routes);
        } else if (options === 'Rotas') {
          const response = await axios.post('http://localhost:3344/routes/search', {
            token: token,
            route_nome: value
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
    if (value !== '') {
      takeIt();
    }
  }, [options, value]);

  //teste
  return (
    <Box sx={{
      mt: '9vh',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80vw',
      float: 'right',
      background: verify ? fundo : 'white',
      overflowY: Loading ? 'hidden' : 'scroll'
    }}>
      <Container sx={{
        width: '100%',
        height: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      
        mb: 5
      }}>
        <Container sx={{
          width: '100%',
          height: '100%',
        }}>
          <Container sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', mx: 'auto', spacing: 2, gap: 2 }}>
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
            <TextField label={options} type="input" tabIndex={0} onChange={i => setValue(i.target.value)} sx={{ flex: 2 }} />
          </Container>
          <Typography color={'#f9a825'} sx={{ width: '100%' }}>{ex}</Typography>
        </Container>
        <Container sx={{
          width: '80%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 2,
        }}>
          {Loading ?
            <Timeline position="alternate" sx={{ boxShadow: ' 2px 2px 4px 2px rgba(0, 0, 0, 0.3)', width: '100%', mt: 5 }}>
              {routes.map((rotas) => (
                <TimelineItem key={rotas.stop_id} sx={{ paddingTop: '  5%' }}>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{
                    color: verify ? 'white' : 'black',
                  }}>{rotas.stop_endrua}</TimelineContent>
                </TimelineItem>
              ))}
            </Timeline> : null}
        </Container>
      </Container>
    </Box>
  )
}

export default SectionRota1