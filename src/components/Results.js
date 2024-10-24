import React from 'react';
import { useState, useEffect } from "react";
import resultsData from "../resultsData.json";
//import Footer from "./Footer";
import SocialMedia from "./SocialMedia";
import { Helmet } from 'react-helmet';
import "../css/final.css";

function Results(props) {
  const { type } = props;
  const [sharing, setSharing] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showDeco, setShowDeco] = useState(false);
  const [page, setPage] = useState(1);
  const [popupVisible, setPopupVisible] = useState(false);
  const dreamingLandscapesLink = "https://athousanddreams.world/the-dreaming-landscapes";
  const dreamingProfilesLink = "https://athousanddreams.world/the-dreaming-profiles";
  const essentialWorkshopsLink = "https://athousanddreams.world/the-essential-dreaming-workshop";
  const athousanddreamsLink = "https://athousanddreams.world/"
  const aberdeemLink = "https://aberdeem.medium.com/";
  const talkshowLink = "https://youtube.com/@athousanddreams144?si=hBzEPeJOM3ZgGCUo";

  const handleShare = () => {
    if (sharing) {
      setSharing(false);
    } else {
      setSharing(true);
    }
  };

  const handleContinue = async () => {    
    setPage(page + 1)
    await changeVisible()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handleBack = () => {    
    setPage(page - 1)
    changeVisible()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handleDownload = () => {

  }

  const handleLearnMore = () => {
    window.open(athousanddreamsLink)
  }

  const changeVisible = () => {
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
    }, 500);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };
  // Abrir popup automáticamente después de 3 segundos al llegar a la página 6
  useEffect(() => {
    if (page === 6) {
      const timer = setTimeout(() => {
        setPopupVisible(true);
      }, 2000);
      return () => clearTimeout(timer); // Limpiar el timer cuando el componente se desmonta
    }
  }, [page]);

  useEffect(() => {
    if ([2, 3, 4].includes(page)) {
      setShowDeco(true);
    } else {
      setShowDeco(false);
    }
  }, [page]);

  const handleOpenLink = (link) => {
    window.open(link, '_blank')
  }

  useEffect(() => {
    if ([2, 3, 4].includes(page)) {
      setShowDeco(true)
    }
  }, [page])

  return (
    <div className={`column ${page === 2 ? "page-2-column" : ""}`}>
      <Helmet>
        <title>{type}</title>
        <meta property="og:title" content={`I'm a ${type}!`} />
        <meta property="og:description" content="Discover your dreaming profile now!" />
        <meta property="og:image" content={`https://thedreamerquiz.athousanddreams.world/images/Profiles/${type}.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`I'm a ${type}!`} />
        <meta name="twitter:url" content={window.location.href} />
        <meta name="twitter:description" content="Discover your dreaming profile now!" />
        <meta name="twitter:image" content={`https://thedreamerquiz.athousanddreams.world/images/Profiles/${type}.svg`} />
        <meta name="author" content="A Thousand Dreams" />
      </Helmet>
      <div className="quiz__main-title">
        <div className='adorno-titulo'>
          <img
            src="../images/star.png" alt=""
          >
          </img>
        </div>
        <h1>The Dreamer Quiz</h1>
      </div>
      <div className='final__mobile-column'>
        {resultsData.results.map((dreamer) => {
          if (dreamer.name === type) {
            return (
              <div key={dreamer.id}>
                {
                  page === 1 && (
                    <div className={`f-row ${visible ? "fade-in" : "fade-out"}`}>
                      <div className="profile-image">
                        <img
                          src={`../images/Profiles/${type}.svg`}
                          alt="Dreamer Profile"
                        ></img>
                      </div>
                      <div className="column">
                        <div className='final__results-intro'>
                          <h2>Your results.</h2>
                          <p>According to the <strong>answers you provided, this is your actual dreaming profile.</strong> Consider that this will inevitably shift and evolve over time.</p>
                        </div>
                        <h2 className="dreamer-title">{dreamer.name}</h2>
                        <img
                          className="adorno-1 first"
                          src="../images/Color/nube.svg"
                          alt=""
                        ></img>
                        <span className="dreamer-intro-phrase">
                          {resultsData.intro.phrase}
                        </span>
                      </div>
                    </div>
                  )
                }

                {
                  page === 2 && (
                    <div className={`${visible ? "fade-in" : "fade-out"}`}>
                      <div className='final__page-container'>
                        <div className="profile-section">
                          <div className="profile-section-box">
                            <div className="back-div">
                              <div className='adorno-1 not-display-desktop'>
                                <img
                                  src="../images/Icons/ATD-IconosAdorno-03.png"
                                  className='profile-espiral'
                                  alt=""
                                >
                                </img>
                              </div>
                              <h2 className="dreamer-subtitle white">Profile</h2>
                              {dreamer.message["Profile"].map((element, index) => (
                                <div
                                  key={"p" + index}
                                  className='final__results-paragraph profile'
                                  dangerouslySetInnerHTML={{ __html: element }}
                                />
                              ))}
                            </div>
                            <div className="front-div">
                              <div className='adorno-1 not-display-desktop'>
                                <img
                                  src="../images/Icons/ATD-IconosAdorno-03.png"
                                  className='profile-espiral'
                                  alt=""
                                >
                                </img>
                              </div>
                              <h2 className="dreamer-subtitle white">Profile</h2>
                              {dreamer.message["Profile"].map((element, index) => (
                                <div
                                  key={"p" + index}
                                  className='final__results-paragraph profile'
                                  dangerouslySetInnerHTML={{ __html: element }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className='adorno-2'>
                            <img
                              src='../images/Color/ATD-NubeOnda.svg'
                              alt='nube'
                            ></img>
                          </div>
                          <p className="dreamer-paragraph">
                            {resultsData.intro.paragraph}
                          </p>
                          <div className='adorno-1 end-of-paragraph'>
                            <img
                              src="../images/Icons/ATD-IconosAdorno-08.png"
                              alt=""
                            >
                            </img>
                          </div>
                        </div>
                      </div>
                      <div className="button-deco">
                        <img
                          src={`../images/Vector 32.svg`}
                          alt="button-deco"
                        ></img>
                      </div>
                    </div>
                  )
                }

                {
                  page === 3 && (
                    <div className={`final__page-container ${visible ? "fade-in" : "fade-out"}`}>
                      <div className={`final__landscapes-columna-1`} style={{ paddingTop: dreamer.message["Landscapes"].length <= 2 ? "5vw" : "2vw" }}>
                        <div className={`final__landscapes-image ${dreamer.message["Landscapes"].length > 2 ? "" : "remove-image"}`}>
                          <img
                            src="../images/ATD-LogoQuiz.png"
                            alt="landscapes"
                          />
                        </div>
                        <div className='adorno-3'>
                          <img
                            src="../images/Icons/ATD-IconosAdorno-04.png"
                            alt="landscapes"
                          />
                        </div>
                        <div className='adorno-4'>
                          <img
                            src="../images/deco-2.png"
                            alt="landscapes"
                          />
                        </div>
                        <h2 className="dreamer-subtitle">Landscapes</h2>
                        {
                          dreamer.message["Landscapes"].map((element, index) => (
                            [0, 1].includes(index) && (
                              <div
                                key={"p" + index}
                                className={`final__results-paragraph landscapes ${dreamer.message["Landscapes"].length <= 2 ? "one-column" : ""}`}
                                dangerouslySetInnerHTML={{ __html: element }}
                              />
                            )
                          ))
                        }
                      </div>
                      <div className='final__landscapes-columna-2'>
                        {
                          dreamer.message["Landscapes"].map((element, index) => (
                            ![0, 1].includes(index) && (
                              <div
                                key={"p" + index}
                                className='final__results-paragraph landscapes'
                                dangerouslySetInnerHTML={{ __html: element }}
                              />
                            )
                          ))
                        }
                        {
                          dreamer.message["Landscapes"].length <= 2 && (
                            <div className='final__landscapes-fill'>
                              <img
                                src='../images/ATD-LogoQuiz.png'
                                alt="ATD Quiz Logo"
                              >
                              </img>
                            </div>
                          )
                        }
                        <div className='adorno-5'>
                          <img
                            src="../images/Icons/llave.svg"
                            alt=""
                          >
                          </img>
                        </div>
                      </div>
                      <div className="button-deco">
                        <img
                          src={`../images/Vector 32.svg`}
                          alt="button-deco"
                        ></img>
                      </div>
                    </div>
                  )
                }

                {
                  page === 4 && (
                    <div className={`final__page-container ${visible ? "fade-in" : "fade-out"}`}>
                      <div className='final__landscapes-columna-1'>
                        <div className={`final__tips-image ${dreamer.message["Tips"].length <= 2 ? "remove-image" : ""}`}>
                          <img
                            src="../images/nube_estrella.svg"
                            alt="landscapes"
                          />
                        </div>
                        <h2
                          className="dreamer-subtitle tips"
                          style={{
                            textAlign: dreamer.message["Tips"].length <= 2 ? "center" : ""
                          }}
                        >Tips</h2>
                        {
                          dreamer.message["Tips"].map((element, index) => (
                            [0, 1].includes(index) && (
                              <div
                                key={"p" + index}
                                className={`final__results-paragraph landscapes ${dreamer.message["Tips"].length <= 2 ? "one-column" : ""}`}
                                dangerouslySetInnerHTML={{ __html: element }}
                              />
                            )
                          ))
                        }
                      </div>
                      <div className='final__landscapes-columna-2'>
                        {
                          dreamer.message["Tips"].map((element, index) => (
                            ![0, 1].includes(index) && (
                              <div
                                key={"p" + index}
                                className='final__results-paragraph landscapes'
                                dangerouslySetInnerHTML={{ __html: element }}
                              />
                            )
                          ))
                        }
                        {
                          dreamer.message["Tips"].length <= 2 && (
                            <div className='final__tips-fill'>
                              <img
                                src='../images/nube_estrella.svg'
                                alt=""
                              >
                              </img>
                            </div>
                          )
                        }
                        <div className='adorno-5'>
                          <img
                            src="../images/Icons/llave.svg"
                            alt=""
                          >
                          </img>
                        </div>
                      </div>
                      <div className="button-deco">
                        <img
                          src={`../images/Vector 32.svg`}
                          alt="button-deco"
                        ></img>
                      </div>
                    </div>
                  )
                }

                {
                  page === 5 && (
                    <div className={`${visible ? "fade-in" : "fade-out"}`}>
                      <h2 className='know-more-title'>If you want to <i>know</i> more</h2>
                      <div className={`final__know-more-section`}>
                        <div className='adorno-8'>
                          <img
                            src="../images/Icons/EstrellaDoble.svg"
                            alt=""
                          >
                          </img>
                        </div>
                        <div className='adorno-9'>
                          <img
                            src="../images/Icons/espiral.svg"
                            alt=""
                          >
                          </img>
                        </div>
                        <div className='final__know-more-card' onClick={() => handleOpenLink(athousanddreamsLink)}>
                          <div className='landscape-image'>
                            <img
                              src="../images/ath-protype.png"
                              alt="A Thousand Dreams App"
                              className='prototype-image'
                            />
                          </div>
                          <h3>A Thousand <br></br>Dreams App</h3>
                          <p className='f-paragraph-card'>Document, analyze data and share your dreams with the world.</p>
                        </div>
                        <div className='final__know-more-card' onClick={() => handleOpenLink(dreamingLandscapesLink)}>
                          <div className='landscape-image'>
                            <img
                              src="../images/ATD-LandscapesCover 1.png"
                              alt="The Dreaming Landscapes"
                            />
                          </div>
                          <h3>The Dreaming Landscapes</h3>
                          <p>Where you can explore the lands where dreams occur.</p>
                        </div>
                        <div className='final__know-more-card' onClick={() => handleOpenLink(dreamingProfilesLink)}>
                          <div className='landscape-image'>
                            <img
                              src="../images/ATD-ProfilesCover 1.png"
                              alt="The Dreaming Profiles"
                            />
                          </div>
                          <h3>The Dreaming Profiles</h3>
                          <p>Where you can review the ten dreaming archetypes.</p>
                        </div>
                        <div className='final__know-more-card' onClick={() => handleOpenLink(essentialWorkshopsLink)}>
                          <div className='landscape-image'>
                            <img
                              src="../images/TheEssentialDreamingWorkshop.svg"
                              alt="The Essential Dreaming Workshop"
                            />
                          </div>
                          <h3>The Essential Dreaming Workshop</h3>
                          <p>A workshop for future dreamers, dream fans and magic seekers.</p>
                        </div>
                      </div>
                      <div className='final__know-more-section-extra'>
                        <div className='final__know-more-card secondary' onClick={() => handleOpenLink(aberdeemLink)}>
                          <div className='extra-image'>
                            <img
                              src="../images/MediumLogo.svg"
                              alt="landscapes"
                            />
                          </div>
                          <p>A blog on dreams.</p>
                        </div>
                        <div className='final__know-more-card secondary' onClick={() => handleOpenLink(talkshowLink)}>
                          <div className='extra-image'>
                            <img
                              src="../images/ATDPlusOne_logo.svg"
                              alt="landscapes"
                              style={{ filter: "invert(0)" }}
                              className='microphone'
                            />
                          </div>
                          <p>A talk show on dreams.</p>
                        </div>
                        <div className='adorno-10'>
                          <img
                            src="../images/Icons/espiral.png"
                            alt=""
                          >
                          </img>
                        </div>
                      </div>
                    </div>
                  )
                }

                {page === 6 && (
                    <div className={`${visible ? "fade-in" : "fade-out"}`}>
                      <div className="share-section">
                        <div className='share-section-column-1'>
                          <div className="share-section-profile">
                            <div className="back-div-2"></div>
                            <div className="front-div-2">
                              <img src={`../images/Profiles/${type}.svg`} alt=""></img>
                            </div>
                          </div>
                        </div>
                        <div className='share-section-column-2'>
                          <div className='adorno-final'>
                            <img src="../images/Color/capa.svg" alt=""></img>
                          </div>
                          <h2 className="dreamer-subtitle">Share your <i>profile!</i></h2>
                          <p>Tell your <strong>friends</strong> what type of <strong>dreamer you are.</strong></p>
                          <div className="share-section-text">
                            <button className="share-button" onClick={handleShare}>SHARE WITH FRIENDS</button>
                          </div>
                          <div className='not-display-mobile'>
                            <p className='final__download-text'><strong>Click here to download</strong> your dreaming profile and <strong>save it for later!</strong></p>
                            <a href={`https://thedreamerquiz.athousanddreams.world/pdfs/${type}.pdf`} target='_blank' rel="noreferrer">
                              <button className="final__continue-button download-button">DOWNLOAD RESULTS</button>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Popup trigger automatic after 3 seconds */}
                      {popupVisible && (
                          <div className="popup-overlay" onClick={handleClosePopup}>
                            <div className="popup-content">
                              <a href="https://athousanddreams.world/the-essential-dreaming-workshop/#table-shop" target="_blank" rel="noopener noreferrer">
                                <img src="../images/Workshop_Day_of_the_dead.png" alt="Popup Link" />
                              </a>
                            </div>
                          </div>
                      )}

                      <div className="button-deco">
                        <img src={`../images/footer-bg-mobile.svg`} alt="button-deco"></img>
                      </div>
                    </div>
                )}

                <div className='final__controllers-container'>
                  <div className={`final__controllers ${visible ? "fade-in" : "fade-out"}`}>
                    {page === 6 && (
                      <div className='not-display-desktop'>
                        <p className='final__download-text'><strong>Click here to download</strong> your dreaming profile and <strong>save it for later!</strong></p>
                        <button className="final__continue-button download-button" onClick={handleDownload}>DOWNLOAD RESULTS</button>
                      </div>
                    )}
                    <div className='final__page-tracker'>
                      <div className={`circle-page-tracker ${page === 1 ? "actual" : ""}`}></div>
                      <div className={`circle-page-tracker ${page === 2 ? "actual" : ""}`}></div>
                      <div className={`circle-page-tracker ${page === 3 ? "actual" : ""}`}></div>
                      <div className={`circle-page-tracker ${page === 4 ? "actual" : ""}`}></div>
                      <div className={`circle-page-tracker ${page === 5 ? "actual" : ""}`}></div>
                      <div className={`circle-page-tracker ${page === 6 ? "actual" : ""}`}></div>
                    </div>
                    <button className='final__continue-button' onClick={page !== 6 ? handleContinue : handleLearnMore}>
                      {page !== 6 ? (
                        <>CONTINUE</>
                      ) : (
                        <>LEARN MORE</>
                      )}
                      <img
                        src='../images/Icons/arrow1.svg'
                        className='final__continue-arrow'
                        style={{ marginLeft: "0.5vw" }}
                        alt=""
                      >
                      </img>
                    </button>
                    <button
                      className={`final__back-button ${page === 1 ? "no-display" : ""} ${page === 5 ? "blue" : ""}`}
                      onClick={handleBack}
                      disabled={page === 1}
                    >
                      <img
                        src={`../images/Icons/arrow${page === 5 ? "3" : "2"}.svg`}
                        className='final__back-arrow'
                        style={{ marginRight: "0.5vw" }}
                        alt=""
                      ></img>
                      {page === 5 ? (
                        <strong>BACK</strong>
                      ) : (
                        <>BACK</>
                      )}
                    </button>
                  </div>
                </div>
                {
                  [2, 3, 4].includes(page) && (
                    <div className={`button-deco-2 ${showDeco ? "fade-in" : "fade-out"}`}>
                      <img
                        src={`../images/Vector 32 desktop${page === 2 ? "" : " 2"}.svg`}
                        alt="button-deco"
                      ></img>
                    </div>
                  )
                }

                {
                  page === 6 && (
                    <div className={`button-deco-2 ${showDeco ? "fade-in" : "fade-out"}`}>
                      <img
                        src={`../images/footer-bg-desktop.svg`}
                        alt="button-deco"
                      ></img>
                    </div>
                  )
                }

                {
                  sharing && (
                    <SocialMedia 
                      handleShare={handleShare}
                    />
                  )
                }
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  )
}

export default Results;
