$(document).ready(function () {

    // Smooth scroll for internal links
    $(".navbar a").on("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            let hash = this.hash;

            if (hash === "#") {
                $("html, body").animate({
                    scrollTop: 0
                }, 800);
            } else {
                $("html, body").animate({
                    scrollTop: $(hash).offset().top
                }, 800);
            }
        }
    });
    // Change navbar background on scroll
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            $(".navbar").css("background", "rgba(26,26,26,0.95)");
        } else {
            $(".navbar").css("background", "rgba(26,26,26,0.8)");
        }
    });
    
    // Search and filter cards and sections
    function filterContent() {
        let selectedCategory = $(".search select").val();
        let keyword = $(".search input").val().toLowerCase();

        // Loop through each content section
        $(".grid-section").each(function () {
            let sectionHasVisibleCards = false;
            const section = $(this);

            // Loop through each card within the current section
            section.find(".card").each(function () {
                let card = $(this);
                let cardCategory = card.data("category");
                let cardText = card.find(".card-info p").text().toLowerCase();

                let isCategoryMatch = (selectedCategory === "all" || cardCategory === selectedCategory);
                let isKeywordMatch = cardText.includes(keyword);

                // Show/hide the card based on both category and keyword
                if (isCategoryMatch && isKeywordMatch) {
                    card.fadeIn();
                    sectionHasVisibleCards = true; // Mark the section as having visible cards
                } else {
                    card.fadeOut();
                }
            });

            // Show/hide the entire section based on whether it contains any visible cards
            if (sectionHasVisibleCards || (selectedCategory === "all" && keyword === "")) {
                section.fadeIn();
            } else {
                section.fadeOut();
            }
        });
    }
    // Bind the filtering function to both input fields
    $(".search select, .search input").on("input", filterContent);

    // Initial call to set the correct state on page load
    filterContent();
    // Change navbar background on scroll
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            $(".navbar").css("background", "rgba(26,26,26,0.95)");
        } else {
            $(".navbar").css("background", "rgba(26,26,26,0.8)");
        }
    });

    // Search and filter cards
    function filterCards() {
        let category = $(".search select").val();
        let keyword = $(".search input").val().toLowerCase();

        $(".card").each(function () {
            let text = $(this).find(".card-info p").text().toLowerCase();
            let cardCategory = $(this).data("category");

            let matchCategory = (category === "all" || cardCategory === category);
            let matchKeyword = text.includes(keyword);

            if (matchCategory && matchKeyword) {
                $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });
    }

    $(".search select, .search input").on("input", filterCards);

    // Open popup
    $(".card").on("click", function () {
        let imgSrc = $(this).find("img").attr("src");
        let text = $(this).find(".card-info p").text();

        $("#popup-img").attr("src", imgSrc);
        $("#popup-text").text(text);
        $("#popup").fadeIn();
    });

    // Close popup
    function closePopup() {
        $("#popup").fadeOut();
    }

    $(".close").on("click", function () {
        closePopup();
    });

    $("#popup").on("click", function (e) {
        if (e.target.id === "popup") {
            closePopup();
        }
    });
});