/* Image Gallery Modal - Click to view details with overlay */

const imageData = {
  1: {
    title: "The Elephant Whisperers",
    description: "Academy Award Winner – Best Documentary Short Film. Production sound mixing for this internationally acclaimed documentary.",
    meta: "Production Sound • Documentary • 2023"
  },
  2: {
    title: "Nocturnes",
    description: "Cinema Eye Honors Nominee for Sound Design. English documentary feature with comprehensive sound design work.",
    meta: "Sound Design • Documentary • 2024"
  },
  3: {
    title: "Shivamma Yarehanchinnala",
    description: "Sound design and recording for Kannada feature film with rich soundscape and authentic audio treatment.",
    meta: "Sound Design & Recording • Kannada • 2024"
  },
  4: {
    title: "Kabir Singh",
    description: "Production sound mixing for this commercially successful Hindi feature film directed by Sandeep Reddy Vanga.",
    meta: "Production Sound • Hindi Feature • 2019"
  },
  5: {
    title: "Article 15",
    description: "Production sound recording for this critically acclaimed Hindi feature film directed by Anubhav Sinha.",
    meta: "Production Sound • Hindi Feature"
  },
  6: {
    title: "Bisi-Bisi Ice-Cream",
    description: "Sound design work for this Kannada feature film directed by Arvind Sastry with nuanced audio approach.",
    meta: "Sound Design • Kannada Feature"
  },
  7: {
    title: "Pedro",
    description: "Sound design and foley supervision for Kannada feature film directed by Natesh Hegde.",
    meta: "Sound Design & Foley • Kannada Feature"
  },
  8: {
    title: "Gantumoote",
    description: "Sound design for this Kannada feature film directed by Roopa Rao with detailed sound environment.",
    meta: "Sound Design • Kannada Feature"
  },
  9: {
    title: "Flickering Lights",
    description: "Production sound mixing for documentary directed by Anupama Srinivasan and Anirban Dutta.",
    meta: "Production Sound • Documentary • 2023"
  },
  10: {
    title: "Diaries from an Unconventional Journey",
    description: "Sound design for documentary feature directed by Sagar Shiriskar with thoughtful audio narrative.",
    meta: "Sound Design • Documentary Feature"
  }
};

class GalleryModal {
  constructor() {
    this.modal = document.getElementById('imageModal');
    this.modalBackdrop = document.getElementById('modalBackdrop');
    this.modalClose = document.getElementById('modalClose');
    this.modalImage = document.getElementById('modalImage');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalDescription = document.getElementById('modalDescription');
    this.modalMeta = document.getElementById('modalMeta');
    this.gallery = document.getElementById('image-gallery');

    if (this.gallery) {
      this.init();
    }
  }

  init() {
    // Add click listeners to gallery items
    this.gallery.querySelectorAll('.gallery-item').forEach(item => {
      const toggleBtn = item.querySelector('.overlay-toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.openModal(item);
        });
      }
    });

    // Close button
    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => this.closeModal());
    }

    // Backdrop click
    if (this.modalBackdrop) {
      this.modalBackdrop.addEventListener('click', () => this.closeModal());
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.closeModal();
      }
    });
  }

  openModal(galleryItem) {
    const imageId = galleryItem.dataset.imageId;
    const img = galleryItem.querySelector('img');
    const data = imageData[imageId];

    if (!data) return;

    // Update modal content
    this.modalImage.src = img.src;
    this.modalImage.alt = img.alt;
    this.modalTitle.textContent = data.title;
    this.modalDescription.textContent = data.description;
    this.modalMeta.textContent = data.meta;

    // Show modal
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Initialize gallery when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new GalleryModal();
  });
} else {
  new GalleryModal();
}