import { publish } from '@/utils/events';

type Props = {
  modelDetail: any
  tableData: any
  navigate: any
  listSources: any
  exclude: any
  modalSize: any
  customModalId: any
  isSingle: any
}

const useAutoAction = ({ modelDetails, tableData, navigate, listSources, exclude, modalSize, customModalId, isSingle }: Props) => {
  const handleModalAction = (event) => {
    event.preventDefault();

    const target = event.target instanceof HTMLElement ? event.target : null;

    if (!target) return;

    if (target.classList.contains('autotable-modal-edit')) {
      handleEdit(event);
    } else if (target.classList.contains('autotable-modal-update-status')) {
      handleStatusUpdate(event);
    } else {
      const id = target.getAttribute('data-id');
      const action = target.getAttribute('data-action') || target.getAttribute('href');

      if (!id || !action) return;

      const record = isSingle ? tableData : tableData.data.find(item => item.id == id);

      publish('prepareModalAction', {
        modelDetails,
        record,
        action,
        listSources,
        modalSize,
        customModalId,
        classList: Array.from(target.classList || [])
      });
    }
  };

  const handleView = (event) => {
    event.preventDefault();

    const target = event.target instanceof HTMLElement ? event.target : null;

    if (!target) return;

    const id = target.getAttribute('data-id');
    const action = target.getAttribute('href');

    if (!id || !action) return;

    const record = isSingle ? tableData : tableData.data.find(item => item.id == id);

    publish('prepareView', {
      modelDetails,
      record,
      action,
      modalSize,
      customModalId,
      exclude
    });
  };

  const handleEdit = (event) => {
    event.preventDefault();

    const target = event.target instanceof HTMLElement ? event.target : null;

    if (!target) return;

    const id = target.getAttribute('data-id');
    const action = (target.getAttribute('data-action') || target.getAttribute('href'))?.replace(/\/edit/g, '');

    if (!id || !action) return;

    const record = isSingle ? tableData : tableData.data.find(item => item.id == id);

    publish('prepareEdit', {
      modelDetails,
      record,
      action,
      listSources,
      modalSize,
      customModalId
    });
  };

  const handleStatusUpdate = (event) => {
    event.preventDefault();

    const target = event.target instanceof HTMLElement ? event.target : null;

    if (!target) return;

    const id = target.getAttribute('data-id');
    const action = target.getAttribute('href');

    if (!id || !action) return;

    const record = isSingle ? tableData : tableData.data.find(item => item.id == id);

    publish('prepareStatusUpdate', {
      modelDetails,
      record,
      action,
      modalSize
    });
  };

  const handleNavigation = (event) => {
    const mouseEvent = event;

    if (mouseEvent.ctrlKey) return;

    event.preventDefault();

    const target = event.currentTarget instanceof HTMLElement ? event.currentTarget : null;

    if (!target) return;

    const href = target.getAttribute('href');
    if (href) {
      navigate(href);
    }
  };

  return {
    handleModalAction,
    handleView,
    handleEdit,
    handleStatusUpdate,
    handleNavigation
  };
};

export default useAutoAction;
