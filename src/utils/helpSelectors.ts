export const onCellPrepared = (e: any) => {
  if (e.column.command === 'edit') {
    let addLink = e.cellElement.querySelector('.dx-link-add');

    if (addLink) {
      addLink.remove();
    }
  }
};

export const onCellPreparedDel = (e: any) => {
  if (e.column.command === 'edit') {
    let addLink = e.cellElement.querySelector('.dx-link-add');
    let deleteLink = e.cellElement.querySelector('.dx-link-delete');

    if (addLink) {
      addLink.remove();
    }
    if (deleteLink) {
      deleteLink.remove();
    }
  }
};
