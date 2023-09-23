
import { Box } from "@mui/material"
import Slide from "./Slide"
// styles will be here 

const SideSlide = ({ products, title, watch }) => {
    return (
        <Box>

            <Box>
                <Slide  products= {products} title= {title} watch= {watch}/>
            </Box>
              
            <Box>
            </Box>
        </Box>
    )
}

export default SideSlide