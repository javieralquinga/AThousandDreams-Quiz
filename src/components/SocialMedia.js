import React from 'react';

function SocialMedia (props) {
    const {message, image, handleShare} = props;

    let sharingUrl = window.location.href
    // Function to share on Facebook
    const shareOnFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(sharingUrl)}`;
        window.open(url, '_blank');
    };

    // // Function to share on Instagram
    // const shareOnInstagram = () => {
    //     /*
    //     const url = `https://www.instagram.com/share?url=${encodeURIComponent(sharingUrl)}&title=${encodeURIComponent(message)}&image=${encodeURIComponent(image)}`;
    //     window.open(url, '_blank');
    //     */
    // };

    // Function to share on LinkedIn
    const shareOnLinkedIn = () => {
        const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(sharingUrl)}&title=${encodeURIComponent(message)}&source=${encodeURIComponent(image)}`;
        window.open(url, '_blank');
    };

    // Function to share on WhatsApp
    const shareOnWhatsApp = () => {
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message + ' ' + sharingUrl)}`;
        window.open(url, '_blank');
    };

    // // Function to share on FB Messenger
    // const shareOnMessenger = () => {
    //     /*
    //     const url = `https://www.facebook.com/dialog/send?app_id=249709107829907&display=popup&link=${encodeURIComponent(sharingUrl)}`;
    //     window.open(url, '_blank');
    //     */
    // };

    // Function to share via email
    const shareByEmail = () => {
        const subject = encodeURIComponent('Discover your Dreamer Profile!');
        const body = encodeURIComponent(`${message}\n\n${sharingUrl}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
      };

    // Function to copy the link
    const copyLink = () => {
        navigator.clipboard.writeText(sharingUrl);
        alert('Link copied to clipboard');
    };

    return (
        <div className='sharing-buttons'>
            <div className='sharing-row'>                         
                <button className='close-button' onClick={handleShare}>x</button>
            </div>
            <div className='sharing-row'>
                <img 
                    src='../images/Color/nube.svg' 
                    alt=''
                    className='adorno-share'
                />
            </div>
            <div className='sharing-row'>
                <h2>Choose a <i>social</i> media</h2>
            </div>
            <div className='sharing-row'>
                <button onClick={shareOnFacebook}><img src='/images/Icons/social/facebook.svg' alt=""/></button>
                {/* <button onClick={shareOnInstagram}><img src='/images/Icons/social/instagram.svg' alt=""/></button> */}
                <button onClick={shareOnLinkedIn}><img src='/images/Icons/social/linkedin.svg' alt=""/></button>
                <button onClick={shareOnWhatsApp}><img src='/images/Icons/social/whatsapp.svg' alt=""/></button>                               
                {/* <button onClick={shareOnMessenger}><img src='/images/Icons/social/messenger.svg' alt=""/></button> */}
                <button onClick={shareByEmail}><img className='email-icon' src='/images/Icons/social/email.svg' alt=""/></button>                
            </div>
            <div className='sharing-row'>            
                <span>or Copy Link</span>
            </div>
            <div className='sharing-row'>
                <button onClick={copyLink}><img src='/images/Icons/social/link.svg' alt=""/></button>
            </div>
        </div>
    );
};

export default SocialMedia;

