import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer () {




    return (
        <div id='footer' style={{  width : "100%" , display:"flex" ,flexDirection:"column" , height : "110px" , backgroundColor : "#EEEEEE"}}>
            <hr/>
            <div style ={{ display:"flex" , justifyContent:"space-around"}}>
            <FacebookIcon/>
            <LinkedInIcon/>
            <XIcon/>
            <TwitterIcon/>
            </div>


        </div>
    )
} ;


export default Footer ;