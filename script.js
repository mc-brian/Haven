$(document).ready(function() {
    const $cards = $('#curated .card');
    const $galleryModal = $('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 hidden"></div>');
    const $modalImage = $('<img class="max-w-4xl max-h-screen object-contain" src="" alt="Enlarged film poster">');
    const $closeButton = $('<button class="absolute top-4 right-4 text-white text-4xl">&times;</button>');

    $galleryModal.append($closeButton);
    $galleryModal.append($modalImage);
    $('body').append($galleryModal);

    function closeModal() {
        $galleryModal.fadeOut(300, function() {
            $(this).addClass('hidden');
        });
    }

    $cards.each(function() {
        $(this).css('cursor', 'pointer').on('click', function() {
            const $img = $(this).find('img');
            $modalImage.attr('src', $img.attr('src'));
            $galleryModal.removeClass('hidden').hide().fadeIn(300);
        });
    });

    // Keyboard navigation (ESC to close)
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && !$galleryModal.hasClass('hidden')) {
            closeModal();
        }
    });

    $closeButton.on('click', closeModal);

    $galleryModal.on('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
});