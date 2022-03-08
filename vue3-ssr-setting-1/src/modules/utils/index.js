import { err } from '@/utils';

export const createAppEl = (id) => {
  if (!document) err('No document');
  const modalEl = document.createElement('div');
  modalEl.setAttribute('id', id);
  document.body.prepend(modalEl);
  return modalEl;
};