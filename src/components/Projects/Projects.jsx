
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Projects.css';

export function Projects(){
    return(
         <>
         <h1>Projetos</h1>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
        <Card sx={{ maxWidth: 500, borderRadius: 3, boxShadow: 5, p: 2, background: "#a574a2" }}>
          <CardContent>
            <Typography variant="h5">Projeto 1</Typography>
            <Typography>Descrição</Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 500, borderRadius: 3, boxShadow: 5, p: 2, background: "#a574a2" }}>
          <CardContent>
            <Typography variant="h5">Projeto 2</Typography>
            <Typography>Descrição</Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 500, borderRadius: 3, boxShadow: 5, p: 2, background: "#a574a2" }}>
          <CardContent>
            <Typography variant="h5">Projeto 2</Typography>
            <Typography>Descrição</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
    )
}