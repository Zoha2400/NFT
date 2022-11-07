import React from 'react'
import './CreatorNetwork.scss';
import preWiewPhoto from '../../../img/PreviewPhoto.png';
import ava from '../../../img/ava.png';
import eth from '../../../img/eth.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function CreatorNetwork() {
  return (
    <section className='CreatorNetwork-wrapper'>
        
        <div className='CreatorNetwork'>
            
            <section className='cnFirstLine'>
                    <div className='creatorRec'>
                      <img draggable={'false'} src={preWiewPhoto}/>
                    </div>

                  <section className='TextInfoRec'>
                        <div className='creatorRecNetwork'>
                          <h1>The creator network®</h1>  
                          <div className='CreatorCard'>
                            <div>
                              <img src={ava}/>
                              <span>
                                <h6>Creator</h6>
                                <p>Enrico Cole</p>
                              </span>
                            </div>

                            <div>
                              <img src={eth}/>
                              <span>
                                <h6>Instant price</h6>
                                <p>3.5ETH</p>
                              </span>
                            </div>
                          </div>
                        </div>
                          
                        <div className='CurrenBid'>
                            <h6>Current Bid</h6>
                            <p className='balance'>1.00 ETH</p>
                            <p className='toDollar'>$3,618.36</p>
                            <h6>Auction ending in</h6>

                            <div className='Auctions'>
                              <span>
                                <p>19</p>
                                <span>Hrs</span>
                              </span>
                              <span>
                                <p>24</p>
                                <span>Mins</span>
                              </span>
                              <span>
                                <p>19</p>
                                <span>Secs</span>
                              </span>
                            </div>
                        </div>

                        <div className='RecBtn'>
                          <button className='upload PlaceABid'>Place a bid</button>
                          <button className='connectWallet ViewItem'>View item</button>
                        </div>

                        <div className='paginationRec'>
                          <button className='left connectWallet'><ArrowBackIcon/></button>
                          <button className='right connectWallet'><ArrowForwardIcon/></button>
                        </div>
                  </section>   


            </section>
        </div>

    </section>
  )
}

export default CreatorNetwork;