import React from 'react';
import {
  CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle,
} from '@coreui/react';
import { CIcon } from '@coreui/icons-react';
import {
  cilCopy, cilShareAlt, cibFacebook, cibLinkedin, cibWhatsapp,
} from '@coreui/icons';
import { useSetRecoilState } from 'recoil';
import { toastState } from '@/GlobalToast/GlobalToast';
import { xLogo } from '../../icons/awesomeIcons';

interface ShareButtonProps {
  title: string;
  resortUrl?: string | null;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, resortUrl = null }) => {
  const setToast = useSetRecoilState(toastState);

  const handleShareClick = (platform: 'twitter' | 'facebook' | 'linkedin' | 'whatsapp') => {
    const shareUrl = resortUrl ? `${window.location.origin}/${resortUrl}` : `${window.location.href}`;
    const text = `Check out this resort: ${title}`;
    let url = '';

    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text} ${shareUrl}`)}`;
        break;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    const shareUrl = `${window.location.href}`;
    navigator.clipboard.writeText(shareUrl);
    setToast({ visible: true, message: 'Link copied to clipboard!' });
    setTimeout(() => setToast({ visible: false, message: '' }), 3000);
  };

  return (
    <CDropdown className="align-items-center">
      <CDropdownToggle color="link" className="p-0">
        <div className="resort-card__share-wrap me-2">
          <CIcon icon={cilShareAlt} />
        </div>
      </CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem onClick={() => handleShareClick('twitter')}>
          <CIcon icon={xLogo} className={'me-2'}/>
          Share on X.com
        </CDropdownItem>
        <CDropdownItem onClick={() => handleShareClick('facebook')}>
          <CIcon icon={cibFacebook} className="me-2" />
          Share on Facebook
        </CDropdownItem>
        <CDropdownItem onClick={() => handleShareClick('linkedin')}>
          <CIcon icon={cibLinkedin} className="me-2" />
          Share on LinkedIn
        </CDropdownItem>
        <CDropdownItem onClick={() => handleShareClick('whatsapp')}>
          <CIcon icon={cibWhatsapp} className="me-2" />
          Share on WhatsApp
        </CDropdownItem>
        <CDropdownItem onClick={handleCopyLink}>
          <CIcon icon={cilCopy} className="me-2" />
          Copy Link
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default ShareButton;
