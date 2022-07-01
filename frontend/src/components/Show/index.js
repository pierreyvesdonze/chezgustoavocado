import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    return (
        <Card sx={{ maxWidth: 345 }} className="card">
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton fontSize="large">
                        <AddShoppingCartIcon />
                    </IconButton>
                }
                title="Avocat"
                subheader="Garanti 100% naturel"
            />
            <CardMedia
                component="img"
                height="280"
                image="../../../images/avocado1.png"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Grâce à sa richesse en fibres et en vitamine K, l'avocat est un aliment qui ralentit la digestion, et permet de garder un taux de sucre dans le sang (glycémie) stable.
                    <br />
                    <button className='custom-btn'>Commander</button>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Recette au pif :</Typography>
                    <Typography paragraph>
                        Commencez par couper vos avocats en 2, dénoyautez-les puis coupez-les grossièrement en morceaux..
                    </Typography>
                    <Typography paragraph>
                        Mettez dans le bol du blender la chair des avocats avec le jus de citron.Mixez jusqu'à l'obtention d'un mélange lisse et onctueux puis ajoutez l'huile en filet sans cesser de mixer, puis la crème, la purée de piment.Salez et poivrez à votre convenance.
                    </Typography>
                    <Typography paragraph>
                        Servez frais dans un grand bol ou des verrines, en entrée froide ou à l'apéritif.
                    </Typography>
                    <Typography>
                        <h2>Astuce</h2>
                        Cette délicieuse mousse d'avocats est parfaite pour y plonger des chips, des bâtons de légumes ou des gressins. Mais elle est aussi merveilleuse en verrines, avec par exemple des lamelles de saumon fumé, des oeufs de saumon, des petites crevettes grises ou roses, de la chair de crabe, du thon émietté, du pamplemousse, des tomates confites, des oeufs durs... Le choix est vaste ! Seule exigence : vous faire plaisir et vous régaler !
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
