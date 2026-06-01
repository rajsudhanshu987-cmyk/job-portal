function toggleModal(openBtnId, modalId, closeSelectors) {
    const openBtn = document.getElementById(openBtnId);
    const modal = document.getElementById(modalId);
    const closeElements = modal.querySelectorAll(closeSelectors);

    if(!modal || !openBtn) return;

    openBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    });

    closeElements.forEach(function (btn) {
        btn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    });

    document.querySelectorAll(".applyBtn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const modal = document.getElementById("applyModal");
            modal.classList.remove("hidden");
            modal.classList.add("flex");
        });
    });
    toggleModal("closeApply", "applyModal", "#closeApply","#cancelApply");
}


document.addEventListener("DOMContentLoaded", function() {
    toggleModal("openLogin", "loginModal", "#closeLogin","#cancelLogin");
    toggleModal("openSignup", "signupModal", "#closeSignup","#cancelSignup");
    toggleModal("openPostJob", "postJobModal", "#closePostJob","#cancelPostJob");
}); 


