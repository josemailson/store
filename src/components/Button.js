import '../styles/Button.css'

const styleSucess = {
   color: 'white',
   backgroundColor: "green",
}

const styleWarning = {
   color: 'black',
   backgroundColor: '#FEE191',
}

const styleDanger = {
   color: 'white',
   backgroundColor: '#E84258',
}

const styleDefault = {
   color: 'white',
   backgroundColor: 'gray',
}

function styleBtn (status) {
   if(status ==='success') {
      return styleSucess
   } else if(status ==='warning') {
      return styleWarning       
   } else if (status ==='danger') {
      return styleDanger
   } else {
      return styleDefault 
   } 
}

export default function Button(props) {
   return (        
      <button className='btn' style={styleBtn(props.status)}>{props.name}</button>
   )
}