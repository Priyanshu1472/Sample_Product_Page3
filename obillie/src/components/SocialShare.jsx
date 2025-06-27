import React from 'react';
import { Share2, Facebook, Twitter, Instagram } from 'lucide-react';
import '../styles/SocialShare.css';

// Social Share Component
const SocialShare = () => {
    return (
      <div className="social-share">
        <h3 className="share-title">Share</h3>
        <div className="social-icons">
          <Facebook className="social-icon facebook" />
          <Twitter className="social-icon twitter" />
          <Instagram className="social-icon instagram" />
          <Share2 className="social-icon share" />
        </div>
      </div>
    );
  };

export default SocialShare;