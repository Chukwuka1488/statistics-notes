/**
 * dom-utils.js
 * DOM manipulation utilities following DRY and KISS principles
 */

const DOMUtils = {
  /**
   * Hide all elements matching selector
   * @param {string} selector - CSS selector
   */
  hideAll(selector) {
    document.querySelectorAll(selector).forEach(el => 
      el.classList.remove('active')
    );
  },

  /**
   * Show element by ID
   * @param {string} id - Element ID
   */
  showElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add('active');
    }
  },

  /**
   * Toggle active class on element
   * @param {HTMLElement} element - DOM element
   * @param {boolean} [add=true] - Add or remove class
   */
  toggleActive(element, add = true) {
    if (add) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  },

  /**
   * Remove active class from all matching elements
   * @param {string} selector - CSS selector
   */
  removeActiveClass(selector) {
    document.querySelectorAll(selector).forEach(el => 
      el.classList.remove('active')
    );
  },

  /**
   * Create element with properties
   * @param {string} tag - HTML tag name
   * @param {Object} props - Properties to set
   * @param {Array} children - Child elements or text
   * @returns {HTMLElement} Created element
   */
  createElement(tag, props = {}, children = []) {
    const element = document.createElement(tag);
    
    // Set properties
    Object.entries(props).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'style' && typeof value === 'object') {
        Object.assign(element.style, value);
      } else if (key.startsWith('data-')) {
        element.setAttribute(key, value);
      } else {
        element[key] = value;
      }
    });
    
    // Add children
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child instanceof HTMLElement) {
        element.appendChild(child);
      }
    });
    
    return element;
  },

  /**
   * Find element by ID with error handling
   * @param {string} id - Element ID
   * @returns {HTMLElement|null} Element or null
   */
  findById(id) {
    try {
      return document.getElementById(id);
    } catch (error) {
      console.error(`Element with ID '${id}' not found:`, error);
      return null;
    }
  },

  /**
   * Find all elements by selector
   * @param {string} selector - CSS selector
   * @returns {NodeList} List of elements
   */
  findAll(selector) {
    try {
      return document.querySelectorAll(selector);
    } catch (error) {
      console.error(`Invalid selector '${selector}':`, error);
      return [];
    }
  },

  /**
   * Add event listener with delegation
   * @param {string} parentSelector - Parent element selector
   * @param {string} childSelector - Child element selector
   * @param {string} eventType - Event type
   * @param {Function} handler - Event handler
   */
  delegateEvent(parentSelector, childSelector, eventType, handler) {
    const parent = document.querySelector(parentSelector);
    if (!parent) return;
    
    parent.addEventListener(eventType, (event) => {
      const target = event.target.closest(childSelector);
      if (target && parent.contains(target)) {
        handler.call(target, event);
      }
    });
  },

  /**
   * Safely set innerHTML with sanitization
   * @param {HTMLElement|string} element - Element or ID
   * @param {string} html - HTML content
   */
  setHTML(element, html) {
    const el = typeof element === 'string' 
      ? this.findById(element) 
      : element;
      
    if (el) {
      // Basic XSS prevention - in production use DOMPurify
      el.innerHTML = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    }
  },

  /**
   * Toggle visibility of element
   * @param {string} id - Element ID
   * @param {boolean} [show] - Force show/hide
   */
  toggleVisibility(id, show) {
    const element = this.findById(id);
    if (!element) return;
    
    if (show === undefined) {
      element.style.display = element.style.display === 'none' ? '' : 'none';
    } else {
      element.style.display = show ? '' : 'none';
    }
  },

  /**
   * Batch update multiple elements
   * @param {Array} updates - Array of {selector, action, value}
   */
  batchUpdate(updates) {
    updates.forEach(({ selector, action, value }) => {
      const elements = this.findAll(selector);
      elements.forEach(el => {
        switch (action) {
          case 'addClass':
            el.classList.add(value);
            break;
          case 'removeClass':
            el.classList.remove(value);
            break;
          case 'toggleClass':
            el.classList.toggle(value);
            break;
          case 'setStyle':
            Object.assign(el.style, value);
            break;
          case 'setAttribute':
            el.setAttribute(value.name, value.value);
            break;
        }
      });
    });
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DOMUtils;
}