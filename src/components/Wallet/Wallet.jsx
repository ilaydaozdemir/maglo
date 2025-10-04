import React from 'react';
import TopIcon from '../../assets/Top.png';
import VisaIcon from '../../assets/visa.png';
import AvatarIcon from '../../assets/Avater.png';

const Wallet = () => {
  // Dummy data for scheduled transfers
  const scheduledTransfers = [
    {
      id: 1,
      name: "iSaleh Ahmed",
      date: "April 28, 2022 at 11:00",
      amount: "-$435.00"
    },
    {
      id: 2,
      name: "John Smith",
      date: "April 29, 2022 at 14:30",
      amount: "-$250.00"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      date: "April 30, 2022 at 09:15",
      amount: "-$180.00"
    },
    {
      id: 4,
      name: "Mike Wilson",
      date: "May 1, 2022 at 16:45",
      amount: "-$320.00"
    },
    {
      id: 5,
      name: "Emma Davis",
      date: "May 2, 2022 at 12:20",
      amount: "-$150.00"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
      
      }}>
        <h3 style={{
          fontFamily: 'Kumbh Sans',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '18px',
          color: 'var(--color-text-primary)',
          margin: 0
        }}>
          Wallet
        </h3>
        <div style={{
          display: 'flex',
          gap: '4px',
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-text-secondary)'
          }}></div>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-text-secondary)'
          }}></div>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-text-secondary)'
          }}></div>
        </div>
      </div>
      
      {/* Cards Container */}
      <div style={{
        position: 'relative',
        width: '354px',
        height: '230px'
      }}>
        {/* Second Card (Top) */}
        <div style={{
          position: 'absolute',
          top: '180px',
          left: '15px',
          width: '324px',
          height: '172px',
          borderRadius: '15px',
          paddingTop:"18px",
          paddingLeft:"30px",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          background: 'linear-gradient(114.49deg, rgba(255, 255, 255, 0.4) -41.08%, rgba(255, 255, 255, 0.1) 104.09%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          zIndex: 2
        }}>
              <img src={TopIcon} alt="Top" style={{ width: 'auto', height: 'auto' }} />
              <div style={{
            fontFamily: 'Gordita',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '17px',
            letterSpacing: '0.1em',
            color: 'rgba(27, 33, 45, 1)',
            marginTop: '17px',
            textAlign:"left"
          }}>
           85952548****
          </div>
          
          {/* Visa Icon - Sağ alt köşe */}
          <div style={{
            position: 'absolute',
            bottom: '18px',
            right: '30px'
          }}>
            <img src={VisaIcon} alt="Visa" style={{ width: 'auto', height: 'auto' }} />
          </div>
        </div>
        
        {/* First Card (Bottom) */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '0px',
          width: '354px',
          height: '210px',
          borderRadius: '15px',
          background: 'linear-gradient(104.3deg, #4A4A49 2.66%, #20201F 90.57%)',
          paddingTop:"18px",
          paddingLeft:"30px",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          zIndex: 1
        }}>
          <img src={TopIcon} alt="Top" style={{ width: 'auto', height: 'auto' }} />
          <div style={{
            fontFamily: 'Gordita',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '17px',
            letterSpacing: '0.1em',
            color: 'white',
            marginTop: '17px',
            textAlign:"left"
          }}>
            5495  7381  3759  2321
          </div>
        </div>
      </div>
      
      {/* Scheduled Transfers Section */}
      <div style={{
        marginTop: '250px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h3 style={{
            fontFamily: 'Kumbh Sans',
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '18px',
            color: 'var(--color-text-primary)',
            margin: 0
          }}>
            Scheduled Transfers
          </h3>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            
          }}>
            <span style={{
              fontFamily: 'Kumbh Sans',
              fontWeight: 500,
              fontSize: '14px',
              fontWeight: "600",
              color: 'var(--color-transaction-link)'
            }}>
              View All
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="var(--color-transaction-link)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        {/* Transfer List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {scheduledTransfers.map((transfer) => (
            <div key={transfer.id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              borderBottom: '1px solid var(--color-border-primary)'
            }}>
              {/* Left side - Avatar and info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <img src={AvatarIcon} alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                <div>
                  <div style={{
                    fontFamily: 'Kumbh Sans',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: 'var(--color-text-primary)',
                    marginBottom: '4px'
                  }}>
                    {transfer.name}
                  </div>
                  <div style={{
                    fontFamily: 'Kumbh Sans',
                    fontWeight: 400,
                    fontSize: '12px',
                    color: 'var(--color-text-secondary)'
                  }}>
                    {transfer.date}
                  </div>
                </div>
              </div>
              
              {/* Right side - Amount */}
              <div style={{
                fontFamily: 'Kumbh Sans',
                fontWeight: 600,
                fontSize: '16px',
                color: 'var(--color-text-primary)'
              }}>
                {transfer.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
