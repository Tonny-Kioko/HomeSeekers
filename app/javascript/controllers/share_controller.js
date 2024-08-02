import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  copyLink() {
    navigator.clipboard.writeText(this.element.dataset.shareUrl)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch(err => {
        console.error("Could not copy text: ", err);
      });
  }

  whatsappShare() {
    const url = `https://web.whatsapp.com/send?text=${encodeURIComponent(this.element.dataset.shareUrl)}`;
    window.open(url, "_blank");
  }

  telegramShare() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.element.dataset.shareUrl)}`;
    window.open(url, "_blank");
  }

  twitterShare() {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.element.dataset.shareUrl)}`;
    window.open(url, "_blank");
  }

  facebookShare() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.element.dataset.shareUrl)}`;
    window.open(url, "_blank");
  }

  emailShare() {
    const subject = "Check this out!";
    const body = `I wanted to share this with you: ${this.element.dataset.shareUrl}`;
    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url);
  }

  embedLink() {
    const embedCode = `<iframe src="${this.element.dataset.shareUrl}" width="600" height="400"></iframe>`;
    navigator.clipboard.writeText(embedCode)
      .then(() => {
        alert("Embed code copied to clipboard");
      })
      .catch(err => {
        console.error("Could not copy text: ", err);
      });
  }

  messagesShare() {
    const url = `sms:?&body=${encodeURIComponent(this.element.dataset.shareUrl)}`;
    window.open(url);
  }
}
