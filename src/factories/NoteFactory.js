/**
 * NoteFactory.js
 * Factory for creating consistent note objects
 * Implements DRY principle for note creation
 */

class NoteFactory {
  static idCounter = 1;
  
  /**
   * Creates a new note object with consistent structure
   * @param {string} title - Note title
   * @param {string} content - Note content (HTML or plain text)
   * @param {string} category - Note category for organization
   * @param {number} [id] - Optional custom ID
   * @returns {Object} Note object with consistent structure
   */
  static create(title, content, category, id = null) {
    return {
      id: id || this.idCounter++,
      title: title || 'Untitled Note',
      content: content || '',
      category: category || 'uncategorized',
      timestamp: new Date().toISOString(),
      metadata: {
        created: new Date().toISOString(),
        modified: new Date().toISOString(),
        version: '1.0.0'
      }
    };
  }
  
  /**
   * Creates multiple notes from an array of data
   * @param {Array} notesData - Array of note data objects
   * @returns {Array} Array of created note objects
   */
  static createBatch(notesData) {
    return notesData.map(data => 
      this.create(data.title, data.content, data.category, data.id)
    );
  }
  
  /**
   * Creates a module notes object with consistent structure
   * @param {string} moduleName - Name of the module
   * @param {Array} sections - Array of section objects
   * @returns {Object} Module notes object
   */
  static createModule(moduleName, sections) {
    return {
      moduleName,
      created: new Date().toISOString(),
      sections: sections.reduce((acc, section) => {
        acc[section.key] = section.notes.map(note => 
          this.create(note.title, note.content, note.category, note.id)
        );
        return acc;
      }, {})
    };
  }
  
  /**
   * Validates a note object structure
   * @param {Object} note - Note object to validate
   * @returns {boolean} True if valid, false otherwise
   */
  static validate(note) {
    return note &&
           typeof note.id !== 'undefined' &&
           typeof note.title === 'string' &&
           typeof note.content === 'string' &&
           typeof note.category === 'string' &&
           typeof note.timestamp === 'string';
  }
  
  /**
   * Updates the timestamp of a note
   * @param {Object} note - Note to update
   * @returns {Object} Updated note object
   */
  static updateTimestamp(note) {
    return {
      ...note,
      timestamp: new Date().toISOString(),
      metadata: {
        ...note.metadata,
        modified: new Date().toISOString()
      }
    };
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NoteFactory;
}