
import { Box ,styled} from "@mui/material"
import Slide from "./Slide"
// styles will be here 
const Leftslide= styled(Box)(({ theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const Rightslide= styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));



const Component = styled(Box)`
  display:flex;
`

const SideSlide = ({ products, title, watch }) => {
    const sideimgUrl ="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/d663cbddbbcb4ef6.jpg?q=20"

    return (
        <Component>

            <Leftslide>
                <Slide  products= {products} title= {title} watch= {watch}/>
            </Leftslide>
              
            <Rightslide>
                <img src= {sideimgUrl}  alt="sideimg" style={{width: 235}}/>
            </Rightslide>
        </Component>
    )
}

export default SideSlide