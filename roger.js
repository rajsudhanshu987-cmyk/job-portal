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

    const notifications = [
    "🔔 New placement added: Data Scientist",
    "🔔 New placement added: Frontend Developer",
    "🔔 New placement added: Backend Engineer",
    "🔔 New placement added: ML Engineer",
    "🔔 New placement added: UI/UX Designer"
];

const notificationBox = document.getElementById("jobNotification");

function showNotification() {
    const random =
        notifications[Math.floor(Math.random() * notifications.length)];

    notificationBox.textContent = random;

    notificationBox.classList.remove("hidden");

    setTimeout(() => {
        notificationBox.classList.add("hidden");
    }, 3000);
}

setInterval(showNotification, 10000);

const applyForm = document.getElementById("applyForm");
const toast = document.getElementById("toast");

applyForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    // Show toast
    toast.classList.remove("hidden");

    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);

    // Close modal
    applyModal.classList.add("hidden");
    applyModal.classList.remove("flex");

    // Reset form
    applyForm.reset();
});


    const mobileBtn = document.getElementById("mobileBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    mobileBtn?.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
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




