export default function Footer(){
    return(
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 bg-blue-300  h-[8vh] text-center">
  <aside className="grid-flow-col items-center">
    
    <p>Copyright © {new Date().getFullYear()} - Task Tracker </p>
  </aside>
 
    
</footer>
    )
}
