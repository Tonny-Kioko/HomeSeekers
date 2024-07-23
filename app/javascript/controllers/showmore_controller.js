

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.show-more').forEach((element) => {
      element.addEventListener('click', function() {
        const reviewContent = this.previousElementSibling;
        const fullContent = reviewContent.getAttribute('data-full-content');

        if (this.getAttribute('data-expanded') === 'false') {
          reviewContent.textContent = fullContent;
          this.querySelector('span').textContent = 'Show less';
          this.setAttribute('data-expanded', 'true');
        } else {
          reviewContent.textContent = fullContent.substring(0, 200) + '...';
          this.querySelector('span').textContent = 'Show more';
          this.setAttribute('data-expanded', 'false');
        }
      });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.show-more').forEach((element) => {
      element.addEventListener('click', function() {
        const descriptionContent = this.previousElementSibling;
        const fullContent = descriptionContent.getAttribute('data-full-content');

        if (this.getAttribute('data-expanded') === 'false') {
          reviewContent.textContent = fullContent;
          this.querySelector('span').textContent = 'Show less';
          this.setAttribute('data-expanded', 'true');
        } else {
          reviewContent.textContent = fullContent.substring(0, 500) + '...';
          this.querySelector('span').textContent = 'Show more';
          this.setAttribute('data-expanded-description', 'false');
        }
      });
    });
});
