import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, canonicalUrl, ogImage }) => {
  const location = useLocation();
  const baseUrl = 'https://oneaxissolutions.com';
  
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }
    
    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };
    
    // Update description
    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description, true);
      updateMetaTag('twitter:description', description);
    }
    
    // Update keywords
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    
    // Update canonical URL
    const canonical = canonicalUrl || `${baseUrl}${location.pathname}`;
    let linkElement = document.querySelector('link[rel="canonical"]');
    if (linkElement) {
      linkElement.setAttribute('href', canonical);
    } else {
      linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      linkElement.setAttribute('href', canonical);
      document.head.appendChild(linkElement);
    }
    
    // Update OG and Twitter URLs
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('twitter:url', canonical);
    
    // Update OG title
    if (title) {
      updateMetaTag('og:title', title, true);
      updateMetaTag('twitter:title', title);
    }
    
    // Update OG image
    if (ogImage) {
      updateMetaTag('og:image', `${baseUrl}${ogImage}`, true);
      updateMetaTag('twitter:image', `${baseUrl}${ogImage}`);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, location]);
  
  return null;
};

export default SEO;
