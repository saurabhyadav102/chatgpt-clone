export default function CopyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      // navigator.clipboard API method
      return navigator.clipboard.writeText(text);
    } else {
      // Fallback for insecure contexts or older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      
      // Avoid scrolling to bottom
      textArea.style.position = "fixed";
      textArea.style.top = 0;
      textArea.style.left = 0;
      textArea.style.width = "2em";
      textArea.style.height = "2em";
      textArea.style.padding = 0;
      textArea.style.border = "none";
      textArea.style.outline = "none";
      textArea.style.boxShadow = "none";
      textArea.style.background = "transparent";
      
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand("copy");
        console.log("Fallback: Copying text command was " + (successful ? "successful" : "unsuccessful"));
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
      
      document.body.removeChild(textArea);
    }
  }
  

  