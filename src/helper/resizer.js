export const openChat = () => {
    if (window.innerWidth <= 768) {
        const chatbox = document.getElementsByClassName("chat");
        const sb = document.getElementsByClassName("sb");
        if (chatbox.length > 0) {
          chatbox[0].style.width = "100%";
        }
        if (sb.length > 0) {
          sb[0].style.width = "0%";
          sb[0].style.padding = "0";
        }
      }
}

export const closeChat = () => {
    if (window.innerWidth <= 768) {
        const chatbox = document.getElementsByClassName("chat");
        const sb = document.getElementsByClassName("sb");
        if (chatbox.length > 0) {
          chatbox[0].style.width = "0%";
        }
        if (sb.length > 0) {
          sb[0].style.width = "100%";
          sb[0].style.padding = "0";
        }
      }
}