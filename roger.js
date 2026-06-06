document.addEventListener("DOMContentLoaded", () => {


    function animateCounter(id, target, suffix = "") {

    let count = 0;

    const element =
        document.getElementById(id);

    const speed = target / 100;

    const timer = setInterval(() => {

        count += speed;

        if (count >= target) {

            count = target;
            clearInterval(timer);

        }

        element.textContent =
            Math.floor(count) + suffix;

    }, 20);
}

const statsSection =
    document.querySelector("#placementRate");

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                animateCounter(
                    "placementRate",
                    95,
                    "%"
                );

                animateCounter(
                    "highestPackage",
                    24,
                    " LPA"
                );

                animateCounter(
                    "averagePackage",
                    8,
                    " LPA"
                );

                animateCounter(
                    "studentsPlaced",
                    500,
                    "+"
                );

                observer.disconnect();
            }

        });

    });

observer.observe(statsSection);
    
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

    
    toast.classList.remove("hidden");

    
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);

 
    applyModal.classList.add("hidden");
    applyModal.classList.remove("flex");

   
    applyForm.reset();
});



const jobDetailsModal =
    document.getElementById("jobDetailsModal");

const closeJobModal =
    document.getElementById("closeJobModal");

document.querySelectorAll(".viewBtn").forEach(btn => {

    btn.addEventListener("click", () => {

        document.getElementById("modalTitle").textContent =
            btn.dataset.title;

        document.getElementById("modalCompany").textContent =
            btn.dataset.company;

        document.getElementById("modalSalary").textContent =
            btn.dataset.salary;

        document.getElementById("modalSkills").textContent =
            btn.dataset.skills;

        document.getElementById("modalDescription").textContent =
            btn.dataset.description;

        jobDetailsModal.classList.remove("hidden");
        jobDetailsModal.classList.add("flex");
    });

});

closeJobModal.addEventListener("click", () => {

    jobDetailsModal.classList.add("hidden");
    jobDetailsModal.classList.remove("flex");

});

jobDetailsModal.addEventListener("click", (e) => {

    if (e.target === jobDetailsModal) {

        jobDetailsModal.classList.add("hidden");
        jobDetailsModal.classList.remove("flex");

    }

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




