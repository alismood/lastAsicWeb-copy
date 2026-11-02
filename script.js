$(document).ready(function () {
    console.log("jQuery is ready!");

    // Tag, ID, and class selectors.
    $("h1").addClass("text-primary");
    $("#greeting").text("Hello, I'm Ali.");
    $("#headline").text("Aspiring AI engineer. Learning through real projects.");
    $(".status").addClass("text-success");

    // Let jQuery control the skill bar animation.
    $(".progress-bar").css("transition", "none");

    $("#light-theme").on("click", function () {
        $("html").attr("data-bs-theme", "light");
        $("#light-theme").addClass("active").attr("aria-pressed", "true");
        $("#dark-theme").removeClass("active").attr("aria-pressed", "false");
    });

    $("#dark-theme").on("click", function () {
        $("html").attr("data-bs-theme", "dark");
        $("#dark-theme").addClass("active").attr("aria-pressed", "true");
        $("#light-theme").removeClass("active").attr("aria-pressed", "false");
    });

    $("#hide-facts").on("click", function () {
        $("#fun-facts").hide();
    });
    $("#show-facts").on("click", function () {
        $("#fun-facts").show();
    });
    $("#toggle-facts").on("click", function () {
        $("#fun-facts").toggle();
    });

    $("#fade-in").on("click", function () {
        $(".gallery-image").stop(true, true).fadeIn(500);
    });
    $("#fade-out").on("click", function () {
        $(".gallery-image").stop(true, true).fadeOut(500);
    });
    $("#fade-toggle").on("click", function () {
        $(".gallery-image").stop(true, true).fadeToggle(500);
    });

    $(".panel-heading").on("click", function () {
        var isOpen = $(this).attr("aria-expanded") === "true";
        $(this).attr("aria-expanded", !isOpen);
        $(this).find("span").text(isOpen ? "+" : "-");
        $(this).parent().next(".panel-content").stop(true, true).slideToggle(300);
    });
    $("#open-panels").on("click", function () {
        $(".panel-content").stop(true, true).slideDown(300);
        $(".panel-heading").attr("aria-expanded", "true").find("span").text("-");
    });
    $("#close-panels").on("click", function () {
        $(".panel-content").stop(true, true).slideUp(300);
        $(".panel-heading").attr("aria-expanded", "false").find("span").text("+");
    });

    // Use text() so typed skills are treated as text, not HTML.
    function addSkill(atStart) {
        var skill = $("#new-skill").val().trim();
        if (skill === "") {
            $("#skill-message").text("Please enter a skill first.");
            return;
        }

        var item = $("<li></li>").text(skill);
        if (atStart) {
            $("#skill-list").prepend(item);
        } else {
            $("#skill-list").append(item);
        }
        $("#new-skill").val("").focus();
        $("#skill-message").text(skill + " added.");
    }

    $("#add-skill").on("click", function () {
        addSkill(false);
    });
    $("#prepend-skill").on("click", function () {
        addSkill(true);
    });
    $("#remove-skill").on("click", function () {
        var lastSkill = $("#skill-list li").last();
        if (lastSkill.length === 0) {
            $("#skill-message").text("There are no skills to remove.");
            return;
        }
        $("#skill-message").text(lastSkill.text() + " removed.");
        lastSkill.remove();
    });

    $("#change-link").on("click", function () {
        if ($("#social-link").attr("href") === "https://github.com/alismood") {
            $("#social-link").attr("href", "https://www.linkedin.com/in/ali-zhabaikhan").text("My LinkedIn →");
        } else {
            $("#social-link").attr("href", "https://github.com/alismood").text("My GitHub →");
        }
    });

    $("#visitor-name, #visitor-email").on("input", function () {
        $("#name-preview").text($("#visitor-name").val() || "Your name");
        $("#email-preview").text($("#visitor-email").val() || "Your email");
    });
    $("#contact-form").on("submit", function (event) {
        event.preventDefault();
    });

    var skillsVisible = false;
    $("#animate-skills").on("click", function () {
        skillsVisible = !skillsVisible;
        $("#html-bar").stop(true).animate({ width: skillsVisible ? "80%" : "0%" }, 800);
        $("#css-bar").stop(true).animate({ width: skillsVisible ? "65%" : "0%" }, 800);
        $("#js-bar").stop(true).animate({ width: skillsVisible ? "50%" : "0%" }, 800);
        $("#html-progress").attr("aria-valuenow", skillsVisible ? 80 : 0);
        $("#css-progress").attr("aria-valuenow", skillsVisible ? 65 : 0);
        $("#js-progress").attr("aria-valuenow", skillsVisible ? 50 : 0);
        $(this).attr("aria-pressed", skillsVisible);
    });
});
