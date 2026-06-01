function toggleModal(openBtnId, modalId, closeSelectors) {
    const openBtn = document.getElementById(openBtnId);
    const modal = document.getElementById(modalId);
    const closeElements = modal.querySelectorAll(closeSelectors);

    if(!modal || !openBtn) return;

    openBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    });