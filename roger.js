document.addEventListener("DOMContentLoaded", () => {

    
    function toggleModal(openBtnId, modalId, closeSelectors) {
        const openBtn = document.getElementById(openBtnId);
        const modal = document.getElementById(modalId);

        if (!openBtn || !modal) return;

        const closeBtns = modal.querySelectorAll(closeSelectors);

       
        openBtn.addEventListener("click", () => {
            modal.classList.remove("hidden");
            modal.classList.add("flex");
        });

    
        closeBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                modal.classList.add("hidden");
                modal.classList.remove("flex");
            });
        });

       
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.add("hidden");
                modal.classList.remove("flex");
            }
        });
    }

  
    toggleModal(
        "loginSeekerBtn",
        "seekerModal",
        ".closeSeeker"
    );

    
    toggleModal(
        "loginRecruiterBtn",
        "LoginModal",
        ".closeRecruiter, .closeSeeker"
    );

   
    toggleModal(
        "openPostJob",
        "postJobModal",
        "#closePostJob, #cancelPostJob"
    );

   
    const applyModal = document.getElementById("applyModal");

    document.querySelectorAll(".applyBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            applyModal.classList.remove("hidden");
            applyModal.classList.add("flex");
        });
    });

    document
        .querySelectorAll("#closeApply, #cancelApply")
        .forEach(btn => {
            btn.addEventListener("click", () => {
                applyModal.classList.add("hidden");
                applyModal.classList.remove("flex");
            });
        });

 
    applyModal?.addEventListener("click", (e) => {
        if (e.target === applyModal) {
            applyModal.classList.add("hidden");
            applyModal.classList.remove("flex");
        }
    });

});




