import React, { Component } from 'react';
import EmailEditor from 'react-email-editor';

class CreateTemplate extends Component {
  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { html } = data;
      console.log('exportHtml', html);
    });
  };

  setMergeTags = () => {
    this.editor.setMergeTags([
      { name: 'First Name', value: '{{first_name}}' },
      { name: 'Last Name', value: '{{last_name}}' }
    ]);
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.setMergeTags}>Tags</button>
          <button class="btn btn-success" onClick={this.exportHtml}>
            Save
          </button>
        </div>
        <EmailEditor ref={editor => (this.editor = editor)} />
      </div>
    );
  }
}

export default CreateTemplate;
