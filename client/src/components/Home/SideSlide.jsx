
import { Box ,styled} from "@mui/material"
import Slide from "./Slide"
// styles will be here 
const Leftslide= styled(Box)`
    width:82%;
`
const Rightslide= styled(Box)`
width: 16%;
padding :5px ;
margin-top :10px;
margin-left :20px;



`
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
                <img src= {sideimgUrl}  alt="sideimg" style={{width: 240}}/>
            </Rightslide>
        </Component>
    )
}

export default SideSlide