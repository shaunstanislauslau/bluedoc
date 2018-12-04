import React from "react";
import { SortableContainer, SortableHandle, SortableElement, arrayMove } from 'react-sortable-hoc';

const DragHandle = SortableHandle(() => <span className="draghandle"><i className="fas fa-news-feed"></i></span>); // This can be any component you want

export default class DocItem extends React.Component {
  onAddClick = (e) => {
    e.preventDefault();
    const { index, item } = this.props;
    this.props.onAddItem(index, item);
  }

  render() {
    const { item } = this.props;

    let className = "doc-item-drageable doc-item clearfix";
    if (item.isNew) {
      className += " doc-item-new";
    }
    if (item.exist) {
      className += " doc-item-exist"
    }

    return (
      <div className={className}>
      { item.isNew == true && (
        <div className="title">Add a custom item</div>
      )}

      { item.isNew != true && (
        <div className="title">{item.title}</div>
      )}
        <div className="slug">{item.url}</div>
        <div className="opts">
          <a href="#" className="btn-add" onClick={this.onAddClick}><i className="fas fa-add"></i></a>
        </div>
      </div>
    );
  }
}