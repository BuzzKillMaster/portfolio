 export default function scrollToView(target: string, callback?: () => void) {
     const element = document.getElementById(target)
     if (element !== null) element.scrollIntoView({behavior: "smooth" })
     if (callback) callback()
 }