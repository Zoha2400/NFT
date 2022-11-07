import {React, useState} from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import UploadIcon from '@mui/icons-material/Upload';
import WalletIcon from '@mui/icons-material/Wallet';

import './Header.scss';
import brand from '../../img/brand.png';

function Header() {
  const [notify, newNotify] = useState(false);

  return (
    <header className='header'>

        <div className='Container'>
            <div className='brandBtn'>
                <div className='brand'>
                    <img src={brand} draggable={false} />
                </div>
                <div className='discover brandBtnItem'>discover</div>
                <div className='HowItWord brandBtnItem'>How it work</div>
            </div>

            <Menu notify={notify}/>
            <MobiMenu/>
            <MiniMenu notify={notify}/>
        </div>

    </header>
  )
}

function Menu(props) {
  return (
    <div className='menu'>
      
      <div className='search'>
          <input autoComplete='off' id='search' placeholder='Search'/>
          <SearchIcon/>
      </div>
      <div className="notify">
         {props.notify ? <NotificationsActiveIcon/> : <NotificationsIcon/>}
      </div>

      <div className='upload menuBtn'>Upload</div>
      <div className='connectWallet menuBtn'>Connect Wallet</div>
    
    </div>
  )
}


function MobiMenu() {

  function menuAnimate() {
    const adpMenuFLine = document.querySelector('.fline');
    const adpMenuSLine = document.querySelector('.sline');
    const miniMenu = document.querySelector('.miniMenu');

    adpMenuFLine.classList.toggle('rotateF');
    adpMenuSLine.classList.toggle('rotateS');
    miniMenu.classList.toggle('show');

  }

  return (
    <div className='MobiMenu' onClick={() => menuAnimate()}>
      <div className='adpMenu'>
        <p className='fline'></p>
        <p className='sline'></p>
      </div>
    </div>
  )
}


function MiniMenu(props) {
  return (
    <div className='miniMenu'>
      <div className='itemsMiniMenu-wrapper'>
        <div className='itemsMiniMenu'>
          <h1 className='MenuTitle'>Menu</h1>
          <p className='itemMenu'><SearchIcon/>Search</p>
          <p className='itemMenu'>{props.notify ? <NotificationsActiveIcon/> : <NotificationsIcon/>} Notifications</p>
          <p className='itemMenu'> <UploadIcon/> Upload</p>
          <p className='itemMenu'> <WalletIcon/> Connect Wallet</p>
        </div>
    </div>  

  </div>
  )
}


export default Header